import { ADD_CONTACT, ContactsAction, ContactsState, ContactState, GET_CONTACTS } from "../../types/Redux/ContactsTypes";

const initialContactsState: ContactsState = {
    data: null
}

const initialContactState: ContactState = {
    contact: null
}

export const ContactReducer = (state = initialContactState, action: ContactsAction): ContactState => {
    switch(action.type) {
        case ADD_CONTACT:
            return {
                contact: action.payload
            }
        default:
            return state;
    }
}

export const ContactsReducer = (state = initialContactsState, action: ContactsAction): ContactsState => {
    switch(action.type) {
        case GET_CONTACTS:
            return {
                data: action.payload
            }
        default:
            return state;
    }
}

