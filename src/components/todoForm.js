import React from 'react';


let TodoForm = () => {
    // console.log('hi')
    return (
        <div className="row m-3">   
            <input className="col form-control" type="text" />

            <button className="btn btn-primary mx-2" >
                ADD
            </button>
        </div>
    );
}

export default TodoForm;
