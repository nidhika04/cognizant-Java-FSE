import CohortDetails from "./Components/CohortDetails";

function App(){

  return(

    <div>

      <CohortDetails

        name="React Development"

        technology="React JS"

        trainer="John"

        status="Ongoing"

      />

      <CohortDetails

        name="Java Full Stack"

        technology="Spring Boot"

        trainer="David"

        status="Completed"

      />

    </div>

  );

}

export default App;
