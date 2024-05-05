import { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([
    'Eat BreakFast',
    'Take a Sower',
    'Walk the dog',
  ]);

  const [newTask, setNewTask] = useState('');

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {

    if (newTask.trim() !== '') {
      setTasks((prevTasks) => [...prevTasks, newTask])
      setNewTask('')
    }
  }

  function deleteTask(index) {

    const updatedTask = tasks.filter((_, i) => i !== index);
    setTasks(updatedTask);
  }

  function moveTaskUp(index) {

    if (index > 0) {
      const updatedTask = [...tasks];
      // swap two tasks
      const temp = updatedTask[index];
      updatedTask[index] = updatedTask[index - 1];
      updatedTask[index - 1] = temp;
      setTasks(updatedTask);
    }
  }

  function moveTaskDown(index) {

    if (index < tasks.length - 1) {
      const updatedTask = [...tasks];
      // swap two tasks
      const temp = updatedTask[index];
      updatedTask[index] = updatedTask[index + 1];
      updatedTask[index + 1] = temp;
      setTasks(updatedTask);
    }
  }

  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>

      <div className='list-container'>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="up-button" onClick={() => moveTaskUp(index)}>
              Up
            </button>
            <button className="down-button" onClick={() => moveTaskDown(index)}>
              Down
            </button>
          </li>
        ))}
      </ol>
      </div>
    </div>
  );
}

export default TodoList;
