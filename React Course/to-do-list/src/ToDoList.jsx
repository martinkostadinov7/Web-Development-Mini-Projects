import { useState } from "react"
import Task from "./Task"
import './ToDoList.css'
function ToDoList(){

     const [tasks, setTasks] = useState([
    { id: 1, title: "Go shopping", dueDate: "12-12-2025" },
    { id: 2, title: "AAAAAAAAAAAAa", dueDate: "04-02-2025" }
  ]);
    const [taskTitle, setTitle] = useState("");
    const [taskDueDate, setDueDate] = useState("");

    function handleDelete(id){
        setTasks(prevTasks => prevTasks.filter(item => item.id !== id))
    }

    function handleAdd(){
        setTasks(prevTasks => ([...prevTasks, getTask()]))
    }

    function getTask(){
        const task = {
            id: Date.now(),
            title: taskTitle,
            dueDate: taskDueDate
        }

        return task;
    }

    function handleMoveUp(index) {
    if (index === 0) return; // не може да мръдне нагоре

    const reordered = [...tasks];

    const temp = reordered[index - 1];
    reordered[index - 1] = reordered[index];
    reordered[index] = temp;

    setTasks(reordered);
}

function handleMoveDown(index) {
    if (index === tasks.length - 1) return; // последният не може да слезе надолу

    const reordered = [...tasks];

    const temp = reordered[index + 1];
    reordered[index + 1] = reordered[index];
    reordered[index] = temp;

    setTasks(reordered);
}


    return(
        <>
            <h1>To Do List</h1> 
            <input type="text" placeholder="Go poop" id="task-input" value={taskTitle} onChange={(e) => setTitle(e.target.value)}/>
            <input type="date" value = {taskDueDate} onChange={(e) => setDueDate(e.target.value)}/>
            <button id="Add" onClick={handleAdd}>Add</button> <br />
            <div>
            {tasks.map((task, index) => (
            <Task
                key={task.id}
                id={task.id}
                title={task.title}
                dueDate={task.dueDate}
                index={index}
                onDelete={handleDelete}
                onMoveUp={handleMoveUp}
                onMoveDown={handleMoveDown}
            />
            ))}

              </div>   
        </>
    )
}

export default ToDoList