import os
from datetime import datetime as dt
from collections import defaultdict
from time import time
import shutil
import subprocess


def time_function(func):
    def wrapper(*args, **kwargs):
        start_time = time()
        result = func(*args, **kwargs)
        elapsed_time = time() - start_time
        print(f"Executed {func.__name__} in {elapsed_time:.4f}")
        return result

    return wrapper


def escape_tex_special_chars(text):
    """Escapes TeX special characters in the given text."""
    if type(text) is not str:
        if type(text) is list:
            for _ in text:
                if type(_) is not str:
                    return None
            return [escape_tex_special_chars(_) for _ in text]
        return None

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


def generate_output_path(style):
    CV_IDX = os.path.join(f"cv_{style}")
    CV_LOC = os.path.join(CV_IDX, "cv")
    return {"IDX": CV_IDX, "LOC": CV_LOC}


def write_tex_file(output_path, filename, content):
    """Writes the given content to a .tex file."""
    os.makedirs(output_path, exist_ok=True)
    with open(os.path.join(output_path, filename), "w", encoding="utf-8") as f:
        f.write(content)


@time_function
def generate_cv_education(cv_data, style="v"):
    print("Generating Education...")
    tex = "\\cvsection{Education}\n\\begin{cventries}\n"

    if style == "n":
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
    elif style == "v":
        tex = "\\begin{rSection}{Education}\n"
        for edu in cv_data["education"]:
            edu = {key: escape_tex_special_chars(value) for key, value in edu.items()}
            tex += f"\n{{\\textbf {{{edu['institution']}}} }}\n"
            tex += f"\\\\ {edu['period']}\n"
            tex += f"\\\\ {edu['degree']}\n"
        tex += "\n\\end{rSection}\n"
    else:
        raise ValueError(f"Unrecognized style {style}.")

    write_tex_file(generate_output_path(style)["LOC"], "education.tex", tex)


@time_function
def generate_cv_work(cv_data, mode="s", style="v"):
    if len(cv_data["workExperience"]) == 0:
        return

    print("Generating Professional Experience...")
    if style == "v":
        tex = "\\begin{rSection}{Professional Experience}\n\n"
        for work in cv_data["workExperience"]:
            work = {key: escape_tex_special_chars(value) for key, value in work.items()}
            tex += f"\\begin{{rSubsection}}{{{work['position']}}}{{{work['period']}}}{{{work['location']}}}{{\\small{{{work['organization']}}}}}\n"
            if mode == "l" and work["details"] is not None and len(work["details"]) > 0:
                tex += "\\begin{itemize}\n"
                for det in work["details"]:
                    tex += f"\t\\item {det}\n"
                tex += "\\end{itemize}\n"
            tex += "\\end{rSubsection}\n"
        tex += "\\end{rSection}\n"
    elif style == "n":
        if mode == "s":
            tex = "\\cvsection{Professional Experience}\\begin{cvskills}\n"
            for work in cv_data["workExperience"]:
                work = {
                    key: escape_tex_special_chars(value) for key, value in work.items()
                }
                tex += f"\\cvskill{{{work['period']}}}{{{work['position']}}}"
                tex += f"{{{work['organization']}}}\n"
            tex += "\\end{cvskills}\n"
        elif mode == "l":
            tex = "\\cvsection{Professional Experience}\n\n\\begin{cventries}\n"
            for work in cv_data["workExperience"]:
                work = {
                    key: escape_tex_special_chars(value) for key, value in work.items()
                }
                tex += "\\cventry\n"
                tex += f"{{{work['position']}}}\n{{{work['organization']}}}\n{{{work['period']}}}\n{{}}"
                tex += "{{\\begin{cvitems}\n"
                for det in work["details"]:
                    tex += f"\\item {det}\n"
                tex += "\\end{cvitems}\n}}\n\n"
            tex += "\n\\end{cventries}\n"
        else:
            raise ValueError(f"Unrecognized mode {mode}.")

    write_tex_file(generate_output_path(style)["LOC"], "professional.tex", tex)


