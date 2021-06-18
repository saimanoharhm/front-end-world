import { useState } from "react";
import Subject from "./Subject";
import "./SubjectItem.css";
import Card from "../UI/Card";
import SubjectFilter from "./SubjectFilter";

const SubjectItem = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <div>
      <Card className="subjects">
        <SubjectFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
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
      </Card>
    </div>
  );
};
export default SubjectItem;
