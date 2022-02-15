import React, { Component } from 'react';
import './App.css'
import ListItems from './components/ListItems';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faTrash)

export default class App extends Component {
            constructor(props){
              super(props);

              this.state = {
                items : [],
                currentItem : {
                  text : '',
                  key : ''
                }
              }
              
             
               
            }
            addItem = (e)=>{
              e.preventDefault();
              const newItem = this.state.currentItem;
              if(newItem.text !== ""){
                const items = [...this.state.items,newItem];
                this.setState({
                  items : items,
                  currentItem : {
                    text : '',
                    key : ''
                  }
                })
                console.log(items)

              }
             
            }
            handleInput = (e)=>{
              this.setState({
                currentItem : {
                  text : e.target.value,
                  key : Date.now()
                }
              })

            }

            deleteItem = (key)=>{
              const filteredItems = this.state.items.filter((item)=>
                item.key !== key
              )
              this.setState({
                items : filteredItems
              })
            }

            setUpdate = (text,key)=>{
              console.log('Items='+ this.state.items);
              const items = this.state.items;
              items.map((item)=>{
                if(item.key === key){
                  console.log(item.key + " " + key);
                  item.text = text
                }
              })
              this.setState({
                items : items
              })

            }
  render() {
    return (
      <div className='App'>
        <form id="to-do-form" action="" onSubmit={this.addItem}>
          <input type="text" placeholder='Enter the Task.......' value={this.state.currentItem.text} onChange={this.handleInput} /><br />
          <button type='submit'>ADD</button>

        </form>
        <ListItems items ={this.state.items} deleteItem = {this.deleteItem} setUpdate = {this.setUpdate}/>
        

      </div>
    )
  }
}
