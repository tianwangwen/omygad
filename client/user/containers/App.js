/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../actions/index';

class TodosTable extends Component {
  constructor() {
    super();
    this.getUser = this.getUser.bind(this);
    this.state = {
      text: ''
    };
  }
  componentDidMount() {}

  getUser() {
    const callback = (res) => {
      this.setState({
        text: res.text
      });
    };
    this.props.getUser(callback);
  }
  render() {
    const { userList } = this.props;
    const { text } = this.state;
    return (
      <div>
        <button onClick={this.getUser}>获取用户</button>
        <div dangerouslySetInnerHTML={{ __html: text }} />
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
