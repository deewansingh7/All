// import logo from './logo.svg';
// import './App.css';
import { useState } from 'react';
import Child1 from './components/Child1';
import Child2 from './components/Child2';
import Counter from './components/Counter';
import Fruits from './components/Fruits';
import Notes from './components/Notes';
import News from './components/news';
// import SingleNote from './components/singleNote';
import Navbar from './components/Navbar';

function App() {

    // const [parVal, setParval] = useState(0);

    const [getData, setGetData] = useState('tesla');
    function updateParVal(data) {
        setGetData(data);
    }
    return (
        <>
            {/* <Counter /> */}
            {/* <Fruits /> */}
            {/* <Notes /> */}
            {/* <h1>parent value is {parVal}</h1>
            <Child1 callBack={updateParVal} />
            <Child2 value={parVal} /> */}
            <Navbar callBack={updateParVal} />
            <News searchData={getData} />
        </>
    );
}

export default App;