@time_function
def generate_cv_publications(cv_data, style="v", mode="l"):
    """_summary_

    Args:
        cv_data (_type_): _description_
        style (str, optional): Verbose or New. Defaults to "v".
        mode (str, optional): LaTeX or Manual. Defaults to "l".
    """
    if len(cv_data["publications"]) == 0:
        return

    if mode == "l":
        shutil.copy(
            "pubs.bib",
            os.path.join(generate_output_path(style=style)["IDX"], "pubs.bib"),
        )

    print("Generating Publications...")
    if style == "n":
        tex = "\\cvsection{Publications}\n\n"
        if mode == "m":
            pub_cont = {
                "IN-PREP": "\\begin{cvpubs}\n\\small \\color{black}\n",
                "IN-REV": "\\begin{cvpubs}\n",
                "PUB": "\\begin{cvpubs}\n",
            }
            for pub in cv_data["publications"]:
                pub = {
                    key: escape_tex_special_chars(value) for key, value in pub.items()
                }
                pub_cont[pub["status"]] += f"\\cvpub{{{pub['citation']}}}\n\n"
            if pub_cont["PUB"] != "\\begin{cvpubs}\n":
                tex += (
                    "\n\\cvsubsection{Published}\n\n"
                    + pub_cont["PUB"]
                    + "\\end{cvpubs}\n"
                )
            if pub_cont["IN-REV"] != "\\begin{cvpubs}\n":
                tex += (
                    "\n\\cvsubsection{In Review}\n\n"
                    + pub_cont["IN-REV"]
                    + "\\end{cvpubs}\n"
                )
            if pub_cont["IN-PREP"] != "\\begin{cvpubs}\n\\small \\color{black}\n":
                tex += (
                    "\n\\cvsubsection{In Prep}\n\n"
                    + pub_cont["IN-PREP"]
                    + "\\end{cvpubs}\n"
                )
        if mode == "l":
            tex += "\\nocite{*}\n\\printbibliography[heading=none]\n"
    elif style == "v":
        if mode == "l":
            tex = "\\begin{rSection}{Publications}\n"
            tex += "\t\\nocite{*}\n\t\\printbibliography[heading=none]\n"
            tex += "\\end{rSection}"

    write_tex_file(generate_output_path(style)["LOC"], "publications.tex", tex)


@time_function
def generate_cv_awards(cv_data, style="v"):
    if len(cv_data["honors"]) == 0:
        return

    print("Generating Awards...")
    aw_by_year = defaultdict(list)
    for award in cv_data["honors"]:
        award = {key: escape_tex_special_chars(value) for key, value in award.items()}
        aw_by_year[award["date"]].append(award)
    sorted_years = sorted(aw_by_year.keys(), reverse=True)

    if style == "n":
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
    elif style == "v":
        tex = "\\begin{rSection}{Honors}\n\\begin{itemize}\n"
        for year in sorted_years:
            for award in aw_by_year[year]:
                money = f"\\$ {award['money']}" if award["money"] else ""
                if money == "":
                    tex += f"\t\\item \\textbf {{{award['award']}}}, \\textit {{{award['institution']}}}, {year}\n"
                else:
                    tex += f"\t\\item \\textbf {{{award['award']}}}, \\textit {{{award['institution']}}}, {money}, {year}\n"
        tex += "\\end{itemize}\n\\end{rSection}"

    write_tex_file(generate_output_path(style)["LOC"], "honors.tex", tex)


@time_function
def generate_cv_presentations(cv_data, style="v"):
    if len(cv_data["presentations"]) == 0:
        return

    print("Generating Presentations...")
    categories = {
        "Invited Talks": lambda p: "TALK" in p["category"],
        "Contributed Presentations": lambda p: "PRESENTATION" in p["category"],
    }

    if style == "n":
        # Function to format a single presentation entry
        def format_presentation(p):
            return f"    \\cvpub{{{p['authors']}. {p['year']}. {p['title']}. {p['type']}: {p['event']}, {p['city']}, {p['state']}.}}\n\n"

        # Generate LaTeX code
        tex = "\\cvsection{Presentations}\n\n"

        for category, filter_func in categories.items():
            filtered_presentations = [
                p for p in cv_data["presentations"] if filter_func(p)
            ]
            if filtered_presentations:
                tex += f"\\cvsubsection{{{category}}}\n\n"
                tex += "\\begin{cvpubs}\n"
                for p in filtered_presentations:
                    p = {
                        key: escape_tex_special_chars(value) for key, value in p.items()
                    }
                    tex += format_presentation(p)
                tex += "\\end{cvpubs}\n"
    elif style == "v":
        # Function to format a single presentation entry
        def format_presentation(p):
            return f"    \\item {p['authors']}. {p['year']}. {p['title']}. {p['type']}: {p['event']}, {p['city']}, {p['state']}.\n"

        # Generate LaTeX code
        tex = "\\begin{rSection}{Presentations}\n\n"

        for category, filter_func in categories.items():
            filtered_presentations = [
                p for p in cv_data["presentations"] if filter_func(p)
            ]
            if filtered_presentations:
                tex += "\\begin{itemize}\n"
                for p in filtered_presentations:
                    p = {
                        key: escape_tex_special_chars(value) for key, value in p.items()
                    }
                    tex += format_presentation(p)
                tex += "\\end{itemize}\n"
        tex += "\\end{rSection}"

    write_tex_file(generate_output_path(style)["LOC"], "presentation.tex", tex)


