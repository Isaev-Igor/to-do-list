import React from 'react';
import './Task.css';
import starIMG from '../Task/img/star.png';
import checkboxIMG from '../Task/img/checkbox.png';
import editingIMG from '../Task/img/editing.png';
import deleteIMG from '../Task/img/delete.png';


function Task() {

    return (
        <div className="task-container">
            <div>
                Do 100 JavaScript Projects
            </div>
            <div className="controlButtons">
                <ul>
                    <li><img className="task-img" src={starIMG}/></li>
                    <li><img className="task-img" src={checkboxIMG}/></li>
                    <li><img className="task-img" src={editingIMG}/></li>
                    <li><img className="task-img" src={deleteIMG}/></li>
                </ul>
            </div>
        </div>
    );
}


export default Task;