import React from 'react';
import './App.css';


function TodList(props) {
    return (
        <div className="todo">
            {

                props.todos.map(el => <li key={el.id}>
                    {el.done ? '✅' : '❌'}
                    {el.name}
                    <button onClick={() => props.onDoneTaskToggle(el.id)}>
                        {el.done ? 'unDone' : 'Done'}
                    </button>
                    <button onClick={() => props.onDeleteTask(el.id)}>Delete</button>
                </li>)
            }
        </div>
    );
}

export default TodList;
