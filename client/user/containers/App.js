/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../actions/index';

class TodosTable extends Component {
  constructor() {
    super();
    this.getUser = this.getUser.bind(this);
  }
  componentDidMount() {}

  getUser() {
    this.props.getUser();
  }
  render() {
    const { userList } = this.props;
    return (
      <div>
        <button onClick={this.getUser}>获取用户</button>
        {
          userList.map(item => (
            <div key={item.id}>
              <span>{item.id}</span>
              <span>{item.name}</span>
              <span>{item.email}</span>
            </div>
          ))
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userList: state.user.userList
});

const mapDispatchToProps = {
  getUser
};

export default connect(mapStateToProps, mapDispatchToProps)(TodosTable);
