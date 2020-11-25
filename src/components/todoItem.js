import React from 'react';

let TodoItem = (props) => {
    
    return (
        <div className="row mx-2 align-items-center">
            <div className='col'>
                <h1>#{props.id}</h1>
            </div>
            <div className='col'>
            
                <h2>{props.title}</h2>
            </div>
            <div className='col'>
                <h4>{props.description}</h4>
            </div>
            
        </div>
    );
}

export default TodoItem;
