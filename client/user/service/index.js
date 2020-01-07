import ajax from '../../shared/utils';

export const getData = () => ajax.get('/api/user/getUser');

export default {
  getData
};
