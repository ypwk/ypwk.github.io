import json
import os
from datetime import datetime as dt
from collections import defaultdict
from rich.console import Console
from time import time

CV_IDX = os.path.join("cv")
CV_LOC = os.path.join(CV_IDX, "cv")
WEB_LOC = os.path.join("reactWebsite", "pages")

console = Console()


def time_function(func):
    def wrapper(*args, **kwargs):
        start_time = time()
        result = func(*args, **kwargs)
        elapsed_time = time() - start_time
        console.print(
            f"[bold green]Executed {func.__name__} in {elapsed_time:.4f} seconds[/bold green]"
        )
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
        console.print("[bold red]File not found.[/bold red]")
    except json.JSONDecodeError:
        console.print("[bold red]Error decoding JSON.[/bold red]")
    except Exception as e:
        console.print(f"[bold red]An error occurred: {e}[/bold red]")


def escape_tex_special_chars(text):
    """Escapes TeX special characters in the given text."""
    if type(text) is not str:
        return

    replacements = {
        "&": "\\&",
        "%": "\\%",
        "$": "\\$",
        "#": "\\#",
        "_": "\\_",
        "{": "\\{",
        "}": "\\}",
        "~": "\\textasciitilde{}",
        "^": "\\textasciicircum{}",
    }
    for old, new in replacements.items():
        text = text.replace(old, new)
    return text


@time_function
def generate_cv_education(cv_data):
    console.print("[bold blue]Generating Education...[/bold blue]")
    tex = "\\cvsection{Education}\n\\begin{cventries}\n"
    for edu in cv_data["education"]:
        edu = {key: escape_tex_special_chars(value) for key, value in edu.items()}
        tex += f"\n\\cventry{{{edu['degree']}}}{{{edu['institution']}}}"
        tex += f"{{{edu['location']}}}{{{edu['period']}}}\n"
        if "gpa" in edu.keys() and edu["gpa"] != "":
            tex += "{\n\\begin{cvitems}\n"
            tex += f"\\item {{{edu['gpa']}}}\n"
            tex += "\\end{cvitems}\n}\n"
        else:
            tex += "{}"
    tex += "\n\\end{cventries}\n"
    with open(os.path.join(CV_LOC, "education.tex"), "w") as f:
        f.write(tex)


@time_function
def generate_cv_work(cv_data):
    if len(cv_data["workExperience"]) == 0:
        return

    console.print("[bold blue]Generating Professional Experience...[/bold blue]")
    tex = "\\cvsection{Professional Experience}\\begin{cvskills}\n"
    for work in cv_data["workExperience"]:
        work = {key: escape_tex_special_chars(value) for key, value in work.items()}
        tex += f"\\cvskill{{{work['period']}}}{{{work['position']}}}"
        tex += f"{{{work['organization']}}}\n"
    tex += "\\end{cvskills}\n"
    with open(os.path.join(CV_LOC, "professional.tex"), "w") as f:
        f.write(tex)


@time_function
def generate_cv_publications(cv_data):
    if len(cv_data["publications"]) == 0:
        return

    console.print("[bold blue]Generating Publications...[/bold blue]")
    tex = "\\cvsection{Publications}\n\n"
    pub_cont = {
        "IN-PREP": "\\begin{cvpubs}\n\\small \\color{black}\n",
        "IN-REV": "\\begin{cvpubs}\n",
        "PUB": "\\begin{cvpubs}\n",
    }
    for pub in cv_data["publications"]:
        pub = {key: escape_tex_special_chars(value) for key, value in pub.items()}
        pub_cont[pub["status"]] += f"\\cvpub{{{pub['citation']}}}\n\n"
    if pub_cont["PUB"] != "\\begin{cvpubs}\n":
        tex += "\n\\cvsubsection{Published}\n\n" + pub_cont["PUB"] + "\\end{cvpubs}\n"
    if pub_cont["IN-REV"] != "\\begin{cvpubs}\n":
        tex += (
            "\n\\cvsubsection{In Review}\n\n" + pub_cont["IN-REV"] + "\\end{cvpubs}\n"
        )
    if pub_cont["IN-PREP"] != "\\begin{cvpubs}\n\\small \\color{black}\n":
        tex += "\n\\cvsubsection{In Prep}\n\n" + pub_cont["IN-PREP"] + "\\end{cvpubs}\n"
    with open(os.path.join(CV_LOC, "publications.tex"), "w") as f:
        f.write(tex)


