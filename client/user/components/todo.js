import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'

import { deleteTodo, toggleTodo } from '../actions'

class Todo extends Component {
    constructor(){
        super();

        this.onDelete = this.onDelete.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    onDelete(){
        this.props.deleteTodo(this.props.todo.id);
    }
    onChange(){
        this.props.toggleTodo(this.props.todo);
    }
    render(){
        let { todo } = this.props;
        return (
            <div>
                <span style={ {
                    textDecoration: todo.complete ? 'line-through' : 'none'
                    }}>{todo.text}</span>
                <button onClick={this.onDelete}>删除</button>
                <button onClick={this.onChange}>修改</button>
            </div>
        )
    }
}

Todo.propTypes = {
    todo: PropTypes.object.isRequired,
    toggleTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
};

export default Todo;
