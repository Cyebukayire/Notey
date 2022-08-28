import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import NoteItem from "./NoteItem";

const NotesList = () => {
  const [notes, setNotes] = useState(null);
  useEffect(() => {
    getNotes()
  }, []);
//   const getNotes = async () => {
//     await axios
//       .get("http://127.0.0.1:8000/notes/")
//       .then((res) => {
//         console.log("notes fetched");
//         setNotes(res.data)
//       })
//       .catch((e) => {
//         console.log("Can't fetch notes");
//       });
//   }
const getNotes = async () => {
    const response = await fetch("http://127.0.0.1:8000/notes/")
    const data = await response.json()
    setNotes(data)
}
//   let elements;
//   console.log(notes)
//   if(notes != null){
//     elements = notes.map((item, index) => {
//         <NoteItem key = {index} note = {item}/>
//       })
//   }
  

  return (
  <div>{notes && notes.map((item, index)=>{
    // <NoteItem key = {index} note={item}/>
    <h3 key={index}>{item.body}</h3>
  })}</div>
  )
};

export default NotesList;
