import React, { useContext, useEffect, useRef, useState } from 'react';
import NoteContext from "../context/notes/NoteContext"
import Noteitem from './Noteitem';
import AddNote from './AddNote';

const Notes = () => {
    const context = useContext(NoteContext);
    const { notes, getNotes, editNote } = context;
    const ref = useRef(null)   // used to give reference to an element
    const refClose = useRef(null)
    const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" });

    useEffect(() => {
        getNotes()
        // eslint-disable-next-line
    }, [])
    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })
    }
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    const handleClick = (e) => {
        console.log("Updating the Note....", note)
        editNote(note.id, note.etitle, note.edescription, note.etag);
        refClose.current.click();

    }
    return (
        <>

            {/*   Modal   */}


            <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>


            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="my-3">
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} aria-describedby="emailHelp" onChange={onChange} minLength={5} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onChange} minLength={5} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange} minLength={5} required />
                                </div>


                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleClick} disabled={note.etitle.length < 5 || note.edescription.length < 5}>Update Note</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container text-center">
                <div class="row row-cols-2">
                <div className="my-2 text-start"><h1>Saved Notes :</h1></div>
                
                <div className="container mx-2 border border-dark">{notes.length === 0 && 'No notes to display'}</div>

                {notes.map((note) => {
                    return <Noteitem key={note._id} note={note} updateNote={updateNote} />
                })}
                    
                </div>
            </div>


            
        </>

    )
}

export default Notes
//
