import { useState } from 'react';
import './ToDoList.css';


function ToDoList(){
    const [tasks, setTasks] = useState(['Work', 'IT', 'Gym'])
    const [newTask, setNewTask] = useState('')

    function handleNewTask(event: any):void {
        setNewTask(event.target.value)
    }

    function addTask():void {
        if (newTask === '') {
            return
        }
        setTasks([...tasks, newTask])
    }

    function deleteTask(index: number):void {
        const updateTasks = tasks.filter((_,  i:number):boolean => i !== index)
        setTasks(updateTasks);
    }


    return (
            <div>
                <h1>To do list</h1>
                <div>
                    <input
                    type="text"
                    placeholder="Add task.."
                    value={newTask}
                    onChange={handleNewTask}
                    />
                <button className={'addButton'} onClick={addTask} >add</button>
            </div>
            <ol>
                {tasks.map((element:string, index:number) => (
                    <li key={index}><span>{element}</span> <button className={'deleteButton'} onClick={() => deleteTask(index)}>delete</button></li>
                ))}
            </ol>
        </div>
    )
}

export default ToDoList