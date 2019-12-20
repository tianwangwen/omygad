import React, {Component, PropTypes} from 'react'

import Todo from './todo'

const TodoList = props => {
    return (
        <div>
            { props.todoList.map((todo, index) => <Todo toggleTodo={props.toggleTodo} deleteTodo={props.deleteTodo} key={index} todo = {todo}/>)}
        </div>
    )
}

export default TodoList