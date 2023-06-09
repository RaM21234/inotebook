import React, { useState ,useContext} from 'react'
import NoteContext from "../context/notes/NoteContext"

const AddNote = () => {
    const context = useContext(NoteContext);
    const { addNote } = context;

    const [note,setNote]=useState({title:"",description:"",tag:""});

    const onChange =(e)=>{
        setNote({...note,[e.target.name]:e.target.value})

    }
    const handleClick =(e)=>{
        e.preventDefault();
        addNote(note.title,note.description,note.tag);
        setNote({title:"",description:"",tag:""})

    }
    return (
        <>
 
            <div className="container my-3 mx-3 ">
                <div className="container my-3"><h2>Add a Note</h2></div>
                
                <form className="my-3">
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" name="title" value={note.title} aria-describedby="emailHelp" onChange={onChange} minLength={5} required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">Tag</label>
                        <input type="text" className="form-control" id="tag" value={note.tag} name="tag" onChange={onChange} minLength={5} required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" className="form-control"  id="description" value={note.description} name="description" onChange={onChange} minLength={5} required/>
                    </div>
                   
                    <button type="submit" className="btn btn-primary" onClick={handleClick} disabled ={note.title.length<5||note.description.length<5}>Add Note</button>
                </form>
            </div>
        </>
    )
}

export default AddNote
