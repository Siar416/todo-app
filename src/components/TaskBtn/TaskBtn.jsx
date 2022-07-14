import { useState } from "react";
import "./TaskBtn.scss";

const TaskBtn = ({ setIsOpen }) => {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="TaskBtn">
      <button className="TaskBtn__btn" onClick={() => setIsOpen(true)}>
        Add Task
      </button>
    </div>
  );
};

export default TaskBtn;
