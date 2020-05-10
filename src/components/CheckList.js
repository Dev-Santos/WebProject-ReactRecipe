import React from 'react';
import ListItems from './ListItems';
import '../css/checklist.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

library.add(faTrash);

class CheckList extends React.Component {

    state = {
        body: ''
    };

    handleChange = ({ target }) => {
        const { value } = target;
        this.setState({ body: value });
    };

    submit = (event) => {
        event.preventDefault();

        const payload = {
            body: this.state.body
        };

        axios({
            url: 'http://localhost:8080/api/save',
            method: 'POST',
            data: payload
        })
            .then(() => {
                console.log('Data has been sent to the server');
                this.setState(this.state.body);
                this.resetUserInputs();
            })
            .catch(() => {
                console.log('Internal server error');
            });
    };

    resetUserInputs = () => {
        this.setState({
            body: ''
        });
    };

    constructor(props){
        super(props);
        this.state={
            items:[],
            currentItem:{
                text:'',
                key:''
            }            
        }
        this.handleInput = this.handleInput.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.setUpdate = this.setUpdate.bind(this);
    }
    handleInput(e){
        this.setState({
            currentItem:{
                text: e.target.value,
                key: Date.now()
            }
        })
    }
    addItem(e){
        e.preventDefault();
        const newItem = this.state.currentItem;
        console.log(newItem);
        if(newItem.text!==""){
            const newItems=[...this.state.items, newItem];
            this.setState({
                items:newItems,
                currentItem:{
                    text:'',
                    key:''
                }
            })
        }
    }
    deleteItem(key){
        const filteredItems = this.state.items.filter( item => item.key!==key);
        this.setState({
            items:filteredItems
        })
    }
    setUpdate(text, key){
        const items = this.state.items;
        items.map(item =>{
            if(item.key===key){
                item.text=text;
            }
        })
        this.setState({
            items: items
        })
    }
    render(){

        // console.log('State: ', this.state);

        //JSX
        return (
            <div className="CheckList">
                {/* <h3>Checklist Section: </h3>
                <p>This section would allow the user to create a personal checklist where they can add/edit/delete items</p> */}

                <header>
                    <form id="to-do-form" onSubmit={this.submit}>
                        <input 
                            type="text"
                            name="newNote"
                            placeholder="Enter item: "
                            value= {this.state.body}
                            onChange={this.handleChange}
                        />
                        {/* <input type="text" placeholder="Enter item: "
                        value={this.state.currentItem.text} onChange={this.handleInput} /> */}
                        <button type="submit">Add Item</button>
                    </form>
                    <ListItems />
                    {/* <ListItems items = {this.state.items}
                    deleteItem = {this.deleteItem}
                    setUpdate = {this.setUpdate}></ListItems> */}
                </header>
                
            </div>
        );
    }
}

export default CheckList;
