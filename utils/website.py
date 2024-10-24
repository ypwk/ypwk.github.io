import os
from time import time

WEB_LOC = os.path.join("reactWebsite", "pages")


def time_function(func):
    def wrapper(*args, **kwargs):
        start_time = time()
        result = func(*args, **kwargs)
        elapsed_time = time() - start_time
        print(f"Executed {func.__name__} in {elapsed_time:.4f}")
        return result

    return wrapper


@time_function
def generate_website_projects(cv_data):
    print("Generating Projects...")
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
    print("Generating Work/Education...")
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
    print("Generating Research...")
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
    print("Generating Website...")
    generate_website_projects(cv_data)
    generate_website_worked(cv_data)
    generate_website_research(cv_data)
    print("Done Generating!")
