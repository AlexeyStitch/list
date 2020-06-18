import React, {useState} from 'react';
import './App.css';


function TodList(props) {
    const [editTask, setEditTask] = useState({})


    return (
        <div className="todo">
            {

                props.todos.map(el => <li key={el.id}>
                    {el.done ? '✅' : '❌'}
                    {el.name}
                    
                    <button onClick={() => props.onDoneTaskToggle(el.id)}>
                        {el.done ? 'unDone' : 'Done'}
                    </button>

                    {
                        editTask.id === el.id
                        ? <input type="text" value={editTask.name} onChange={onChangeTaskEdit}/>
                        : <button disabled></button>
                    }

                    <button onClick={() => props.onDeleteTask(el.id)}>Delete</button>
                </li>)
            }
        </div>
    );
}

export default TodList;
