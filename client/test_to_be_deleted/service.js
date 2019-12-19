import { get } from '../shared/utils';

const getTestData = () => get('/api/test/getTestData');

export default {
  getTestData
};