@time_function
def generate_cv_awards(cv_data):
    if len(cv_data["honors"]) == 0:
        return

    console.print("[bold blue]Generating Awards...[/bold blue]")
    aw_by_year = defaultdict(list)
    for award in cv_data["honors"]:
        award = {key: escape_tex_special_chars(value) for key, value in award.items()}
        aw_by_year[award["date"]].append(award)
    sorted_years = sorted(aw_by_year.keys(), reverse=True)

    tex = "\\cvsection{Awards, Fellowships, \\& Grants}\n\n"
    for year in sorted_years:
        tex += f"%\t{year}\n\\begin{{cvhonors}}\n"
        first = True
        for award in aw_by_year[year]:
            money = f"\\$ {award['money']}" if award["money"] else ""
            if not first:
                year = ""
            tex += f"\\cvhonor\n{{{award['award']}}}\n{{{award['institution']}}}\n{{{money}}}\n{{{year}}}\n"
            first = False
        tex += "\n\\end{cvhonors}\n"
    with open(os.path.join(CV_LOC, "honors.tex"), "w") as f:
        f.write(tex)


@time_function
def generate_cv_presentations(cv_data):
    if len(cv_data["presentations"]) == 0:
        return

    console.print("[bold blue]Generating Presentations...[/bold blue]")
    categories = {
        "Invited Talks": lambda p: "TALK" in p["category"],
        "Contributed Presentations": lambda p: "PRESENTATION" in p["category"],
    }

    # Function to format a single presentation entry
    def format_presentation(p):
        authors = p["authors"].split(", ")
        formatted_authors = (
            ", ".join(authors[:-1]) + f", and {authors[-1]}"
            if len(authors) > 1
            else authors[0]
        )
        return f"    \\cvpub{{{{{formatted_authors}}}. {p['year']}. {p['title']}. {p['type']}: {p['event']}, {p['city']}, {p['state']}.}}\n\n"

    # Generate LaTeX code
    tex = "\\cvsection{Presentations}\n\n"

    for category, filter_func in categories.items():
        filtered_presentations = [p for p in cv_data["presentations"] if filter_func(p)]
        if filtered_presentations:
            tex += f"\\cvsubsection{{{category}}}\n\n"
            tex += "\\begin{cvpubs}\n"
            for p in filtered_presentations:
                p = {key: escape_tex_special_chars(value) for key, value in p.items()}
                tex += format_presentation(p)
            tex += "\\end{cvpubs}\n"
    with open(os.path.join(CV_LOC, "presentation.tex"), "w") as f:
        f.write(tex)


@time_function
def generate_cv_research_experience(cv_data):
    if len(cv_data["experience"]) == 0:
        return

    console.print("[bold blue]Generating Research Experience...[/bold blue]")

    # short

    tex = "\\cvsection{Research Experience}\n\n\\begin{cventries}\n"
    for exp in cv_data["experience"]:
        exp = {key: escape_tex_special_chars(value) for key, value in exp.items()}
        tex += "\\cventry\n"
        tex += f"{{Advisor: {exp['advisor']}}}\n{{{exp['project']}}}\n{{{exp['institution']}}}\n{{{exp['period']}}}{{}}\n"
    tex += "\n\\end{cventries}\n"

    # full (doesn't work since all list entries are None.... JSON to python dict conversion)

    # tex = "\\cvsection{Research Experience}\n\n\\begin{cventries}\n"
    # for exp in cv_data["experience"]:
    #     exp = {key: escape_tex_special_chars(value) for key, value in exp.items()}
    #     tex += "\\cventry\n"
    #     tex += f"{{Advisor: {exp['advisor']}}}\n{{{exp['project']}}}\n{{{exp['institution']}}}\n{{{exp['period']}}}\n"
    #     tex += "{{\\begin{cvitems}\n"
    #     for det in exp["details"]:
    #         det = {key: escape_tex_special_chars(value) for key, value in det.items()}
    #         tex += "\\item{{{exp['details']}}}\n"
    #     tex += "\\end{cvitems}\n}}\n\n"
    # tex += "\n\\end{cventries}\n"

    with open(os.path.join(CV_LOC, "research.tex"), "w") as f:
        f.write(tex)


