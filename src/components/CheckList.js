import React from 'react';
import ListItems from './ListItems';
import '../css/checklist.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);

class CheckList extends React.Component {
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
        return (
            <div className="CheckList">
                {/* <h3>Checklist Section: </h3>
                <p>This section would allow the user to create a personal checklist where they can add/edit/delete items</p> */}

                <header>
                    <form id="to-do-form" onSubmit={this.addItem}>
                        <input type="text" placeholder="Enter item: "
                        value={this.state.currentItem.text} onChange={this.handleInput} />
                        <button type="submit">Add Item</button>
                    </form>
                    <ListItems items = {this.state.items}
                    deleteItem = {this.deleteItem}
                    setUpdate = {this.setUpdate}></ListItems>
                </header>
                
            </div>
        );
    }
}

export default CheckList;
