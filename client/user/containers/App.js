import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../actions/index';

class TodosTable extends Component {
  constructor() {
    super();
    this.getUser = this.getUser.bind(this);
  }
  componentDidMount() {
    // this.props.getUser();
  }
  getUser() {
    console.log(this.props);
    this.props.getUser();
  }
  render() {
    return (
      <div>
        <button onClick={this.getUser}>获取用户</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.test.text
});

const mapDispatchToProps = {
  getUser
};

export default connect(mapStateToProps, mapDispatchToProps)(TodosTable);
