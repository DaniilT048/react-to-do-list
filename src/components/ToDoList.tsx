import { useState } from 'react'

function ToDoList(){
    const [text, setText] = useState('Hard works')
    console.log(setText)

    return (
        <div>
            <h1>To do list</h1>
            <input/>
            <ol>
                {text}
            </ol>
        </div>
    )
}

export default ToDoList