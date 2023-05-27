
import { useState } from "react";
import NoteContext from "./NoteContext";


const NoteState = (props) => {
  const host = "http://localhost:5000"
  const notesInitial = []

  const [notes, setNotes] = useState(notesInitial);

  //Get all notes
  const getNotes = async () => {

    //API call

    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyZmYyN2EyMjViMDNjYTkzNzY0M2QzIn0sImlhdCI6MTY4MDkzMjI4OX0.mjf92Hb8ZPkCLOZ5WGnHrOi_LFatvb2jOhQSH67XbAE"
      }


    });
    const json = await response.json();
   
    setNotes(json)
  }


  //Add note
  const addNote = async (title, description, tag) => {
    //TODO api call
    //API call

    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyZmYyN2EyMjViMDNjYTkzNzY0M2QzIn0sImlhdCI6MTY4MDkzMjI4OX0.mjf92Hb8ZPkCLOZ5WGnHrOi_LFatvb2jOhQSH67XbAE"
      },

      body: JSON.stringify({ title, description, tag }),
    });
    const note =await response.json();
    setNotes(notes.concat(note))

  }
  //Delete note

  const deleteNote = async (id) => {
    //API CALL
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyZmYyN2EyMjViMDNjYTkzNzY0M2QzIn0sImlhdCI6MTY4MDkzMjI4OX0.mjf92Hb8ZPkCLOZ5WGnHrOi_LFatvb2jOhQSH67XbAE"
      },

  
    });
    const json = response.json();
    
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes);

  }
  //Edit note
  const editNote = async (id, title, description, tag) => {
    //API call

    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyZmYyN2EyMjViMDNjYTkzNzY0M2QzIn0sImlhdCI6MTY4MDkzMjI4OX0.mjf92Hb8ZPkCLOZ5WGnHrOi_LFatvb2jOhQSH67XbAE"
      },

      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    

    let newNotes=JSON.parse(JSON.stringify(notes))

    // logic to edit in client
    for (let i = 0; i < newNotes.length; i++) {
      const element = newNotes[i];
      if (element._id === id) {
        newNotes[i].title = title;
        newNotes[i].description = description;
        newNotes[i].tag = tag;
        break;
      }
    }
    
    setNotes(newNotes);
  }


  return (
    <NoteContext.Provider value={{ notes, setNotes, addNote, editNote, deleteNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;