import "./global.scss";

import Title from "./components/Title/Title";
import Tasks from "./components/Tasks/Tasks";
import TaskBtn from "./components/TaskBtn/TaskBtn";

function App() {
  return (
    <div className="App">
      <Title />
      <Tasks />
      <TaskBtn />
    </div>
  );
}

export default App;
