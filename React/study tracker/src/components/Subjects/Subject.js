import { useState } from "react";

import "./Subject.css";
import SubjectDate from "./SubjectDate";
import Card from "../UI/Card";

const Subject = (props) => {
  // let title = props.title;
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated!");
    console.log(title);
  };
  return (
    <Card className="subject-item">
      <SubjectDate date={props.date} />
      <div className="subject-item__description ">
        <h2>{title}</h2>
        <div className="subject-time_spent">{props.hours} Hours</div>
      </div>
      <button onClick={clickHandler}>ChangeTitle</button>
    </Card>
  );
};

export default Subject;
