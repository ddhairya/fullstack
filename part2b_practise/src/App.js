import React,{useState} from 'react'
import Note from './component/Note'

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('a new note...')
  const [showAll, setShowAll] = useState(false)
  const notesToShow = showAll ? notes : notes.filter(note => note.important === true)

  const row = () => notesToShow.map(note => <Note key = {note.id} note = {note}/>)
  const addNote = (event) => {
      event.preventDefault()
      const noteObject = {
          content: newNote,
          date: new Date().toISOString(),
          important:    Math.random() > 0.5,
          id:   notes.length + 1
      }
      setNotes(notes.concat(noteObject))
      setNewNote("")
    //   console.log(new Date().toISOString())
    //   console.log('Button Clicked',event.target)
  }
  const handleNoteChange = (event) => {
      //console.log(event.target)
      setNewNote(event.target.value)
  }
  return(
      <div>
          <h1>Notes!</h1>
          <div>
              {console.log(showAll)}
              <button onClick = {() => setShowAll(!showAll)}>show { showAll ? 'important' : 'all' }</button>
              {console.log(!showAll)}
          </div>
          <ul>
              {row()}
          </ul>
          <form onSubmit={addNote}>
              <input value = {newNote} onChange = {handleNoteChange} />
              <button type="submit">Save</button>
          </form>
      </div>
  )
}

export default App