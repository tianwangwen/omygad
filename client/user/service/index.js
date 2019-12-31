import { get } from '../../shared/utils';

const getData = () => get('/api/user/getUser');

export default {
  getData
};
