import {createStore, applyMiddleware, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import authReducer from './reducers/authReducer';
import { ContactReducer, ContactsReducer } from './reducers/contactsReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    contacts: ContactsReducer,
    contact: ContactReducer
})

const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(thunk))
)

export type RootState = ReturnType<typeof rootReducer>;
export default store;