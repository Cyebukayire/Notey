import React from 'react'

const NoteItem = ({note}) => {
    console.log("reached there")
  return (
    <div>
        <h2>{note.body}</h2>
    </div>
  )
}

export default NoteItem