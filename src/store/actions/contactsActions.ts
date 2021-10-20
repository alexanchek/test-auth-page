import { collection, updateDoc, setDoc, deleteDoc, doc, getDocs } from "firebase/firestore"; 
import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import { db } from "../../services/firebase/config";
import { Contact, ContactsAction, GET_CONTACTS } from "../../types/Redux/ContactsTypes";


export const addcontact = (contact: Contact): ThunkAction<void, RootState, null, ContactsAction> => {
    return async dispatch => {
        try {
            const contactRef = await doc(collection(db, "contacts"));
            const contactId = contactRef.id;
            const contactWithId = {...contact, uuid: contactId};
            await setDoc(contactRef, contactWithId);
            dispatch(getcontacts());
        } catch (e: any) {
            console.log(e.message);
        }
    }
}

export const getcontacts = (): ThunkAction<void, RootState, null, ContactsAction> => {
    return async dispatch => {
        try {
            const contactsArray = await getDocs(collection(db, "contacts"));
            const finalArray: any = []
            contactsArray.forEach((doc) => {
                finalArray.push(doc.data());
              });
            dispatch({
                type: GET_CONTACTS,
                payload: finalArray
            })
        } catch (e: any) {
            console.log(e.message);
        }
    }
}

export const deletecontact = (uuid: string): ThunkAction<void, RootState, null, ContactsAction> => {
    return async dispatch => {
        try {
            await deleteDoc(doc(db, "contacts", uuid));
            dispatch(getcontacts());
        } catch (e: any) {
            console.log(e.message);
        }
    }
}

export const updatecontact = (uuid: string, fields: any): ThunkAction<void, RootState, null, ContactsAction> => {
    return async dispatch => {
        try {
            let finalUpdate: any = {};
            for (let field in fields) {
    
                if (fields[field]) {
                    if (field === 'changedName') {
                        finalUpdate.firstName = fields[field];
                    }
                    if (field === 'changedEmail') {
                        finalUpdate.email = fields[field];
                    }
                    if (field === 'changedPhone') {
                        finalUpdate.phone = fields[field];
                    }
                }
            }
            const contactsRef = doc(db, "contacts", uuid);
            await updateDoc(contactsRef, finalUpdate);
            dispatch(getcontacts());
        } catch (e: any) {
            console.log(e.message);
        }
    }
}