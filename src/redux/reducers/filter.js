import { CHANGE_FILTER } from '../actions/filter';
import getFilterFromHash from '../../components/utils/getFilterFromHash';



const filter = (state = {}, action = {}) => {
    switch (action.type) {
        case CHANGE_FILTER: {
            return getFilterFromHash(action.payload);
        }
        default: {
            return state;
        }
    }
}

export default filter;