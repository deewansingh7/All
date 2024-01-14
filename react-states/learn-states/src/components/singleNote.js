import React from 'react'

function SingleNote({ note }) {

    const noteStle = {
        padding: '20px',
        borderRadius: '10px',
        border: '2px solid green',
        backgroundColor: '#eff2e4',
        marginBlock: '5px',
        marginInline: '5px'
    }

    return (
        <div className='singleNote' style={noteStle}>
            <p className="abc">{note}</p>
        </div>
    )
}

export default SingleNote;