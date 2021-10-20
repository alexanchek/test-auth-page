export const SET_USER = 'SET_USER';
export const SIGN_OUT = 'SIGN_OUT';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';

export interface User {
    firstName: string;
    lastName: string,
    email: string;
    id: string;
    createdAt: any;
}

export interface AuthState {
    user: User | null;
    authenticated: boolean;
    loading: boolean;
    error: string;
    needVerification: boolean;
    success: string;
}

export interface SignUpData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface SignInData {
    email: string;
    password: string;
}

//Actions
interface SetUserAction {
    type: typeof SET_USER;
}

interface SetLoadingAction {
    type: typeof SET_LOADING;
    payload: boolean;
}

interface SignOutAction {
    type: typeof SIGN_OUT;
}

interface SetErrorAction {
    type: typeof SET_ERROR;
    payload: string;
}

export type AuthAction = SetUserAction 
| SetLoadingAction 
| SignOutAction 
| SetErrorAction;