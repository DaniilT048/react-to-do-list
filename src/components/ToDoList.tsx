import { useState } from 'react';
import './ToDoList.css';


function ToDoList(){
    const [tasks, setTasks] = useState<{ text: string; done: boolean }[]>([]);
    const [newTask, setNewTask] = useState('')

    function handleNewTask(event: any):void {
        setNewTask(event.target.value)
    }


    
    function addTask():void {
        if (newTask === '') {
            return
        }
        setTasks([...tasks, {text: newTask, done: false}])
    }

    function doneTask(index:number):void {
        setTasks((prevTasks):{text: string, done: boolean}[]=>
            prevTasks.map((todo, i)=> i === index?{...todo, done: !todo.done}:todo))
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
                {tasks.map((element, index) => (
                    <li key={index}>
                        <span className={element.done ? 'done' : ''}
                              style={{ textDecoration: element.done ? 'line-through' : 'none' }}>{element.text}</span>
                        <button className={'doneButton'} onClick={() => doneTask(index)}>done</button>
                        <button className={'deleteButton'} onClick={() => deleteTask(index)}>delete</button>
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default ToDoList