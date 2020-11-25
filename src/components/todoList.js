import React from 'react';
import TodoItem from './TodoItem'

let TodoList = (props) => {
    
    let todos = props.todos.map((todo) => <TodoItem todo={todo} key={todo.id} id={todo.id} title={todo.title} description={todo.description} deleteHandle={props.deleteHandle} editHandle={props.editHandle}/>)
    return (
        <div className="row-4">
            <div className='row mx-4 align-items-center'>
                <div className='col-3'>
                    <h1>ID</h1>
                </div>
                <div className='col' >
                    <h2>To Do Name</h2>
                </div>
                <div className='col-6'>
                    <h4>To Do Description</h4>
                </div>
            </div>
            {todos}
        </div>
    );
}

export default TodoList;
