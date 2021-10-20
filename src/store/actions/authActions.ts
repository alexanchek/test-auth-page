import {ThunkAction} from 'redux-thunk';
import {AuthAction, SET_USER, SET_LOADING, SIGN_OUT, SET_ERROR, SignInData} from '../../types/Redux/authTypes';
import {RootState} from '../index';
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

import 'firebase/compat/auth'
import 'firebase/compat/firestore'

    export const signin = (data: SignInData): ThunkAction<void, RootState, null, AuthAction> => {
        return async dispatch => {
          try {
            const auth = getAuth();
            await signInWithEmailAndPassword(auth, data.email, data.password);
            dispatch({
              type:SET_USER
          });
          } catch (err: any) {
            console.log(err);
            dispatch(setError(err.message));
          }
        }
      }

      export const signout = (): ThunkAction<void, RootState, null, AuthAction> => {
        return async dispatch => {
          try {
            const auth = getAuth();
            await signOut(auth);
            dispatch({
              type: SIGN_OUT
            });
          } catch (err) {
            console.log(err);
            // dispatch(setLoading(false));
          }
        }
      }

      export const setError = (msg: string): ThunkAction<void, RootState, null, AuthAction> => {
        return dispatch => {
          dispatch({
            type: SET_ERROR,
            payload: msg
          });
        }
      }

     export const setLoading = (value: boolean): ThunkAction<void, RootState, null, AuthAction> => {
       return async dispatch => {
          dispatch({
            type: SET_LOADING,
            payload: value
          });
       }
     }
