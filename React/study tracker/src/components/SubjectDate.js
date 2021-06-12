import "./SubjectDate.css";
function SubjectDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-Us", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="subject-date">
      <div className="subject-date__month">{month}</div>
      <div className="subject-date__year">{year}</div>
      <div className="subject-date__day">{day}</div>
    </div>
  );
}
export default SubjectDate;