@time_function
def generate_cv_research_experience(cv_data, mode="s", style="v"):
    if len(cv_data["experience"]) == 0:
        return

    print("Generating Research Experience...")

    if style == "n":
        if mode == "s":
            tex = "\\cvsection{Research Experience}\n\n\\begin{cventries}\n"
            for exp in cv_data["experience"]:
                exp = {
                    key: escape_tex_special_chars(value) for key, value in exp.items()
                }
                tex += "\\cventry\n"
                tex += f"{{Advisor: {exp['advisor']}}}\n{{{exp['project']}}}\n{{{exp['institution']}}}\n{{{exp['period']}}}{{}}\n"
            tex += "\n\\end{cventries}\n"
        elif mode == "l":
            tex = "\\cvsection{Research Experience}\n\n\\begin{cventries}\n"
            for exp in cv_data["experience"]:
                exp = {
                    key: escape_tex_special_chars(value) for key, value in exp.items()
                }
                tex += "\\cventry\n"
                tex += f"{{Advisor: {exp['advisor']}}}\n{{{exp['project']}}}\n{{{exp['institution']}}}\n{{{exp['period']}}}\n"
                tex += "{{\\begin{cvitems}\n"
                for det in exp["details"]:
                    tex += f"\\item {det}\n"
                tex += "\\end{cvitems}\n}}\n\n"
            tex += "\n\\end{cventries}\n"
        else:
            raise ValueError(f"Unrecognized mode {mode}.")
    if style == "v":
        tex = "\\begin{rSection}{Research Experience}\n"
        for exp in cv_data["experience"]:
            exp = {key: escape_tex_special_chars(value) for key, value in exp.items()}
            if "link" in exp.keys():
                tex += f"\\begin{{rSubsection}}{{\\underline{{\\href{{{exp['link']}}}{{{exp['project']}}}}}}}"
                tex += f"{{{exp['period']}}}{{Advisor: {exp['advisor']}}}{{\\small {exp['institution']}}}\n"
            else:
                tex += f"\\begin{{rSubsection}}{{{exp['project']}}}{{{exp['period']}}}{{Advisor: {exp['advisor']}}}{{\\small {exp['institution']}}}\n"
            if mode == "l":
                tex += "\\begin{itemize}\n"
                for det in exp["details"]:
                    tex += f"\\item {det}\n"
                tex += "\\end{itemize}\n\\end{rSubsection}\n\n"
            elif mode == "s":
                tex += "\\end{rSubsection}\n\n"
            else:
                raise ValueError(f"Unrecognized mode {mode}.")
        tex += "\\end{rSection}"

    write_tex_file(generate_output_path(style)["LOC"], "research.tex", tex)


@time_function
def generate_cv_extracurricular(cv_data, style="v"):
    if len(cv_data["outreach"]) == 0:
        return

    print("Generating Outreach...")
    categories = {
        "Service and Outreach": lambda p: "SERVICE" in p["category"],
        "Development": lambda p: "DEVELOPMENT" in p["category"],
        "Peer Review": lambda p: "PEER-REVIEW" in p["category"],
        "Professional Memberships": lambda p: "PRO-MEMB" in p["category"],
    }

    if style == "n":
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
                            key: escape_tex_special_chars(value)
                            for key, value in e.items()
                        }
                        tex += f"\\cvhonor{{{e['organization']}}}{{{e['role']}}}{{}}{{{e['period']}}}\n"
                    tex += "\\end{cvhonors}\n\n"
                elif category == "Development":
                    tex += "\\begin{cvpubs}\n"
                    for e in ec:
                        e = {
                            key: escape_tex_special_chars(value)
                            for key, value in e.items()
                        }
                        tex += f"\\cvpub{{{e['organization']}}}{{{e['role']}}}{{}}{{{e['period']}}}\n"
                    tex += "\\end{cvpubs}\n"
                else:
                    tex += "\\begin{small} \\color{black}\n"
                    for e in ec:
                        e = {
                            key: escape_tex_special_chars(value)
                            for key, value in e.items()
                        }
                        tex += f"\\cvpub{{{e['organization']}}}\\\\\n"
    elif style == "v":
        tex = ""

    write_tex_file(generate_output_path(style)["LOC"], "extracurricular.tex", tex)


