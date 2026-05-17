import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Learn React" },
    { id: 2, name: "Build Project" },
    { id: 3, name: "Submit Lab" }
  ]);

  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") {
      alert("Task cannot be empty");
      return;
    }

    const task = {
      id: Date.now(),
      name: newTask
    };

    setTasks([...tasks, task]);
    setNewTask("");
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <h1>Dynamic List Rendering</h1>

      <div className="input-group">
        <input
          type="text"
          placeholder="Enter new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {task.name}
              <button onClick={() => removeTask(task.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;