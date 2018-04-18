import { ADD_TASK, LOAD_TASKS, UPDATE_TASK } from '../actions/tasks';

const DEFAULT_STATE = [];

const tasks = (state = DEFAULT_STATE, action = {}) => {
    switch (action.type) {
        case LOAD_TASKS: {
            return action.payload;
        }
        case ADD_TASK: {
            let newState = [...state, action.payload];
            return newState;
        }
        case UPDATE_TASK: {
            return state.map(item => item.id === action.payload.id ? { ...item, ...action.payload } : item)
        }
        default: {
            return state;
        }

    }
}

export default tasks;