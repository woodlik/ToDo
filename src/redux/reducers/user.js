import { LOGIN_USER } from '../actions/user';
import { LOGOUT_USER } from '../actions/user';

const DEFAULT_USER_STATE = {
    logined: false
}

const user = (state = DEFAULT_USER_STATE, action = {}) => {
    switch (action.type) {
        case LOGIN_USER: {
            return { logined: true, user: action.payload };
        }
        case LOGOUT_USER: {
            return DEFAULT_USER_STATE;
        }
        default: {
            return state;
        }
    }
}

export default user;