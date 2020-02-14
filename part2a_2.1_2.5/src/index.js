import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

const course = [
    {
        name: 'Half Stack Application Development!',
        id: 1,
        part:   [
            {
                name:   'Fundamentals of React',
                exercise:   10,
                id: 1
            },
            {
                name:   'Using props to pass data',
                exercise:   7,
                id: 2
            },
            {
                name:   'State of a component',
                exercise:   14,
                id: 3
            },
            {
                name:   'Redux',
                exercise:   11,
                id: 4
            }
        ]
    },
    {
        name: 'Node.js',
        id: 2,
        part:   [
            {
                name:   'Routing',
                exercise:   3,
                id: 1
            },
            {
                name:   'middlewares',
                exercise:   7,
                id: 2
            }
        ]
    }
]

ReactDOM.render(<App course={course} />, document.getElementById('root'));