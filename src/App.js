import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import TodoList from './components/TodoList'
import TodoItem from './components/TodoItem'
import TodoForm from './components/TodoForm'


function App() {
  let [todo, setTodo] = useState([{id: 1, title: 'study', description: 'study hooks for 3 hours'}])
  
  return (
    
    <div className="App m-5">
        <TodoForm />
        <TodoList todos={todo} />
    </div>
  );
}

export default App;
