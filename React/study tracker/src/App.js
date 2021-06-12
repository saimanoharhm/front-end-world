import SubjectItem from "./components/SubjectItem";

function App() {
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
  return (
    <div>
      <h2>Let's get started!</h2>
      <SubjectItem item={Subjects} />
    </div>
  );
}

export default App;
