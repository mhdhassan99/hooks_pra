import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import TodoList from './components/TodoList'
import TodoItem from './components/TodoItem'
import TodoForm from './components/TodoForm'


function App() {
  let [todo, setTodo] = useState([{id: 0, title: 'study', description: 'study hooks for 3 hours'}])

  const addTodo = (title, description) => {
    // obj.id = (todo.length - 1) + 1
    let obj = {
        id: (todo.length - 1) + 1,
        title: title,
        description: description
      }
    let copyOfState = [...todo, obj]
    setTodo(copyOfState)
  }
  
  const deleteHandle = (id) => {
    let copyOfState = [...todo]
    copyOfState = copyOfState.filter(todo => todo.id != id)
    setTodo(copyOfState)
  }  

  const editHandle = (obj) => {
    let copyOfState = [...todo]
    let newState = copyOfState.map(todo => {
        if (todo.id === obj.id){
          return obj;
        }
        return todo
    })
    setTodo(newState)
  }

  return (
    <div className="App m-5">
        <TodoForm todos={todo} addTodo={addTodo}/>
        <TodoList todos={todo} deleteHandle={deleteHandle} editHandle={editHandle}/>
    </div>
  );
}

export default App;
