import "./Tasks.scss";

import { FaTrash } from "react-icons/fa";

import { useEffect, useState } from "react";

const Tasks = ({ updated, setUpdated }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch("http://localhost:8080/tasks");
      const data = await response.json();
      setTasks(data);

      setUpdated(false);
    };
    fetchData();
    // eslint-disable-next-line
  }, [updated]);

  if (!tasks) {
    return <p>Loading...</p>;
  }

  const handleDelete = async (id) => {
    let response = await fetch(`http://localhost:8080/tasks/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      console.log("post delete");
      setUpdated(true);
    } else {
      console.log("somwthing went wrong");
    }
  };

  return (
    <div className="Tasks__Container">
      {tasks.length === 0 && <p>You currently have no tasks</p>}
      {tasks &&
        tasks.map((task) => (
          <div className="task__item" key={task.id}>
            <div>
              <h5>{task.title}</h5>
              <h6>{task.summary}</h6>
            </div>
            <div>
              <FaTrash
                className="task__item__trash"
                onClick={() => handleDelete(task.id)}
              />
            </div>
          </div>
        ))}
    </div>
  );
};

export default Tasks;
