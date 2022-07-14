import "./global.scss";

import { useState } from "react";

import Title from "./components/Title/Title";
import Tasks from "./components/Tasks/Tasks";
import TaskBtn from "./components/TaskBtn/TaskBtn";
import FormModal from "./components/FormModal/FormModal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");

  return (
    <div className="App">
      <Title />
      <Tasks />
      <TaskBtn setIsOpen={setIsOpen} />
      {isOpen && (
        <FormModal
          isOpen={() => setIsOpen()}
          title={title}
          setTitle={setTitle}
          summary={summary}
          setSummary={setSummary}
        />
      )}
    </div>
  );
}

export default App;
