import React from 'react';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {Route, Routes} from "react-router-dom";
import Table from "./components/Table/Table";

const App = () => {
    return (
        <>
            <ToastContainer />
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/table" element={<Table/>} />
            </Routes>
        </>
    );
};

export default App;