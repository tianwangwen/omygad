import { get } from '../../shared/utils';

const getData = () => get('/api/user/getMarkDm');

export default {
  getData
};
