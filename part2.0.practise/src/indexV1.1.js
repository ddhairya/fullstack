import React from 'react';
import ReactDOM from 'react-dom';

const notes = [
    {
        id: 1,
        content:    'HTML is easy',
        date:   '2020-02-12T08:32:00',
        important:  true
    },
    {
        id: 2,
        content:    'Browser can execute only Java',
        date:   '2020-02-12T08:42:00',
        important:  false
    },
    {
        id: 1,
        content:    'GET and POST are the most important method of HTTP protocols',
        date:   '2020-03-12T08:32:00',
        important:  true
    }
]

const App = (props) => {
    const {notes} = props
    console.log(props.notes)
    console.log(notes)
    return(
        <div>
            <h1>Notes!</h1>
            <ul>
                {notes.map(note => <li>{note.content} </li>)}

            </ul>
        </div>
    )
}

ReactDOM.render(<App notes = {notes}/>, document.getElementById('root'));