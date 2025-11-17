import { use, useState } from 'react'
import './App.css'
import Card from './Card.jsx'



function App() {
  const [tasks, setTasks] = useState([
    "task1",
    "task2",
    "task3"
  ]);
  const [inputValue, setInputValue] = useState("");
  const addTask = () => {
    setTasks([...tasks, inputValue]);
    setInputValue("");
  };
  return(
    <>
        <input type="text" name="input" id="input" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
        <button onClick={() => addTask()}>Add</button>
        <div>{tasks.map(task =>
           <p>{task}</p>)}</div>
    </>
  )
}

export default App
