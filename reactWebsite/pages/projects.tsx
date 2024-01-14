
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
    
                <ExpandableItem
                title={'CV + Website'}
                period={'2024'}
                link={'https://github.com/ypwk/ypwk.github.io'}
                description={['This website is partially generated via Python script, sourced from a JSON file! This same script and JSON file is also used to generate my CV.', "I did this so I wouldn't have to think about keeping both my CV and website up to date at the same time.", 'A work in progress.']}
                />
            
                <ExpandableItem
                title={'DecoderVIS: Topological QECC Visualization'}
                period={'2023 - Present'}
                link={'https://github.com/ypwk/DecoderVIS'}
                description={['A topological quantum error correction code visualization written in C++.', 'Visualizer simulates a quantum memory experiment carried out on odd distance rotated planar codes, subject to i.i.d. depolarizing noise.', 'Implemented minimum weight perfect matching decoding using the LEMON library. ', 'Wrote a custom 2D rendering engine from scratch using GLFW and GLM to render the surface code, and created a minimal UI with Hello ImGUI.']}
                />
            
                <ExpandableItem
                title={'Lumi: LLM-enhanced Voice Assistant'}
                period={'2023'}
                link={'https://github.com/ypwk/Lumi'}
                description={['This was my term project for CSCI 420: Introduction to Human Computer Interaction. The core idea was to create a contextually-aware voice assistant using LLM-technology.', 'This project includes a backend Flask server, which interfaces with a vector database using Psycopg2. This allows Lumi to recall useful information from previous conversations.', 'There are several frontends bundled in this project, including a React Native app targeting Android and Windows, and a C++ GUI written with the aid of Hello ImGUI.', 'See the above link for more information.']}
                />
            
                <ExpandableItem
                title={'Mimir: Algorithmic Proof Generation'}
                period={'2023'}
                link={'https://github.com/ypwk/Mimir'}
                description={['A sentential logic proof generator. When given an objective statement and a set of premises, will output steps used to prove the objective statement.', 'Utilizes AWS Amplify for hosting and AWS API Gateway for backend infrastructure. The frontend was written in React, and the backend proof generator was written in Python and hosted using AWS Lambda.', "Created for Cypher VIII, William & Mary's Hackathon. Won best UI."]}
                />
            
                <ExpandableItem
                title={'2048 Player'}
                period={'2021'}
                description={['2048 clone written in Java, complete with a decision-making AI that can beat the game.', 'There are two automated players bundled with this project, a Random Player that makes random choices, and a Smart Player that makes choices based on a set of heuristics.', 'At each step during execution, the Smart Player calculates a score for the respective up, down, right, and left movements and chooses the highest score.', 'To improve performance on my slow laptop, the Smart Player utilizes a dynamic recursive depth to “think more” when it is in trouble. The more empty tiles there are, the less steps it thinks ahead, and vice versa.', 'As this was an extension of a class project assigned every semester, I will not disclose the source code.']}
                />
            
                <ExpandableItem
                title={'ShiHelper'}
                period={'2021'}
                link={'https://github.com/ypwk/shihelper'}
                description={['A specialized text editor created using React to aid in analysis and composition of Chinese regulated-verse poetry. Included annotations for English, Middle Chinese, and Mandarin. See the link for more information.']}
                />
            
        </div>
        </div>
    );
    }
    