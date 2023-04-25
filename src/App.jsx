import { useState } from "react";
import CustomForm from "./components/CustomForm";
import TaskList from "./components/TaskList/TaskList";
import EditForm from "./components/EditForm";

function App() {
  const [tasks, setTasks] = useState([]);
  const [editedTask, setEditedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const addTask = (task) => {
    setTasks((prevState) => [...prevState, task]);
  };

  const deleteTask = (id) => {
    setTasks((prevState) => prevState.filter((el) => el.id !== id));
  };

  const toggelTask = (id) => {
    setTasks((prevState) =>
      prevState.map((el) =>
        el.id === id ? { ...el, checked: !el.checked } : el
      )
    );
  };

  const updateTask = (task) => {
    setTasks((prevState) =>
      prevState.map((el) =>
        el.id === task.id ? { ...el, name: task.name } : el
      )
    );
    closeEditMode();
  };

  const closeEditMode = () => {
    setIsEditing(false);
  };

  const enterEditMode = (task) => {
    setEditedTask(task);
    setIsEditing(true);
  };

  return (
    <div className="container">
      <header>
        <h1>My Task List</h1>
      </header>
      {isEditing && (
        <EditForm
          editedTask={editedTask}
          updateTask={updateTask}
          closeEditMode={closeEditMode}
        />
      )}
      <CustomForm addTask={addTask} />
      {tasks && (
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          toggelTask={toggelTask}
          enterEditMode={enterEditMode}
        />
      )}
    </div>
  );
}

export default App;
