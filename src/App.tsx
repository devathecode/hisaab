import React from 'react';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    return (
        <>
            <ToastContainer />
            <Header/>
            <Home/>
        </>
    );
};

export default App;