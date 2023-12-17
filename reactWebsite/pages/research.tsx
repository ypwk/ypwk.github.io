export default function Page() {
  return (
    <div>
      <div className="container">
        <div className="project-title">
          <h1>Research Experience</h1>
        </div>

        <div className="project-individual">
          <div className="row">
            <div className="one-half column">
              <h3>Quantum Error Correction Reading</h3>
            </div>
            <div className="one-half column">
              <h5 className="u-pull-right">Advisor: Dr. Qun Li</h5>
              <h5 className="u-pull-right">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;August 2022 -
                May 2023
              </h5>
            </div>
          </div>
          <h6>William & Mary</h6>
          <div className="row">
            <ul>
              <li>
                Working on a a quantum error correction scheme using a
                clustering algorithm, leveraging structure in the Hamming
                spectrum of a quantum computer’s output.
              </li>
              <li>
                Readings on quantum error correction, surface codes, and
                hardware error correction schemes.
              </li>
            </ul>
          </div>
        </div>

        <div className="project-individual">
          <div className="row">
            <div className="one-half column">
              <h3>Quantum Research Group</h3>
            </div>
            <div className="one-half column">
              <h5 className="u-pull-right">Advisor: Dr. Chi-Kwong Li</h5>
              <h5 className="u-pull-right">September 2022 - May 2023</h5>
            </div>
          </div>
          <h6>William & Mary</h6>
          <div className="row">
            <ul>
              <li>Explored topics in quantum tomography.</li>
              <li>
                Explored topics in image processing and recognition using Qiskit
                and quantum computing algorithms.
              </li>
              <li>
                Approximated unitary operators with a parameterized Pauli group
                using a trust-region optimization approach.
              </li>
            </ul>
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
          <h6>NSWCDD</h6>
          <div className="row">
            <p>
              I was a member of the William & Mary team invited by
              <u>
                <a
                  href="https://www.navsea.navy.mil/Home/Warfare-Centers/NSWC-Dahlgren/"
                  target="_blank"
                >
                  NSWCDD
                </a>
              </u>
              to participate in the 1st Artificial Intelligence and Machine
              Learning Challenge at Dahlgren. There, I developed cutting-edge
              AI/ML algorithms for automating the scheduling and coordination of
              advanced weapon systems, competing against teams from other
              colleges.
            </p>
          </div>
          <div className="row">
            <p>
              We first conducted a literature review and wrote a white paper on
              machine learning approaches to weapon target assignment and
              munitions scheduling. After acceptance to phase II, we
              experimented with various approaches utilizing deep learning,
              reinforcement learning, and genetic algorithms.
            </p>
          </div>
          <div className="row">
            <p>The W&M team won third place and $20k in prize money.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
