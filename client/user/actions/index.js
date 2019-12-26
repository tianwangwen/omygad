import { ADD_USER, DELETE_USER, TOGGLE_USER, GET_USER, UPDATE_USER } from './constants';

export const addUser = text => ({
  type: ADD_USER,
  payload: {
    text
  }
});

export const deleteUser = id => ({
  type: DELETE_USER,
  payload: {
    id
  }
});

export const toggleUser = user => ({
  type: TOGGLE_USER,
  payload: user
});

export const getUser = (data) => ({ type: GET_USER, payload: data });

export const updateUser = data => ({
  type: UPDATE_USER,
  payload: {
    data
  }
});
