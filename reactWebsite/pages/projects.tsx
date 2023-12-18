import TabInfo from "@/components/TabInfo";

export default function Page() {
  return (
    <div className="container">
      <TabInfo tabName="Projects" />
      <div className="row">
        <div className="project-title">
          <h1>Projects</h1>
          <p>Some cool projects that I&apos;ve worked on in the past.</p>
        </div>

        <div className="project-individual">
          <div className="row">
            <div className="one-half column">
              <h3>
                <u>
                  <a href="https://github.com/ypwk/DecoderVIS" target="_blank">
                    DecoderVIS
                  </a>
                </u>
              </h3>
            </div>
            <div className="one-half column">
              <h5 className="u-pull-right">April 2023</h5>
            </div>
          </div>
          <div className="row">
            <p>
              A visualizer for surface code error syndrome decoding written in
              C++. Current version supports MWPM decoding for the rotated planar
              code for various odd distances.
            </p>
          </div>

          <div className="row">
            <p>
              Includes a custom 2D rendering engine written using GLFW and GLM.
              Uses Hello ImGUI for user interface purposes, and LEMON for graph
              theoretic algorithms.
            </p>
          </div>
        </div>

        <div className="project-individual">
          <div className="row">
            <div className="one-half column">
              <h3>
                <u>
                  <a
                    href="https://github.com/K-L-Chen/WM_Dahlgren_Challenge"
                    target="_blank"
                  >
                    1st AI/ML Challenge @ Dahlgren
                  </a>
                </u>
              </h3>
            </div>
            <div className="one-half column">
              <h5 className="u-pull-right">March 2023</h5>
            </div>
          </div>
          <div className="row">
            <p>
              I was a member of the William & Mary team invited by{" "}
              <u>
                <a
                  href="https://www.navsea.navy.mil/Home/Warfare-Centers/NSWC-Dahlgren/"
                  target="_blank"
                >
                  NSWCDD
                </a>
              </u>{" "}
              to participate in the 1st Artificial Intelligence and Machine
              Learning Challenge at Dahlgren. There, I developed cutting-edge
              AI/ML algorithms for automating the scheduling and coordination of
              advanced weapon systems, competing against teams from other
              colleges.
            </p>
          </div>

          <div className="row">
            <p>
              We experimented with approaches utilizing deep learning,
              reinforcement learning, and genetic algorithms.
            </p>
          </div>

          <div className="row">
            <p>The W&M team won third place and $20k in prize money.</p>
          </div>
        </div>

        <div className="project-individual">
          <div className="row">
            <div className="one-half column">
              <h3>
                <u>
                  <a href="https://github.com/ypwk/Mimir" target="_blank">
                    Mimir
                  </a>
                </u>
              </h3>
            </div>
            <div className="one-half column">
              <h5 className="u-pull-right">April 2023</h5>
            </div>
          </div>
          <div className="row">
            <p>
              A sentential logic proof generator. When given an objective
              statement and a set of premises, will output steps used to prove
              the objective statement.
            </p>

            <p>
              Utilizes AWS Amplify for hosting and AWS API Gateway for backend
              infrastructure. The frontend was written in React, and the backend
              proof generator was written in Python and hosted using AWS Lambda.
            </p>

            <p>
              Created for Cypher VIII, William & Mary&apos;s Hackathon. Won best
              UI.
            </p>
          </div>
        </div>

        <div className="project-individual">
          <div className="row">
            <div className="one-half column">
              <h3>Maze Game</h3>
            </div>
            <div className="one-half column">
              <h5 className="u-pull-right">December 2021</h5>
            </div>
          </div>
          <div className="row">
            <p>
              Maze game written using the Android SDK that included maze
              generation and automated gameplay.
            </p>
            <p>
              Maze generation was done using a selection from a set of Minimum
              Spanning Tree algorithms (e.g. Prim, Borouvka, Depth First
              Search). Automated exploration was done with differing pathfinding
              algorithms and virtual agents (robots), some with reduced vision
              or movement capabilities.
            </p>
            <p>
              As this was an extension of a class project assigned every
              semester, I will not disclose the source code.
            </p>
          </div>
        </div>

        <div className="project-individual">
          <div className="row">
            <div className="one-half column">
              <h3>2048 AI</h3>
            </div>
            <div className="one-half column">
              <h5 className="u-pull-right">September 2021</h5>
            </div>
          </div>
          <div className="row">
            <p>
              2048 clone written in Java, complete with a decision-making AI
              that can beat the game.
            </p>
            <p>
              There are two automated players bundled with this project, a
              Random Player that makes random choices, and a Smart Player that
              makes choices based on a set of heuristics.
            </p>
            <p>
              At each step during execution, the Smart Player calculates a score
              for the respective up, down, right, and left movements and chooses
              the highest score.
            </p>
            <p>
              To improve performance on my slow laptop, the Smart Player
              utilizes a dynamic recursive depth to “think more” when it is in
              trouble. The more empty tiles there are, the less steps it thinks
              ahead, and vice versa.
            </p>
            <p>
              As this was an extension of a class project assigned every
              semester, I will not disclose the source code.
            </p>
          </div>
        </div>

        <div className="project-individual">
          <div className="row">
            <div className="one-half column">
              <h3>
                <u>
                  <a href="https://github.com/ypwk/shihelper" target="_blank">
                    ShiHelper
                  </a>
                </u>
              </h3>
            </div>
            <div className="one-half column">
              <h5 className="u-pull-right">April 2021</h5>
            </div>
          </div>
          <div className="row">
            <p>
              A specialized text editor created using React to aid in analysis
              and composition of Chinese regulated-verse poetry. Included
              annotations for English, Middle Chinese, and Mandarin. See the
              link for more information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
