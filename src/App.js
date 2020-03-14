import React from 'react';
import TodoList from "./TodoList";
import './App.css';

class App extends React.Component{
constructor(props){
  super(props);


this.state = {
items  : []
};
this.addItemHandler  = this.addItemHandler.bind(this);
this.deleteItemHandler = this.deleteItemHandler.bind(this);

}

addItemHandler(e){

if(this._inputElement.value !== "") {

  var newItem = {
    text : this._inputElement.value,
    key: Date.now()
  }
this.setState((prevState) => {
return {
  items : prevState.items.concat(newItem)
};
});
}

this._inputElement.value = "";
console.log(this.state.items);

e.preventDefault();

}
deleteItemHandler(key){

  var filteredItems = this.state.items.filter(function(item){
    return (item.key !==key)
  });

  this.setState({
    items: filteredItems
  });
}


render(){
  return (
    <div className="App">

    <div className = "todoListMain">
    <div className = "header">
    <form onSubmit = {this.addItemHandler}>
    
    <input ref =  {(a) => this._inputElement = a} 
    type = "text" placeholder = "Enter TASK"></input>
    <button className = "button" type = "Submit"><strong>ADD</strong></button>
    </form>
    </div>
    </div>
    <TodoList tasks = {this.state.items}
      delete = {this.deleteItemHandler}
    />
    </div>
  );
}
}

export default App;
