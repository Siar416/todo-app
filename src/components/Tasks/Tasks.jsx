import "./Tasks.scss";

import { FaTrash } from "react-icons/fa";

import { useEffect, useState } from "react";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch("http://localhost:8080/tasks");
      const data = await response.json();
      setTasks(data);
    };
    fetchData();
  }, []);

  if (!tasks) {
    return <p>Loading...</p>;
  }

  return (
    <div className="Tasks__Container">
      {tasks.length === 0 && <p>You currently have no tasks</p>}
      {tasks &&
        tasks.map((task) => (
          <div className="task__item" key={task.id}>
            <h5>{task.title}</h5>
            <h6>{task.summary}</h6>
            <FaTrash className="task__item__trash" />
          </div>
        ))}
    </div>
  );
};

export default Tasks;
