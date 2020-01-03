import React, { Component } from 'react';
import { connect } from 'react-redux';

class Todo extends Component {
  constructor() {
    super();

    this.onDelete = this.onDelete.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onDelete() {
    this.props.deleteTodo(this.props.todo.id);
  }
  onChange() {
    this.props.toggleTodo(this.props.todo);
  }
  render() {
    const { todo } = this.props;
    return (
      <div>
        <span
          style={{
            textDecoration: todo.complete ? 'line-through' : 'none'
          }}
        >{todo.text}</span>
        <button onClick={this.onDelete}>删除</button>
        <button onClick={this.onChange}>修改</button>
      </div>
    );
  }
}

export default Todo;
