import { React, useState } from 'react'


const Counter = () => {
    const [value, setValue] = useState(0);
    const updateValue = () => {
        setValue(value + 1);
    }
    return (
        <>
            <h1>Current value is {value}</h1>
            <button onClick={updateValue}>Click</button>
        </>
    );
}




export default Counter;