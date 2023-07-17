
import { useState } from 'react';



function App() {



  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const handleTaskChange = (event) => {
    setTask(event.target.value);
  };

  const addTask = (event) => {
    event.preventDefault();
    if (task.trim() !== '') {
      setTaskList([...taskList, task]);
      setTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedTaskList = [...taskList];
    updatedTaskList.splice(index, 1);
    setTaskList(updatedTaskList);
  };


  return (
    <>
   <div>
      <h1 className='font-bold text-lg text-gray-200'>To-Do List</h1>
      <form onSubmit={addTask}>
        <input type="text" value={task} onChange={handleTaskChange} className='bg-black' />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {taskList.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default App
