import React, {useState} from "react";
import {createRoot} from "react-dom/client";

const App = () => {
    return <ToDoList/>
}

const ToDoList = () => {

    const [tasksList, setTasks] = useState([
        {id: 1, title: "Zrobić zakupy"},
        {id: 2, title: "Obejrzeć nowy sezon Gry o Tron"},
        {id: 3, title: "Zrobić zadania domowe"}
    ]);

    const handleTaskDone = id => {
        setTasks(prevState => {
            return prevState.filter(task => {
                return task.id !== id;
            });
        });
    };

    return (
        <ul>
            {tasksList.map(task => <ToDoItem key={task.id} task={task} onDone={handleTaskDone}/>)}
        </ul>
    );
};

const ToDoItem = (props) => {
    const {task, onDone} = props;
    const handleDoneClick = () => {
        if (typeof onDone === 'function') {
            onDone(task.id);
        }
    }
    return (
        <li>
            <h4>This is my task: {task.title}</h4>
            <button onClick={handleDoneClick}>Task done</button>
        </li>
    );
};


const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>);