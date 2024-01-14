import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// Link
const AddContact = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
        // <Link></Link>
    }
    // function (){

    // }
    return (
        <div>
            <h2>Add Contact</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <Link to={'/'}>
                    <button
                        onClick={() => {
                            props.callback({ name, email });
                        }}
                    >
                        Add
                    </button>
                </Link>
            </form>
        </div>
    );
};

export default AddContact;
