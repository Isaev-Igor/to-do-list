import React from 'react';
import './App.css';
import Header from '../component/Header/Header';
import AddItem from '../component/AddItem/AddItem';
import Task from '../component/Task/Task';
import DropButton from "../component/DropButton/DropButton";


function App() {
    return (
        <div className="App">
            <Header/>
            <AddItem/>
            <Task/>
            <DropButton/>
        </div>
    );
}

export default App;
