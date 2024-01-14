import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const ContactDetails = (props) => {
    const location = useLocation()
    console.log(location);
    // console.log(props.location.state);
    const contact = location.state.contact;
    return (
        <div>
            <img src="https://placehold.jp/100x100.png" alt="image" />
            <div>
                hello
                <div>{contact.name}</div>
                <div>{contact.email}</div>
            </div>
            <Link to={'/'}><button>Go back</button></Link>
        </div>
    );
};

export default ContactDetails;
