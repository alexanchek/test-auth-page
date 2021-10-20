export const GET_CONTACTS= "GET_CONTACTS";
export const ADD_CONTACT = "ADD_CONTACT";
export const DELETE_CONTACT = "DELETE_CONTACT";

export interface Contact {
    uuid: string;
    name: string;
    email: string;
    phone: string;
    img: string;
}

export interface ContactState {
    contact: Contact | null;
}

export interface ContactsState {
    data: Contact[] | null;
}

// Actions
interface GetContactsAction {
    type: typeof GET_CONTACTS;
    payload: Contact[]
}

interface AddContactAction {
    type: typeof ADD_CONTACT;
    payload: Contact;
}

interface DeleteContactAction {
    type: typeof DELETE_CONTACT;
}

export type ContactsAction = GetContactsAction
| AddContactAction
| DeleteContactAction;