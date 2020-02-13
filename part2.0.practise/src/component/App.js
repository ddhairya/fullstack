import React from 'react'
import Note from './Note'

const App = ({notes}) => {
  //const {notes} = props
  //console.log(props.notes)
  //console.log(notes)
  const row = () => notes.map(note => <Note key = {note.id} note = {note}/>)
  return(
      <div>
          <h1>Notes!</h1>
          <ul>
              {row()}

          </ul>
      </div>
  )
}

export default App