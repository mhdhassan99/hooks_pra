import React, {useState} from 'react';


let TodoForm = (props) => {

    let [search, setSearch] = useState({title: '', description: ''})

    const inputHandle = (e) => {
        const value = e.target.value
        setSearch({
            ...search, 
            [e.target.name]: value
        })
    }

    const handleAdd = (e) => {
         props.addTodo(search)
        //  console.log(search)
    }


    return (
        <div className="row m-3">   
            <input onChange={inputHandle} className="col form-control" type="text" value={search.name} name='title'/>
            <input onChange={inputHandle} className="col form-control" type="text" value={search.description} name='description'/>

            <button onClick={handleAdd} className="btn btn-primary mx-2" >
                ADD
            </button>
        </div>
    );
}

export default TodoForm;
