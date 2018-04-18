export const CHANGE_FILTER = 'CHANGE_FILTER';
export const UPDATE_QUERY_PARAMS = 'UPDATE_QUERY_PARAMS';

export const changeFilter = payload =>({
    type: CHANGE_FILTER,
    payload
})

export const updateQueryParams = payload =>  ({
    type: UPDATE_QUERY_PARAMS,
    payload
});
