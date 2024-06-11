import React from 'react';
import TodoListItem from "./TodoListItem";
function TodoList(){
    let todoState = React.useState(['Clean your room', 'Go Shopping', 'Learn React', 'Learn class components'])
let todos = todoState[0]
//let setTodos = todoState[1]




    let firstTask = "Make two cup of coffee - mod";
    let secondColor = `darkblue`;
    let person = {
        name: "Pesho",
        num: "0895600555"
    };

    
    return (
        <>
        <h2>Tasks</h2>
        <ul>
            <TodoListItem color = "green">{firstTask}</TodoListItem>
            <TodoListItem color = {secondColor}>Make breakfast for your child</TodoListItem>
            <TodoListItem color = "red">Regulary Call to your parents</TodoListItem>
            <TodoListItem color = "blue">Start Your Computer</TodoListItem>
            <TodoListItem color = "black">Start Learning React</TodoListItem>
            <TodoListItem color = "darkblue" person={person}></TodoListItem>
        </ul>
        
            {todos.map(todo => <TodoListItem>{todo}</TodoListItem>)}
       
        <div>{todos}</div>
      
        <button onClick={()=>console.log(`clicked`)}>Modify</button>
        </>
    )
}
export default TodoList;