import React, { useState } from 'react'

function Fruits() {
    const [fruit, setFruit] = useState('Apple');
    const [inputText, setInputText] = useState('');

    const updateFruit = () => {
        setFruit(inputText);
    }

    const updateInputText = (event) => {
        const newInputText = event.target.value;
        setInputText(newInputText);
    }
    return (
        <>
            <h1>The value of Fruit is {fruit}</h1>

            <input type="text" onChange={updateInputText} />
            {/* <button onClick={() => updateFruit('Papaya')}>Papaya</button>
            <button onClick={() => updateFruit('Orange')}>Orange</button>
            <button onClick={() => updateFruit('Mango')}>Mango</button> */}
            <button onClick={updateFruit}>Click</button>

        </>
    )
}

export default Fruits;