import React, {useState} from 'react';

let TodoItem = (props) => {
    // console.log(props.todo, 'TodoItem')
    let [edit, setEdit] = useState(false)
    let [title, setTitle] = useState('')
    let [description, setDescription] = useState('')

    const editHandle = (e) => {
        setEdit(!edit)
        let obj = {
            id: props.id,
            title: title,
            description: description
        }
        props.editHandle(obj)
    }

    return (
        <div className="row mx-2 align-items-center">
            <div className='col'>
                <h1>#{props.id}</h1>
            </div>

            <div className='col'>
                {edit ? <input type="text" className="form-control" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}

                /> : <h2>{props.title}</h2>}
            </div>

            <div className='col'>
                {edit ? <input type="text" className="form-control"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                /> : <h2>{props.description}</h2>}
            </div>
            
            <button onClick={editHandle} className="btn btn-primary mx-2">{edit ? "Update": "Edit"}</button>
            <button onClick={(e) => props.deleteHandle(props.id)} className="btn btn-danger mx-2">Delete</button>
        
        </div>
    );
}

export default TodoItem;
