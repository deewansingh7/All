import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";
// importllll
const ContactList = (props) => {
    //   console.log(props.contacts);
    const contacts = props.contacts;
    return (
        <div>
            <Link to={'/add'}><button>Add</button></Link>
            {contacts.map((contact) => (
                <ContactCard contacts={contact} />
            ))}
        </div>
    );
};
export default ContactList;
