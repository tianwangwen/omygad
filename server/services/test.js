import { get, post, put, del } from '../shared/utils';

function getService() {
  // call mock server
  return get('/tests');
}

function postService(data) {
  // call mock server
  return post('/tests', data);
}

function putService(data) {
  // call mock server
  return put(`/tests/${data.id}`, data);
}

function deleteService(id) {
  // call mock server
  return del(`/tests/${id}`);
}

export default {
  getService,
  postService,
  putService,
  deleteService
};
