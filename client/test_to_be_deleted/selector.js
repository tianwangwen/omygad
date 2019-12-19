import { createSelector } from 'reselect';

const text = state => state.test.text;

export default createSelector(
  text,
  (txt) => {
    const ts = txt.filter(t => t.complete);
    return ts;
  }
);
