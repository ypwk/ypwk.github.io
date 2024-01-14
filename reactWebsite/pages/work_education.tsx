
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
            description={['Implemented an end-to-end quantum error mitigation scheme, based on this result. Used Poisson distributions fit on quantum processor metadata to predict and reduce quantum noise. Constructed a quantum circuit transpilation protocol in Python to aid in this endeavor.', 'Investigated relevant literature in cloud quantum computing, quantum error mitigation, and LLM retrieval augmented generation.', 'Studied for and achieved the Cloud Practitioner and Associate Solutions Architect AWS Certifications.', 'Completed mock customer conversations and shadowed customer calls.']}
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
            period={'2019 - 2023'}
            institution={'Asian Americans in Energy, Environment, and Commerce'}
            location={'Alexandria, VA'}
            description={['Worked in a student team to overhaul the old organization website, and played a key role in updating and improving website functionality, and website migration to new provider.', 'Received promotion to team lead after three years.', 'Interviewed, hired, trained a team of student applicants. Led this team in pushing website updates and updating functionality.']}
            />
        
        </div>
        <div className="project-subtitle">
          <h3>Education</h3>
        </div>
    
            <InfoCard
            title={'William & Mary'}
            period={'2020 - 2024'}
            institution={'B.S. Computer Science and Mathematics Double Major'}
            location={'Williamsburg, VA'}
            advisor={'CS GPA: 3.88/4, GPA: 3.78/4'}
            />
        
            <InfoCard
            title={'Thomas Jefferson High School for Science and Technology'}
            period={'2016 - 2020'}
            institution={'High School'}
            location={'Alexandria, VA'}
            advisor={'GPA: 4.22/4'}
            />
        
        </div>
    );
    }
    