import { get, post, put, del } from '../../shared/utils';

const getData = () => get('/api/test/getTodo');
const postData = (data) => post('/api/test/postTodo', data);
const putData = (data) => post('/api/test/putTodo', data);
const deleteData = (data) => post('/api/test/deleteTodo', data);

export default {
  getData,
  postData,
  deleteData,
  putData
};
