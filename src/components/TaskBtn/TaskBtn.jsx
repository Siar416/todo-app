import "./TaskBtn.scss";

const TaskBtn = ({ setIsOpen }) => {
  return (
    <div className="TaskBtn">
      <button className="TaskBtn__btn" onClick={() => setIsOpen(true)}>
        Add Task
      </button>
    </div>
  );
};

export default TaskBtn;
