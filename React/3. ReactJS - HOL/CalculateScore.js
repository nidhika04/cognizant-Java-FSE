import '../Stylesheets/mystyle.css';

function CalculateScore(props) {

    const percentage = (props.total / props.goal) * 100;

    return (

        <div className="score-card">

            <h1>Student Details</h1>

            <hr />

            <h3>Name : {props.name}</h3>

            <h3>School : {props.school}</h3>

            <h3>Total : {props.total} Marks</h3>

            <h3>Score : {percentage.toFixed(2)}%</h3>

        </div>

    );

}

export default CalculateScore;
