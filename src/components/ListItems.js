import React from 'react';
import '../css/ListItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';
import axios from 'axios';
import { faPassport } from '@fortawesome/free-solid-svg-icons';

class ListItems extends React.Component {

    state = {
        body: '',
        notes: []
    };

    componentDidMount = () => {
        this.getNotes();
    }

    getNotes = () => {
        axios.get('http://localhost:8080/api')
            .then((response) => {
                const data = response.data;
                this.setState({ notes: data });
                console.log('Data received...');
            })
            .catch(() => {
                console.log('Error receiving data...');
            });
    }

    onChange() {
        
    }

    displayNotes = (notes) => {        
        if(!notes.length) return null;

        return notes.map((note, index) => {
            return(
                <div key={index} className="list">
                    <p>
                        {/* <li id={index}>
                            {note.body} */}
                            <input type="text" 
                                id={index}
                                value = {note.body}
                                onChange = {this.onChange()}                       
                            />
                            <span>
                                <FontAwesomeIcon className="faicons" 
                                icon="trash"
                                />
                            </span>
                        {/* </li> */}
                    </p>
                </div>
            )
        });
    };

    render() {
        
        console.log('State: ', this.state);

        return (
            <div className="notes">
                {this.displayNotes(this.state.notes)}
            </div>        
        );
    }
}



// function ListItems(props) {
//     const items = props.items;
//     const listItems = items.map(item =>
//         {
//             return <div className="list" key={item.key}>
//                 <p>
//                     <input type="text" 
//                     id={item.key}
//                     value = {item.text}
//                     onChange ={
//                         (e) => {
//                             props.setUpdate(e.target.value, item.key)
//                         }
//                     }
//                     />
//                 <span>
//                     <FontAwesomeIcon className="faicons" 
//                     icon="trash" 
//                     onClick={ () => props.deleteItem(item.key)
//                     }/>
//                 </span>
//                 </p>

//             </div>
//         })
//     return (
//         <div>
//             <FlipMove duration={300} easing="ease-in-out">
//                 {listItems}
//             </FlipMove>            
//         </div>
//     )
// }

export default ListItems;