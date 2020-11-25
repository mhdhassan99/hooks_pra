import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import TodoList from './components/TodoList'
import TodoItem from './components/TodoItem'
import TodoForm from './components/TodoForm'


function App() {
  let [todo, setTodo] = useState([{id: 1, title: 'study', description: 'study hooks for 3 hours'}])

  const addTodo = (obj) => {
    obj.id = todo.id + 1
    let copyOfState = [...todo, obj]
    setTodo(copyOfState)
  
  }
  
  return (
    
    <div className="App m-5">
        <TodoForm todos={todo} addTodo={addTodo}/>
        <TodoList todos={todo} />
    </div>
  );
}

export default App;
