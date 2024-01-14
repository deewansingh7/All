import { useState } from "react";
import React from 'react'
import SingleNote from "./singleNote";

function Notes() {
    const [notes, setNotes] = useState([]);
    const [curNote, setCurNote] = useState('');

    const updateNote = () => {
        const newNotesArray = [...notes, curNote];
        setNotes(newNotesArray);
    }
    const updateCurNote = (event) => {
        const nextText = event.target.value;
        setCurNote(nextText);
    }

    const ulStyle = {
        listStyle: 'none',
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: '20px'
    }
    return (
        <>
            <input onChange={updateCurNote} type='text' />
            <button onClick={updateNote}>Click</button>
            <ul style={ulStyle}>
                {
                    notes.map((x, index) => {
                        return (
                            <li key={index}>
                                {/* {x} */}
                                <SingleNote note={x} />
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default Notes;