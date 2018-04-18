export const ADD_TASK = 'ADD_TASK';
export const LOAD_TASKS = 'LOAD_TASKS';
export const UPDATE_TASK = 'UPDATE_TASK';

export const addTask = taskProps => ({
    type: ADD_TASK,
    payload: {
        id: Date.now(),
        date: new Date(),
        title: 'New item',
        description: 'Fresh item',
        done: false,
        ...taskProps
    }
});

export const loadTasks = payload => ({
    type: LOAD_TASKS,
    payload
})

export const updateTask = payload => ({
    type: UPDATE_TASK,
    payload
})