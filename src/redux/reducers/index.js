import { combineReducers } from 'redux';
import tasks from './tasks';
import filter from './filter';
import user from './user';

const reducers = combineReducers({
    tasks,
    filter,
    user
});

export default reducers;