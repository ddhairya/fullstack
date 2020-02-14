import React from 'react';
import ReactDOM from 'react-dom';

const Content = ({part}) => <Part key={part.id}  pname={part.name} pexercise={part.exercise}/>
 
const Part = ({pname, pexercise}) => <p>{pname} {pexercise}</p>
   
const Course = ({course}) => course.map(course => <Header key={course.id} header={course} />)

const Header = ({header}) => {
    //console.log(header.part)
    const texercise = header.part
    const total = texercise.reduce((sum,texercise) =>  sum + texercise.exercise,0)
    //console.log(total)
    return(
        <>
            <h1>{header.name}</h1>
            {header.part.map(part => <Content key = {part.id} part={part} />)}
            <b>Total of {total} exercise</b> 
        </>
    )
    
}


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

const App = () => {    
    
   
   

    
    
    return(
        <div>
            <Course course={course}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));