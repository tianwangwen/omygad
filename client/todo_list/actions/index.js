import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, GET_TODO, UPDATE_TODO } from './constants'

export const addTodo = (text) => ({
    type: ADD_TODO,
    payload: {
        text
    }
})

export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    payload: {
        id
    }
})

export const toggleTodo = (todo) => ({
    type: TOGGLE_TODO,
    payload: todo
})

export const getTodo = () => ({ type: GET_TODO });

export const updateTodo = (data) => ({ 
    type: UPDATE_TODO,
    payload: {
        data
    } 
});
