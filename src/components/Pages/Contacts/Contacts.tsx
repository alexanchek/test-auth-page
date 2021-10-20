import React from 'react';
import ContactCards from '../../ContactCards/ContactCards';
import AddContactForm from '../../AddContactForm/AddContactForm';
import ContactsAppBar from '../../ContactsAppBar/ContactsAppBar';

const Contacts = () => {
    return (
        <div>
            <ContactsAppBar/>
            <AddContactForm />
            <ContactCards />
        </div>
    );
};

export default Contacts;