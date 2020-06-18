import React, {useState} from 'react';
import './App.css';
import TodList from "./TodList";
import TodoCreateForm from "./TodoCreateForm";

const initialTodos = [
    {id: 1, name: 'Test1', done: false},
    {id: 2, name: 'Test2', done: false},
]

function App() {
    const [todos, setTodos] = useState(initialTodos);

    const onCreateTask = (task) => {
        console.log(task)
        const updateOnCreateTask = [...todos];
        updateOnCreateTask.push({id: Math.random(), name: task, done: false})
        setTodos(updateOnCreateTask)
    };

    const onDeleteTask = (id) => {
        const updateDeleteTask = todos.filter(el => el.id !== id);
        setTodos(updateDeleteTask);
    };

    const onDoneTaskToggle = (id) => {
        const updateDoneTask = todos.map(el => {
            if (el.id === id) return {...el, done: !el.done}
            else return el;
        })

        setTodos(updateDoneTask)
    }

    return (
        <div className="App">
            <TodList todos={todos} onDeleteTask={onDeleteTask} onDoneTaskToggle={onDoneTaskToggle}/>
            <TodoCreateForm onCreateTask={onCreateTask}/>
        </div>
    );
}

export default App;
das
as
    d
asd
sad
sad
ad
a
