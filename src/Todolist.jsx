import React, { useState } from 'react';

function Todolist() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function handleAddCard() {
        if (document.getElementById('task-input').value !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function handleRemoveCard(index) {
        setTasks(t => t.filter((_, i) => i !== index));
    }

    return (
        <>
            <div className='tasks-container'>
                <h1>Todolist</h1>
                <input type='text' placeholder='Add a task' value={newTask} onChange={handleInputChange} id='task-input'></input>
                <button onClick={handleAddCard}>Add</button>
                <ol>
                    {tasks.map((task, index) => (
                        <li className='tasks-list' onClick={() => handleRemoveCard(index)}>
                            {task}
                        </li>
                    ))}
                </ol>
            </div>
        </>
    );
}

export default Todolist;
