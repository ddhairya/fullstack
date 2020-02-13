import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App'

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
        id: 3,
        content:    'GET and POST are the most important method of HTTP protocols',
        date:   '2020-03-12T08:32:00',
        important:  true
    }
]




ReactDOM.render(<App notes = {notes}/>, document.getElementById('root'));