import React from "react";
import SubjectItem from "./components/Subjects/SubjectItem";
import NewSubject from "./components/NewSubject/NewSubject";

const App = () => {
  const Subjects = [
    {
      id: "s1",
      title: "React.js",
      hours: 2,
      date: new Date(2021, 5, 14),
    },
    { id: "s2", title: "Node.js", hours: 3, date: new Date(2021, 4, 12) },
    {
      id: "s3",
      title: "Java",
      hours: 1,
      date: new Date(2021, 6, 28),
    },
    {
      id: "s4",
      title: "Data structures and algorithms",
      hours: 4,
      date: new Date(2021, 3, 12),
    },
  ];

  const addSubjectHandler = (subject) => {
    console.log("In App.js");
    console.log(subject);
  };
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(SubjectItem, { item: Subjects })
  // );

  return (
    <div>
      <NewSubject onAddSubject={addSubjectHandler} />
      <SubjectItem item={Subjects} />
    </div>
  );
};

export default App;
