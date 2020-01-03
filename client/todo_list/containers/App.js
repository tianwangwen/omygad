import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddTodo from '../components/addTodo';
import TodoList from '../components/todoList';
import { getTodo, deleteTodo, addTodo, toggleTodo } from '../actions/index';

class TodosTable extends Component {
  componentDidMount() {
    this.props.getTodo();
  }
  render() {
    return (
      <div>
        <AddTodo addTodo={this.props.addTodo} />
        <TodoList toggleTodo={this.props.toggleTodo} deleteTodo={this.props.deleteTodo} todoList={this.props.todos} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.test.text
});

const mapDispatchToProps = {
  getTodo,
  deleteTodo,
  addTodo,
  toggleTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(TodosTable);
