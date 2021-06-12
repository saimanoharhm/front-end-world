import Subject from "./Subject";
import "./SubjectItem.css";

function SubjectItem(props) {
  return (
    <div className="subjects">
      <Subject
        title={props.item[0].title}
        hours={props.item[0].hours}
        date={props.item[0].date}
      />
      <Subject
        title={props.item[1].title}
        hours={props.item[1].hours}
        date={props.item[1].date}
      />
      <Subject
        title={props.item[2].title}
        hours={props.item[2].hours}
        date={props.item[2].date}
      />
      <Subject
        title={props.item[3].title}
        hours={props.item[3].hours}
        date={props.item[3].date}
      />
    </div>
  );
}
export default SubjectItem;
