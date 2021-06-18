import { useState } from "react";
import "./SubjectForm.css";

const SubjectForm = (props) => {
  const [EnteredTitle, setEnteredTitle] = useState(" ");
  const [EnteredHours, setEnteredHours] = useState(" ");
  const [EnteredDate, setEnteredDate] = useState(" ");
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: " ",
  //   enteredHours: " ",
  //   enteredDate: " ",
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
  };
  const hoursChangedHandler = (event) => {
    setEnteredHours(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredHours: event.target.value,
    // });
  };
  const dateChangedHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault(); //To avoid the page to not load again andcollect the data by javaScript
    const subjectData = {
      title: EnteredTitle,
      hours: EnteredHours,
      date: new Date(EnteredDate),
    };
    props.onSaveSubjectData(subjectData);
    setEnteredTitle(" ");
    setEnteredHours(" ");
    setEnteredDate(" ");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-subject__controls">
        <div className="new-subject__control">
          <label>Title</label>
          <input
            type="text"
            value={EnteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-subject__control">
          <label>Hours</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={EnteredHours}
            onChange={hoursChangedHandler}
          />
        </div>
        <div className="new-subject__control">
          <label>Date</label>
          <input
            type="date"
            min="2021-01-01"
            max="2022-12-31"
            value={EnteredDate}
            onChange={dateChangedHandler}
          />
        </div>
        <div className="new-subject__action">
          <button type="submit">Add Subject</button>
        </div>
      </div>
    </form>
  );
};
export default SubjectForm;