def write_main_file(cv_data, style="v"):
    c_date = dt.now().strftime("%b, %Y")
    contact = {
        key: escape_tex_special_chars(value)
        for key, value in cv_data["contact"].items()
    }

    if style == "v":
        tex = "\\documentclass{resume}\n"
        tex += "\\usepackage[UTF8]{ctex}\n"
        tex += (
            "\\usepackage[left=0.75in,top=0.6in,right=0.75in,bottom=0.6in]{geometry}\n"
        )
        tex += "\\usepackage{hyperref}\n\\usepackage{biblatex}\n\\addbibresource{pubs.bib}\n"
        tex += "\\hypersetup{colorlinks=true,linkcolor=blue,citecolor=blue,filecolor=magenta,urlcolor=blue}\n"
        tex += "\\newcommand{\\tab}[1]{\\hspace{.2667\\textwidth}\\rlap{#1}}\n"
        tex += "\\newcommand{\\itab}[1]{\\hspace{0em}\\rlap{#1}}\n"
        tex += f"\\name{{{cv_data['name']}}}{{}}\n"
        tex += f"\\address{{{escape_tex_special_chars(contact['email'])} \\ \\\\ \\ \\href{{{contact['website']}}}{{{contact['website']}}}"
        tex += f" \\ \\\\ \\ {escape_tex_special_chars(contact['location'])}}}\n\n"
        tex += "\\begin{document}\n"
        tex += "\\input{cv/education.tex}\n\\input{cv/professional.tex}\n\\input{cv/publications.tex}\n\\input{cv/honors.tex}\n"
        tex += "\\input{cv/presentation.tex}\n\\input{cv/teaching.tex}\n\\input{cv/mentoring.tex}\n\\input{cv/research.tex}\n\\input{cv/extracurricular.tex}\n"
        tex += "\\end{document}"
    elif style == "n":
        tex = "\\documentclass[11pt, letterpaper, draft]{academic-cv}\n"
        tex += "\\geometry{left=0.75in, top=0.75in, right=0.75in, bottom=0.75in, footskip=.5cm}\n\\usepackage{hyperref}\n\\usepackage{biblatex}\n\\addbibresource{pubs.bib}\n"
        tex += "\\AtBeginBibliography{\\small}\n\\fontdir[fonts/]\n\\renewcommand{\\acvHeaderSocialSep}{\\quad\\textbar\\quad}\n"
        tex += f"\\name{{{cv_data['name']}}}{{}}\n"
        tex += f"\\position{{{escape_tex_special_chars(cv_data['position'])}{{\\enskip\\cdotp\\enskip}}{escape_tex_special_chars(cv_data['department'])}}}\n"
        tex += f"\\address{{{escape_tex_special_chars(cv_data['institution'])}, {escape_tex_special_chars(contact['location'])}}}\n"
        tex += f"\\email{{{contact['email']}}}\n\\homepage{{{contact['website']}}}\n"
        tex += f"\\github{{{contact['github']}}}\n\n"
        tex += f"\\begin{{document}}\n\\makecvheader\n\\makecvfooter{{{c_date}}}{{{cv_data['name']} ~~~·~~~ Curriculum Vitae}}{{\\thepage}}\n"
        tex += "\\input{cv/education.tex}\n\\input{cv/professional.tex}\n\\input{cv/publications.tex}\n\\input{cv/honors.tex}\n"
        tex += "\\input{cv/presentation.tex}\n\\input{cv/teaching.tex}\n\\input{cv/mentoring.tex}\n\\input{cv/research.tex}\n\\input{cv/extracurricular.tex}\n"
        tex += "\\end{document}"

    write_tex_file(generate_output_path(style)["IDX"], "cv.tex", tex)


def compile_tex_file(style="v"):
    """Compiles the LaTeX file by executing the process in the appropriate directory."""
    paths = generate_output_path(style)
    tex_file = paths["LOC"] + ".tex"

    if not os.path.exists(tex_file):
        print(f"Error: '{tex_file}' not found.")
        return

    command = []
    if style == "v":
        command = ["latexmk", "-pdf", "-quiet", "cv.tex"]
    elif style == "n":
        command = ["xelatex", "-interaction=nonstopmode", "cv.tex"]
    else:
        raise ValueError(f"Unrecognized style '{style}'.")

    print(f"Running in directory: {paths['IDX']}\nCommand: {' '.join(command)}")
    try:
        # Execute the command in the specified directory (paths['IDX'])
        result = subprocess.run(
            command, cwd=paths["IDX"], check=True, capture_output=True, text=True
        )
        print(result.stdout)
        print("Compilation successful!")
    except subprocess.CalledProcessError as e:
        print(f"Error during LaTeX compilation: {e.stderr}")


@time_function
def generate_cv(cv_data, style="v"):
    print("Generating CV...")
    print("Generating Header...")

    write_main_file(cv_data, style=style)

    # generate the rest
    generate_cv_education(cv_data, style=style)
    generate_cv_work(cv_data, mode="l", style=style)
    generate_cv_publications(cv_data, style=style)
    generate_cv_awards(cv_data, style=style)
    generate_cv_presentations(cv_data, style=style)
    generate_cv_research_experience(cv_data, mode="l", style=style)
    generate_cv_extracurricular(cv_data, style=style)
    # generate_bib_file(cv_data, file_path="pubs.bib")

    # compile_tex_file(style=style) # leave the compilation to vscode for now.

    print("Done Generating!")
