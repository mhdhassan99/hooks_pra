import React, {useState} from 'react';


let TodoForm = (props) => {

    // let [search, setSearch] = useState({title: '', description: ''})

    let [title, setTitle] = useState('')
    let [description, setDescription] = useState('')

    // const inputHandle = (e) => {
    //     const value = e.target.value
    //     setSearch({
    //         ...search, 
    //         [e.target.name]: value
    //     })
    // }

    // const handleAdd = (e) => {
    //      props.addTodo(search)
    //     //  console.log(search)
    // }


    return (
        <div className="row m-3">   
            <input onChange={(e) => setTitle(e.target.value)} className="col form-control" type="text" value={title} name='title' placeholder='Title'/>
            <input onChange={(e) => setDescription(e.target.value)} className="col form-control" type="text" value={description} name='description' placeholder='Description'/>

            <button onClick={() => props.addTodo(title, description)} className="btn btn-primary mx-2" >
                ADD
            </button>
        </div>
    );
}

export default TodoForm;
