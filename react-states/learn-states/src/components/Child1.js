import React, { useState } from 'react'

function Child1(props) {

    const [val1, setVal1] = useState(0);
    const updateVal1 = () => {
        setVal1(val1 + 1);
        props.callBack(val1 + 1);
    }
    return (
        <>
            <h1>child1 val is {val1}</h1>
            <button onClick={updateVal1}>click</button>
        </>

    )
}



export default Child1;