import React, {useState} from 'react';
import './App.css';


function TodList(props) {
    const [editTask, setEditTask] = useState({})
    const editMode = (el) => {
        setEditTask(el)
    }
    const onChangeTaskEdit = (e) => {
        setEditTask({...editTask, name: e.target.value})
    }

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
                            : <span onClick={() => editMode(el)}>{el.name}</span>
                    }

                    <button onClick={() => props.onDeleteTask(el.id)}>Delete</button>
                </li>)
            }
        </div>
    );
}

export default TodList;
