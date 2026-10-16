import { useState } from "react";
import './App.css'
export default function TaskManager() {
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState([]);
  const [search, setsearch]= useState ("")
    const [searchitem, setsearchitem] = useState([]);

  function addTask(event) {
    event.preventDefault();
    const trimmedTitle = title.trim();
    if (!trimmedTitle) return;
    const newTask = {
      id: crypto.randomUUID(),
      title: trimmedTitle,
      completed: false
    };
    setTasks((currentTasks) => [...currentTasks, newTask]);
    setTitle("");
  }
  function filtertask(event){
        event.preventDefault();
    const trimtexts = search.trim();
    trimtexts.filter((trimtext)=>{
      return trimtext===title
    })


  }
  function deleteTask(taskId) {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== taskId)
    );
  }
  function toggleTask(taskId) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  return (
    <section className="container">
      <div className="box">
        <div className="titlebar" >
          <h2 >Task Manager</h2>
          <form onSubmit={filtertask}>
            <input

              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Enter a task"
            />
            <button type="submit">Add task</button>
          </form>
        </div>
        <form onSubmit={addTask} className="addedtask">
          <input

            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Enter a task"
          />
          <button type="submit">Add task</button>
        </form>
        <div className="task">
          {tasks.length === 0 ? (
            <p>No tasks yet. Add your first task.</p>
          ) : (
            <ol>
              {tasks.map((task) => (
                <li key={task.id}>
                  <label className="tasklist">
                    <li key={task.id}>

                      <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => toggleTask(task.id)}
                      />
                      <p style={{ textDecoration: task.completed ? "line-through" : "none" }}>
                        {task.title}
                      </p>
                      <button onClick={() => deleteTask(task.id)}>
                        Delete
                      </button>
                    </li>
                  </label>

                </li>
              ))}
            </ol>
          )}
        </div>

      </div>
    </section>
  );
}