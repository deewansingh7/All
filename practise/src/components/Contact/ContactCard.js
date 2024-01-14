import React from "react";
import { Link } from "react-router-dom";

const ContactCard = (props) => {
    // console.log(props);
    const contact = props.contacts;
    return (
        <div>
            <img src="https://placehold.jp/100x100.png" alt="image" />
            <Link to={`/user/${contact.id}`} state={{ contact }} >
                <div>
                    <div>{contact.name}</div>
                    <div>{contact.email}</div>
                </div>
            </Link>
        </div>
    );
};

export default ContactCard;
