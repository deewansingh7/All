import React, { useState } from 'react'
import data from './data'

function Accordian() {
    const [arr, setArr] = useState([]);
    // const [multiSelect,setMultiSelect]=useState([]);
    function updateId(val) {
        let cpyArr = [...arr];
        // let cpyArr = arr;
        const id = cpyArr.indexOf(val);
        console.log(id);
        if (id === -1) cpyArr.push(val);
        else cpyArr = arr.filter(x => x !== val);
        console.log(cpyArr, arr)
        setArr(cpyArr)
    }
    return (
        <div>
            {data && data.length > 0 ?
                data.map((item) => (
                    <div className="title">
                        <h3 onClick={() => { updateId(item.id) }}>+{item.question}</h3>
                        {arr.indexOf(item.id) !== -1 ? item.answer : null}
                        {/* {id === item.id ? item.answer : null} */}
                    </div>
                )) :
                <h2>Data is not present</h2>
            }
        </div>
    )
}

export default Accordian;