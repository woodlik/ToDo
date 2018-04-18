import { UPDATE_QUERY_PARAMS } from '../actions/filter';

export default (store) => {


    return next => action => {
        if (action.type === UPDATE_QUERY_PARAMS) {
            let newfilter = { ...store.getState().filter, ...action.payload };

            let newHash = Object.keys(newfilter).reduce((hash, key) =>
                (newfilter[key] !== '' && key !== 'textSearch') ? `${hash}&${key}=${newfilter[key]}` : hash, '');
            window.location.hash = (newfilter.textSearch && newfilter.textSearch !== '') ? `${newHash}&textSearch=${newfilter.textSearch}` : newHash.slice(1);
        }
        return next(action)
    };
}

