import React, { useRef, useState } from 'react'
import * as math from "mathjs"

export default function Calculator() {
    const [exprr, setExprr] = useState("");
    const refVar = useRef();
    function handleClick(params) {
        console.log(params);
        if (params == "=") {
            setExprr(math.evaluate(refVar.current.value))
        }
        else {
            setExprr(prevValue => prevValue + params)
            console.log(exprr);
        }
    }
    return (
        <div>
            <input ref={refVar} type="text" value={exprr} /><br />
            <button onClick={() => handleClick('0')}>0</button>
            <button onClick={() => handleClick('1')}>1</button>
            <button onClick={() => handleClick('2')}>2</button><br />
            <button onClick={() => handleClick('3')}>3</button>
            <button onClick={() => handleClick('4')}>4</button>
            <button onClick={() => handleClick('5')}>5</button><br />
            <button onClick={() => handleClick('6')}>6</button>
            <button onClick={() => handleClick('7')}>7</button>
            <button onClick={() => handleClick('8')}>8</button>
            <button onClick={() => handleClick('9')}>9</button>
            <button onClick={() => handleClick("+")}>+</button>
            <button onClick={() => handleClick("-")}>-</button>
            <button onClick={() => handleClick("/")}>/</button>
            <button onClick={() => handleClick("*")}>*</button>
            <button onClick={() => handleClick("=")}>=</button>
            <button onClick={() => setExprr('')}>Clear</button>
            <button onClick={() => handleClick('cos(')}>cos()</button>

            <button onClick={() => handleClick(')')}>)</button>
        </div>
    )
}
