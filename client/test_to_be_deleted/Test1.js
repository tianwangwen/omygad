import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { testAction } from './action';

class Test extends Component {
  componentWillMount() {
    this.props.dispatch(testAction());
  }

  render() {
    return (
      <h1>Hello Kathy</h1>
    );
  }
}

Test.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect(
  state => ({
    text: state.test.text
  })
)(Test);
