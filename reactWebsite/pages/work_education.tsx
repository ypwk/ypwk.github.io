import TabInfo from "@/components/TabInfo";

export default function Page() {
  return (
    <div>
      <TabInfo tabName="Work & Education" />
      <div className="container">
        <div className="project-title">
          <h1>Work Experience</h1>
        </div>

        <div className="project-individual">
          <div className="row">
            <div className="one-half column">
              <h3>Solutions Architect Intern</h3>
            </div>
            <div className="one-half column">
              <h5 className="u-pull-right">May 2022 - Present</h5>
            </div>
          </div>
          <h6>Amazon Web Services</h6>
          <ul>
            <li>
              Conducted literature reviews on relevant advances in cloud quantum
              computing, quantum error mitigation, and LLM retrieval augmented
              generation.
            </li>
            <li>
              Implemented an end-to-end quantum error mitigation scheme, based
              on a result in literature. Used Poisson distributions fit on
              quantum processor metadata to predict and reduce quantum noise.
            </li>
            <li>
              Studied for and achieved the Cloud Practitioner and Associate
              Solutions Architect AWS Certifications
            </li>
            <li>
              Completed mock customer conversations and shadowed customer calls.
            </li>
          </ul>
        </div>

        <div className="project-individual">
          <div className="row">
            <div className="one-half column">
              <h3>CS Dept. Consultant</h3>
            </div>
            <div className="one-half column">
              <h5 className="u-pull-right">September 2022 - Present</h5>
            </div>
          </div>
          <h6>College of William & Mary</h6>
          <div className="row">
            <ul>
              <li>
                Held office hours twice a week to provide assistance to CSCI
                140, 141, and 241 students during the semester.
              </li>
              <li>
                Offered advice for debugging code, general guidance for
                assignments, and helped with conceptual understanding.
              </li>
              <li>Covered Pandas, Data Structures, and Python.</li>
            </ul>
          </div>
        </div>

        <div className="project-individual">
          <div className="row">
            <div className="one-half column">
              <h3>Student Intern Team Lead</h3>
            </div>
            <div className="one-half column">
              <h5 className="u-pull-right">September 2019 - Present</h5>
            </div>
          </div>
          <h6>Asian Americans in the Environment, Energy, and Commerce</h6>
          <div className="row">
            <ul>
              <li>
                Interviewed, hired, and trained a team of technical applicants.
              </li>
              <li>
                Led a student team focused on updating and improving
                functionality for the AE2C website.
              </li>
              <li>Provided feedback on website design and functionality.</li>
            </ul>
          </div>
        </div>

        <div className="project-individual">
          <div className="row">
            <div className="one-half column">
              <h3>Junior Software Developer</h3>
            </div>
            <div className="one-half column">
              <h5 className="u-pull-right">September 2021 - March 2023</h5>
            </div>
          </div>
          <h6>ESPX Global Inc.</h6>
          <div className="row">
            <ul>
              <li>
                Engineered a data lake solution capturing market conditions and
                features of the electric grid.
              </li>
              <li>
                Agilely collaborated remotely with a team of developers to
                create a minimum viable product conforming to client demands.
              </li>
              <li>
                Selected, acquired, normalized, and analyzed data using Python,
                AWS services, and SQL.
              </li>
              <li>
                Managed and maintained the company website, along with related
                SSL certificate.
              </li>
            </ul>
          </div>
        </div>

        <div className="project-individual">
          <div className="row">
            <div className="one-half column">
              <h3>Student Intern</h3>
            </div>
            <div className="one-half column">
              <h5 className="u-pull-right">September 2019 - August 2022</h5>
            </div>
          </div>
          <h6>Asian Americans in the Environment, Energy, and Commerce</h6>
          <div className="row">
            <ul>
              <li>
                Worked in a student team to overhaul the old AE2C website.
              </li>
              <li>Provided feedback on website design and functionality.</li>
              <li>Migrated website to new provider.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="project-title">
          <h1>Education</h1>
        </div>

        <div className="project-individual">
          <div className="row">
            <div className="one-half column">
              <h3>College of William & Mary</h3>
            </div>
            <div className="one-half column">
              <h5 className="u-pull-right">
                September 2020 — May 2024 (Projected)
              </h5>
            </div>
          </div>
          <div className="row">
            <ul>
              <li>Bachelor&apos;s of Science to be completed in May 2024.</li>
              <li>Computer Science and Mathematics double major.</li>
              <li>
                Honors:
                <ul>
                  <li>
                    Phi Beta Kappa Membership — Phi Beta Kappa Chapter — Fall
                    2023
                  </li>
                  <li>
                    Elias Paparis Scholarship — W&M CS Dept. — Spring 2023
                  </li>
                  <li>
                    Robert C. and Muriel M. Jennings Scholarship — Phi Beta
                    Kappa Chapter — Fall 2022
                  </li>
                </ul>
              </li>
              <li>GPA: 3.78/4</li>
              <li>
                Coursework:
                <ul>
                  <li>
                    Data Structures, Algorithms, Finite Automata, Database
                    Systems, Software Development, Machine Learning, Computer
                    Graphics, Computer Organization, Principles of Programming
                    Languages, Network and Computer Security, Optimization,
                    Intro HCI, Systems Programming
                  </li>
                  <li>
                    Discrete Mathematics, Linear Algebra, Multivariable
                    Calculus, Numerical Analysis, Matrix Analysis, Graph Theory,
                    Abstract Algebra, Ordinary Differential Equations,
                    Elementary Real Analysis, Probability
                  </li>
                  <li>General Physics</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className="project-individual">
          <div className="row">
            <div className="one-half column">
              <h3>TJHSST</h3>
            </div>
            <div className="one-half column">
              <h5 className="u-pull-right">September 2016 - May 2020</h5>
            </div>
          </div>
          <div className="row">
            <ul>
              <li>High school diploma.</li>
              <li>GPA (Weighted): 4.22/4</li>
              <li>
                Relevant College Level Coursework:
                <ul>
                  <li>
                    AP Computer Science (5), AP Physics (5), AP Chemistry (5),
                    AP BC Calculus (5)
                  </li>
                  <li>Multivariable Calculus, Linear Algebra</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
