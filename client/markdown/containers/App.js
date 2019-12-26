/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMarkdown } from '../actions/index';
import styles from './index.module.scss';

class TodosTable extends Component {
  constructor() {
    super();
    this.getMarkdown = this.getMarkdown.bind(this);
    this.state = {
      text: ''
    };
  }
  componentDidMount() {
    this.getMarkdown();
  }

  getMarkdown() {
    const { filename } = this.props.params;
    const callback = (res) => {
      this.setState({
        text: res.data
      });
    };
    this.props.getMarkdown({ callback, filename });
  }

  render() {
    const { text } = this.state;
    return (
      <div className={styles.warp}>
        <div className={styles.container}>
          <div className='markdown-body' dangerouslySetInnerHTML={{ __html: text }} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userList: state.user.userList
});

const mapDispatchToProps = {
  getMarkdown
};

export default connect(mapStateToProps, mapDispatchToProps)(TodosTable);
