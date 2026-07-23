import { useParams } from "react-router-dom";
import trainers from "../TrainersMock";

function TrainerDetails(){

    const {id}=useParams();

    const trainer=trainers.find(
        t=>t.id===parseInt(id)
    );

    if(!trainer){

        return <h2>Trainer Not Found</h2>;

    }

    return(

        <div>

            <h2>Trainer Details</h2>

            <p><b>ID :</b> {trainer.id}</p>

            <p><b>Name :</b> {trainer.name}</p>

            <p><b>Technology :</b> {trainer.technology}</p>

        </div>

    );

}

export default TrainerDetails;
