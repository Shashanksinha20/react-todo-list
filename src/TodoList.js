import React  from 'react';
import "./TodoList.css";

class TodoList extends React.Component{
constructor(props){
    super(props);

this.makeTasks = this.makeTasks.bind(this);

}

makeTasks(item){
return <li onClick = {() => this.delete(item.key)}
key = {item.key}> {item.text} </li>
}

delete(key){
    this.props.delete(key);

}

render(){
var todoTask = this.props.tasks;
var taskItems = todoTask.map(this.makeTasks);

    return(
    
            <ul className = "theList">
                <strong>{taskItems}</strong>
            </ul>
    );

 }
}

export default TodoList;