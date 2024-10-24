import json
from time import time

from utils.cv import generate_cv
from utils.website import generate_website


def time_function(func):
    def wrapper(*args, **kwargs):
        start_time = time()
        result = func(*args, **kwargs)
        elapsed_time = time() - start_time
        print(f"Executed {func.__name__} in {elapsed_time:.4f}")
        return result

    return wrapper


@time_function
def read_json_file(file_path):
    """Reads a JSON file and returns the data."""
    try:
        with open(file_path, "r", encoding="utf8") as file:
            data = json.load(file)
            return data
    except FileNotFoundError:
        print("[bold red]File not found.[/bold red]")
    except json.JSONDecodeError:
        print("[bold red]Error decoding JSON.[/bold red]")
    except Exception as e:
        print(f"[bold red]An error occurred: {e}[/bold red]")


def format_bib_entry(
    entry_type, citation, title, authors, year, journal=None, note=None
):
    """Formats a BibTeX entry."""
    bib_entry = f"@{entry_type}{{{citation.split()[0]},\n"
    bib_entry += f'  title={{"{title}"}},\n'
    bib_entry += f'  author={{"{authors}"}},\n'
    bib_entry += f'  year={{"{year}"}},\n'
    if journal:
        bib_entry += f'  journal={{"{journal}"}},\n'
    if note:
        bib_entry += f'  note={{"{note}"}},\n'
    bib_entry += "}\n\n"
    return bib_entry


def generate_bib_file(cv_data, file_path="pubs.bib"):
    """Generates a BibTeX file from CV data."""
    bib_entries = ""

    # Process publications
    for pub in cv_data["publications"]:
        bib_entries += format_bib_entry(
            entry_type="article",
            citation=pub["citation"],
            title=pub["title"],
            authors=pub["authors"],
            year=pub["year"],
            journal=pub.get("journal"),
        )

    # Process presentations
    for pres in cv_data["presentations"]:
        bib_entries += format_bib_entry(
            entry_type="misc",
            citation=pres["title"],
            title=pres["title"],
            authors=pres["authors"],
            year=pres["year"],
            note=f"{pres['type']} at {pres['event']}, {pres['city']}, {pres['state']}",
        )

    # Write to file
    with open(file_path, "w", encoding="utf-8") as bib_file:
        bib_file.write(bib_entries)


# Path to your JSON file
file_path = "cv.json"

# Read and print the data
cv_data = read_json_file(file_path)
generate_cv(cv_data, style="n")
cv_data = read_json_file(file_path)
generate_cv(cv_data, style="v")
cv_data = read_json_file(file_path)
generate_website(cv_data)
