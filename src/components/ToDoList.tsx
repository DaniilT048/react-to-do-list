import { useState } from 'react'

function ToDoList(){
    // const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState('')

    function handleNewTask(event: any):void {
        setNewTask(event.target.value)
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
                <button>add</button>
                <button>delete</button>
            </div>
            <ol>

            </ol>
        </div>
    )
}

export default ToDoList