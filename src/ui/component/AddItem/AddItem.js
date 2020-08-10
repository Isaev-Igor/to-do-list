import React from 'react';
import './AddItem.css';



function AddItem() {

    return (
        <div className="addItems-container">
            <input className="add-task__input" type="text" value={"Name..."}/>
            <button className="add-task__button">Add Item</button>
        </div>
    );
}


export default AddItem;