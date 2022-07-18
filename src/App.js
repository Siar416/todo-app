import "./global.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useState } from "react";

import Title from "./components/Title/Title";
import Tasks from "./components/Tasks/Tasks";
import TaskBtn from "./components/TaskBtn/TaskBtn";
import FormModal from "./components/FormModal/FormModal";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [updated, setUpdated] = useState(false);

  return (
    <div className="App">
      <Title />
      <Tasks updated={updated} setUpdated={setUpdated} />
      <TaskBtn setIsOpen={setIsOpen} />
      {isOpen && (
        <FormModal
          isOpen={() => setIsOpen()}
          updated={updated}
          setUpdated={setUpdated}
        />
      )}
      <ToastContainer />
    </div>
  );
}

export default App;
