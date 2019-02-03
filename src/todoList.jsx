import React from 'react';



const ToDoList = (props) => {
    return (
        <ul>
        {props.todos.map((todo) => {
           return <li>{todo}</li>
        })}
    </ul>
    )
}

export default ToDoList;