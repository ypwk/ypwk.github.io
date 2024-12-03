
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
    
            <ExpandableItem
            title={'Solutions Architect Intern'}
            period={'2022 - 2023'}
            institution={'Amazon Web Services'}
            location={'Seattle, WA'}
            description={['Implemented an end-to-end quantum error mitigation scheme, replicating a state-of-the-art result. Used Poisson distributions fit on quantum processor metadata to predict and reduce quantum noise. Constructed a quantum circuit transpilation protocol in Python to aid in this endeavor.', 'Investigated relevant literature in cloud quantum computing, quantum error mitigation, and LLM retrieval augmented generation.', 'Studied for and achieved the Cloud Practitioner and Associate Solutions Architect AWS Certifications.', 'Completed mock customer conversations and shadowed customer calls.']}
            />
        
            <ExpandableItem
            title={'Junior Software Developer'}
            period={'2021 - 2022'}
            institution={'ESPX Global Inc.'}
            location={'McLean, VA'}
            description={['Engineered a data lake solution capturing market conditions and features of the electric grid.', 'Agilely collaborated remotely with a team of developers to create a minimum viable product conforming to client expectations.', 'Selected, acquired, normalized, and analyzed data using Python, AWS services, and SQL.', 'Managed and maintained the company website, along with related SSL certificate.']}
            />
        
            <ExpandableItem
            title={'Student Intern Team Lead'}
            period={'2022 - 2023'}
            institution={'Asian Americans in Energy, Environment, and Commerce'}
            location={'Alexandria, VA'}
            description={['Interviewed, hired, trained a team of student applicants as team lead.', 'Led this team in pushing website updates and updating functionality.', "Mentored and developed interns' technical and professional skills."]}
            />
        
        </div>
        <div className="project-subtitle">
          <h3>Education</h3>
        </div>
    
            <InfoCard
            title={'University of Washington'}
            period={'2024 - Present'}
            institution={'Ph.D. Electrical & Computer Engineering'}
            location={'Seattle, WA'}
            advisor={''}
            />
        
            <InfoCard
            title={'William & Mary'}
            period={'2020 - 2024'}
            institution={'B.S. Computer Science and Mathematics Double Major'}
            location={'Williamsburg, VA'}
            advisor={'CS GPA: 3.88/4, GPA: 3.78/4'}
            />
        
        </div>
    );
    }
    