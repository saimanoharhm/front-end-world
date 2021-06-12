import "./Subject.css";
import SubjectDate from "./SubjectDate";

function Subject(props) {
  return (
    <div className="subject-item">
      <SubjectDate date={props.date} />
      <div className="subject-item__description ">
        <h2>{props.title}</h2>
        <div className="subject-time_spent">{props.hours} Hours</div>
      </div>
    </div>
  );
}

export default Subject;
