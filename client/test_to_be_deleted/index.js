import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { testAction } from './action';
import * as style from './test.scss';
import textSelector from './selector';

class Test extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    this.props.dispatch(testAction());
  }

  handleClick() {
    this.props.dispatch(push('/test1'));
  }

  render() {
    const { text } = this.props;
    const li = text.map(t => (<li key={t.id}>{t.text}</li>));

    return (
      <div className={style.test}>
        <ul>
          {li}
        </ul>
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}

Test.propTypes = {
  text: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect(
  state => ({
    text: textSelector(state)
  })
)(Test);
