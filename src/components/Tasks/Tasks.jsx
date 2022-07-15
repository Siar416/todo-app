import "./Tasks.scss";

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
          <div key={task.id}>
            <h4>{task.title}</h4>
            <h6>{task.summary}</h6>
          </div>
        ))}
    </div>
  );
};

export default Tasks;
