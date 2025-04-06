import { useState } from 'react'

function ToDoList(){
    const [tasks, setTasks] = useState(['Work', 'Gym', 'IT'])
    const [newTask, setNewTask] = useState('')

    function handleNewTask(event: any):void {
        setNewTask(event.target.value)
    }

    function addTask() {
        setTasks([...tasks, newTask])
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
                <button onClick={addTask} >add</button>
            </div>
            <ol>
                {tasks.map((element, index) => (
                    <li key={index}>{element}</li>
                ))}
            </ol>
        </div>
    )
}

export default ToDoList