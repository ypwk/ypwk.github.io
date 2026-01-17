
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
    
            <li>{'Chi-Kwong Li, Kevin Y. Wu, and Zherui Zhang. Minimum-Spanning-Tree Tomography of Sparse Quantum States With and Without Entanglement. In review.'}</li>
        
        </ul>
        </div>
        <div className="project-subtitle">
          <h3>Research Experience</h3>
        </div>
    
            <ExpandableItem
            title={'Generation of 3D Reconfigurable Holograms for Optical Control'}
            period={'2024-2025'}
            institution={'University of Washington'}
            location={'Seattle, WA'}
            advisor={'Dr. Maxwell Parsons'}
            description={['Designed and generated multi-depth 3D holographic phase patterns for experimental optical systems.', 'Studied tradeoffs between hologram dimensionality, control fidelity, and computational complexity.', 'Experimentally evaluated 3D holograms in laboratory optical setups.']}
            />
            
            <ExpandableItem
            title={'Phase Retrieval via Wirtinger-Flow for 3D Holographic Field Generation'}
            period={'2024-2025'}
            institution={'University of Washington'}
            location={'Seattle, WA'}
            advisor={'Dr. Maxwell Parsons'}
            description={['Investigated Wirtinger Flow-based optimization methods for phase retrieval in holographic field generation, designing new loss functions resulting in better performance than the current SoTA.', 'Studied convergence behavior and robustness of nonconvex optimization methods for multi-plane 3D holography.', 'Evaluated suitability of Wirtinger Flow methods for experimental holographic control using a phase-only spatial light modulator.']}
            />
            
            <ExpandableItem
            title={'Investigation of 3D Geometries for qLDPC Code Implementation'}
            period={'2024-2025'}
            institution={'University of Washington'}
            location={'Seattle, WA'}
            advisor={'Dr. Maxwell Parsons'}
            description={['Found that 3D layouts in neutral atom quantum computers have the potential to accelerate stabilizer measurement rounds for qLDPC codes by a significant factor, under certain assumptions.', 'Studied connectivity, routing, and locality constraints in 3D versus 2D hardware geometries.', 'Analyzed implications for scalable fault-tolerant quantum architectures.']}
            />
            
            <ExpandableItem
            title={'Construction and Characterization of a 2D Magneto-Optical Trap'}
            period={'2025'}
            institution={'University of Washington'}
            location={'Seattle, WA'}
            advisor={'Dr. Maxwell Parsons'}
            description={['Contributed to the assembly, alignment, and characterization of a 2D magneto-optical trap (MOT).', 'Assisted with optical alignment, magnetic field configuration, and system debugging.', 'Supported characterization of atomic beam flux and trap stability for downstream experimental use.']}
            />
            
            <ExpandableItem
            title={'Improving the Scalability of Neural Network Surface Code Decoders'}
            period={'2023 - 2024'}
            institution={'William & Mary'}
            location={'Williamsburg, VA'}
            advisor={'Dr. Qun Li'}
            link={'https://scholarworks.wm.edu/honorstheses/2176/'}
            description={['Designed transformer and structured selective state space models to decode the rotated planar code, a type of quantum error correction code.', 'Implemented and trained the models using PyTorch to decode low distance rotated planar codes.', 'Scaled decoders to higher distance codes using state compression techniques.']}
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
            advisor={'Dr. Qun Li'}
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
    