
import { AuthAction, AuthState, SET_USER, SIGN_OUT } from '../../types/Redux/authTypes';

const initialState: AuthState = {
    user: null,
    authenticated: false,
    loading: false,
    error: '',
    needVerification: false,
    success: ''
}

const authReducer = (state=initialState, action: AuthAction): AuthState => {
    switch(action.type) {
        case SIGN_OUT:
            return {
                ...state,
                user: null,
                authenticated: false,
                loading: false
            }
        case SET_USER:
            return {
                ...state,
                authenticated: true
            }
        default: {
            return state;
        }
    }
}

export default authReducer;