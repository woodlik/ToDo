import { changeFilter } from '../actions/filter';

export default (store) => {
    store.dispatch(changeFilter(window.location.hash));
    window.addEventListener('hashchange', (ev) => {
        store.dispatch(changeFilter(window.location.hash));
    })
    return next => action => next(action)
};