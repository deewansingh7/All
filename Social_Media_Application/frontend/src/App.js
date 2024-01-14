import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
// import {Routes}



function App() {
    return (
        <div className="App">
            {/* <h1>Hello</h1> */}
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/home' element={<Home />} />
            </Routes>
        </div>
    );
}


export default App;
