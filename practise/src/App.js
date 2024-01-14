import Accordian from "./components/Accordion/accordian"
import Calculator from "./components/calculator/Calculator"
import { useState, useEffect } from "react";
import Header from "./components/Contact/Header";
import AddContact from "./components/Contact/AddContact";
import ContactList from "./components/Contact/ContactList";
import { Route, Routes } from "react-router-dom";
import uniqid from 'uniqid';
import { v4 as uuidv4 } from 'uuid';
// import ContactCard from "./components/Contact/ContactCard";
import ContactDetails from "./components/Contact/ContactDetails";

function App() {
    const KEY = "DEEWAN";

    const [contacts, setContacts] = useState([]);

    function handleContact(value) {

        if (!value.name || !value.email) {
            alert("All the fields are mandatory");
            return;
        }
        console.log(uuidv4());
        value = { ...value, id: uuidv4() };
        setContacts([...contacts, value]);
        // console.log(contacts);
    }

    useEffect(() => {
        const initialContacts = JSON.parse(localStorage.getItem(KEY));
        if (initialContacts) setContacts(initialContacts);
    }, [])

    useEffect(() => {
        localStorage.setItem(KEY, JSON.stringify(contacts));
        // }
        // console.log(contacts);
    }, [contacts]);

    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<ContactList contacts={contacts} />} />
                <Route path="/add" element={<AddContact callback={handleContact} />} />
                <Route path='/user/:id' element={<ContactDetails />} />
            </Routes>
        </div>
    )
}

export default App