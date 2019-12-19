import { UPDATE_TODO } from '../actions/constants';

export default function todos(state = {text:[]}, action) {
    switch (action.type) {
        case UPDATE_TODO:
            return {
                text:[
                    ...action.payload.data
                ]
            }
        default:
            return state
    }
};