@time_function
def generate_cv_extracurricular(cv_data):
    if len(cv_data["outreach"]) == 0:
        return

    console.print("[bold blue]Generating Outreach...[/bold blue]")
    categories = {
        "Service and Outreach": lambda p: "SERVICE" in p["category"],
        "Development": lambda p: "DEVELOPMENT" in p["category"],
        "Peer Review": lambda p: "PEER-REVIEW" in p["category"],
        "Professional Memberships": lambda p: "PRO-MEMB" in p["category"],
    }

    # Generate LaTeX code
    tex = "\\cvsection{Outreach \\& Professional Development}\n\n"

    for category, filter_func in categories.items():
        ec = [e for e in cv_data["outreach"] if filter_func(e)]
        if ec:
            tex += f"\\cvsubsection{{{category}}}\n\n"
            if category == "Service and Outreach":
                tex += "\\begin{cvhonors}\n"
                for e in ec:
                    e = {
                        key: escape_tex_special_chars(value) for key, value in e.items()
                    }
                    tex += f"\\cvhonor{{{e['organization']}}}{{{e['role']}}}{{}}{{{e['period']}}}\n"
                tex += "\\end{cvhonors}\n\n"
            elif category == "Development":
                tex += "\\begin{cvpubs}\n"
                for e in ec:
                    e = {
                        key: escape_tex_special_chars(value) for key, value in e.items()
                    }
                    tex += f"\\cvpub{{{e['organization']}}}{{{e['role']}}}{{}}{{{e['period']}}}\n"
                tex += "\\end{cvpubs}\n"
            else:
                tex += "\\begin{small} \\color{black}\n"
                for e in ec:
                    e = {
                        key: escape_tex_special_chars(value) for key, value in e.items()
                    }
                    tex += f"\\cvpub{{{e['organization']}}}\\\\\n"

    with open(os.path.join(CV_LOC, "extracurricular.tex"), "w") as f:
        f.write(tex)


@time_function
def generate_cv(cv_data):
    console.print("[bold blue]Generating CV...[/bold blue]")
    console.print("[bold blue]Generating Header...[/bold blue]")
    c_date = dt.now().strftime("%b, %Y")
    contact = {
        key: escape_tex_special_chars(value)
        for key, value in cv_data["contact"].items()
    }
    tex = "\\documentclass[11pt, letterpaper, draft]{academic-cv}\n"
    tex += "\\geometry{left=0.75in, top=0.75in, right=0.75in, bottom=0.75in, footskip=.5cm}\n"
    tex += "\\fontdir[fonts/]\n\\renewcommand{\\acvHeaderSocialSep}{\\quad\\textbar\\quad}\n"
    tex += f"\\name{{{cv_data['name']}}}{{}}\n"
    tex += f"\\position{{{escape_tex_special_chars(cv_data['position'])}{{\\enskip\\cdotp\\enskip}}{escape_tex_special_chars(cv_data['department'])}}}\n"
    tex += f"\\address{{{escape_tex_special_chars(cv_data['institution'])}, {escape_tex_special_chars(contact['location'])}}}\n"
    tex += f"\\email{{{contact['email']}}}\n\\homepage{{{contact['website']}}}\n"
    tex += f"\\github{{{contact['github']}}}\n"
    tex += f"\\begin{{document}}\n\\makecvheader\n\\makecvfooter{{{c_date}}}{{{cv_data['name']} ~~~·~~~ Curriculum Vitae}}{{\\thepage}}\n"
    tex += "\\input{cv/education.tex}\n\\input{cv/professional.tex}\n\\input{cv/publications.tex}\n\\input{cv/honors.tex}\n"
    tex += "\\input{cv/presentation.tex}\n\\input{cv/teaching.tex}\n\\input{cv/mentoring.tex}\n\\input{cv/research.tex}\n\\input{cv/extracurricular.tex}\n"
    tex += "\\end{document}"
    with open(os.path.join(CV_IDX, "cv.tex"), "w", encoding="utf-8") as f:
        f.write(tex)

    # generate the rest
    generate_cv_education(cv_data)
    generate_cv_work(cv_data)
    generate_cv_publications(cv_data)
    generate_cv_awards(cv_data)
    generate_cv_presentations(cv_data)
    generate_cv_research_experience(cv_data)
    generate_cv_extracurricular(cv_data)
    # generate_bib_file(cv_data, file_path="pubs.bib")

    console.print("[bold green]Done Generating![/bold green]")


