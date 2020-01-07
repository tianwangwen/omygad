import test from '../../shared/utils';

export const getData = () => test.get('/api/test/getTodo');
export const postData = data => test.post('/api/test/postTodo', data);
export const putData = data => test.post('/api/test/putTodo', data);
export const deleteData = data => test.post('/api/test/deleteTodo', data);

export default {
  getData,
  postData,
  deleteData,
  putData
};
