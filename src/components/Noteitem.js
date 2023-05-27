import React ,{useContext} from 'react'
import NoteContext from "../context/notes/NoteContext"

const Noteitem = (props) => {
    const { note ,updateNote} = props;
    const context = useContext(NoteContext);
    const { deleteNote } = context;
    return (

        <>
   
        <div className="col   my-5">

            <div className="card text-center">
                <div className="card-header">
                    {note.tag}
                </div>
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>

                    <i className="fa-solid fa-file-pen mx-2" onClick={()=>{updateNote(note)}}></i>
                    <i className="fa-regular fa-trash-can mx-2" onClick={()=>{deleteNote(note._id)}}></i>

                </div>
                <div className="card-footer text-body-secondary">
                    
                </div>
            </div>

        </div>
     </>   
    )
}

export default Noteitem
