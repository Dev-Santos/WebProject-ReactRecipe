import React from 'react';
import '../css/checklist.css';

class CheckList extends React.Component {
    render(){
        return (
            <div className="CheckList">
                <h3>Checklist Section: </h3>
                <p>This section would allow the user to create a personal checklist where they can add/edit/delete items</p>
            </div>
        )
    }
}

export default CheckList;
