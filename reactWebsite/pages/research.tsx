
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
    
            <li>{'Chi-Kwong Li, Kevin Y. Wu, and Zherui Zhang. Efficient Circuit-Based Quantum State Tomography via Sparse Entry Optimization. In review.'}</li>
        
        </ul>
        </div>
        <div className="project-subtitle">
          <h3>Research Experience</h3>
        </div>
    
            <ExpandableItem
            title={'Honors Thesis: Improving the Scalability of Neural Network Surface Code Decoders'}
            period={'2023 - 2024'}
            institution={'William & Mary'}
            location={'Williamsburg, VA'}
            advisor={'Dr. Qun Li'}
            description={['Used state compression techniques to improve the scalability of recurrent neural network decoders for the surface code.']}
            />
        
            <ExpandableItem
            title={'Applying Differential Learning to Quantum Federated Learning'}
            period={'2023'}
            institution={'William & Mary'}
            location={'Williamsburg, VA'}
            advisor={'Dr. Qun Li'}
            description={['Trained a federated QCNN using the Qiskit Machine Learning library, achieving 89% simulator test accuracy and 70% IBM QPU test accuracy on the MNIST dataset.', 'Implemented differential privacy to obfuscate sensitive client data, and performed a hyperparameter search to find an appropriate level of privacy. ']}
            />
        
            <ExpandableItem
            title={'First AI/ML Challenge at Dahlgren'}
            period={'2022 - 2023'}
            institution={'NSWCDD'}
            location={'Dahlgren, VA'}
            advisor={'Qun Li'}
            description={["Contributed to a white paper detailing relevant literature and proposed approaches on the weapon target assignment problem, which resulted in the team's acceptance to the competition.", 'Played a leading role in brainstorming and implementing approaches for automatic scheduling and coordination of advanced weapon systems.', 'Architected, implemented, and trained several approaches to reduce damage to high value assets, including a Deep Q-Learning agent and heuristic-driven Greedy agent.', 'The W&M team won 3rd place and $20,000 in prize money. ']}
            />
        
            <ExpandableItem
            title={'Quantum Operator Approximation via Nonconvex PSD Programming'}
            period={'2022'}
            institution={'William & Mary'}
            location={'Williamsburg, VA'}
            advisor={'Dr. Chi-Kwong Li'}
            description={['Approximated arbitrary quantum operators using the Pauli product rotations, exponentiated elements of the Pauli group. ', 'Transformed problem into nonconvex positive semidefinite programming problem, and optimized using a trust-region approach.']}
            />
        
        </div>
    );
    }
    