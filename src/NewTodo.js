import React from 'react';
import {Component} from 'react';

class NewTodo extends Component{
    render(){
        return(
        <div className="todo-item">
        <input type="text" className="newTodoText"></input>
        <button className="newTodoButton">Todo</button>
        </div>
        )
    }
}
export default NewTodo;