@time_function
def generate_website_projects(cv_data):
    console.print("[bold blue]Generating Projects...[/bold blue]")
    r = """
    import TabInfo from "@/components/TabInfo";
    import ExpandableItem from "@/components/ExpandableItem";

    export default function Page() {
    return (<div className="container">
        <TabInfo tabName="Projects" />
        <div className="row">
        <div className="project-title">
          <h3>Projects</h3>
          <p>Some notable projects that I&apos;ve worked on in the past.</p>
        </div>
    """
    for p in cv_data["projects"]:
        if "link" in p.keys():
            r += f"""
                <ExpandableItem
                title={{'{p['project']}'}}
                period={{'{p['period']}'}}
                link={{'{p['link']}'}}
                description={{{p['details']}}}
                />
            """
        else:
            r += f"""
                <ExpandableItem
                title={{'{p['project']}'}}
                period={{'{p['period']}'}}
                description={{{p['details']}}}
                />
            """

    r += """
        </div>
        </div>
    );
    }
    """
    with open(os.path.join(WEB_LOC, "projects.tsx"), "w", encoding="utf-8") as f:
        f.write(r)


@time_function
def generate_website_worked(cv_data):
    console.print("[bold blue]Generating Work/Education...[/bold blue]")
    r = """
    import TabInfo from "@/components/TabInfo";
    import ExpandableItem from "@/components/ExpandableItem";
    import InfoCard from "@/components/InfoCard";

    export default function Page() {
    return (<div className="container">
        <TabInfo tabName="Work & Education" />
        <div className="row">
        <div className="project-title">
          <h3>Work Experience</h3>
        </div>
    """
    for p in cv_data["workExperience"]:
        r += f"""
            <ExpandableItem
            title={{'{p['position']}'}}
            period={{'{p['period']}'}}
            institution={{'{p['organization']}'}}
            location={{'{p['location']}'}}
            description={{{p['details']}}}
            />
        """

    r += """
        </div>
        <div className="project-subtitle">
          <h3>Education</h3>
        </div>
    """

    for p in cv_data["education"]:
        r += f"""
            <InfoCard
            title={{'{p['institution']}'}}
            period={{'{p['period']}'}}
            institution={{'{p['degree']}'}}
            location={{'{p['location']}'}}
            advisor={{'{p['gpa']}'}}
            />
        """

    r += """
        </div>
    );
    }
    """
    with open(os.path.join(WEB_LOC, "work_education.tsx"), "w", encoding="utf-8") as f:
        f.write(r)


@time_function
def generate_website_research(cv_data):
    console.print("[bold blue]Generating Research...[/bold blue]")
    r = """
    import TabInfo from "@/components/TabInfo";
    import ExpandableItem from "@/components/ExpandableItem";
    import InfoCard from "@/components/InfoCard";

    export default function Page() {
    return (<div className="container">
        <TabInfo tabName="Research" />
        <div className="row">
        <div className="project-title">
          <h3>Publications</h3>
        </div>
        <ul>
    """
    for idx in range(min(len(cv_data["publications"]), 10)):
        r += f"""
            <li>{{'{cv_data['publications'][idx]['citation']}'}}</li>
        """

    r += """
        </ul>
        </div>
        <div className="project-subtitle">
          <h3>Research Experience</h3>
        </div>
    """

    for p in cv_data["experience"]:
        if "link" in p.keys():
            r += f"""
            <ExpandableItem
            title={{'{p['project']}'}}
            period={{'{p['period']}'}}
            institution={{'{p['institution']}'}}
            location={{'{p['location']}'}}
            advisor={{'{p['advisor']}'}}
            link={{'{p['link']}'}}
            description={{{p['details']}}}
            />
            """
        else:
            r += f"""
            <ExpandableItem
            title={{'{p['project']}'}}
            period={{'{p['period']}'}}
            institution={{'{p['institution']}'}}
            location={{'{p['location']}'}}
            advisor={{'{p['advisor']}'}}
            description={{{p['details']}}}
            />
            """

    r += """
        </div>
    );
    }
    """
    with open(os.path.join(WEB_LOC, "research.tsx"), "w", encoding="utf-8") as f:
        f.write(r)


@time_function
def generate_website(cv_data):
    console.print("[bold blue]Generating Website...[/bold blue]")
    generate_website_projects(cv_data)
    generate_website_worked(cv_data)
    generate_website_research(cv_data)
    console.print("[bold green]Done Generating![/bold green]")


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
generate_cv(cv_data)
cv_data = read_json_file(file_path)
generate_website(cv_data)
