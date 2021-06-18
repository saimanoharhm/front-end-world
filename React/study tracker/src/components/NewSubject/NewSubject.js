import "./NewSubject.css";
import SubjectForm from "./SubjectForm";

const NewSubject = (props) => {
  const saveSubjectDataHandler = (enteredSubjectData) => {
    const subjectData = {
      ...enteredSubjectData,
      id: Math.random().toString(),
    };
    props.onAddSubject(subjectData);
  };

  return (
    <div className="new-subject">
      <SubjectForm onSaveSubjectData={saveSubjectDataHandler} />
    </div>
  );
};

export default NewSubject;
