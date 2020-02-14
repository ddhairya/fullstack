import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {    
    
    const Course = ({course}) => {
        console.log(course.part)
        
        const tarray = course.part

        const total = tarray.reduce((sum, tarray) => sum + tarray.exercise , 0)
            // {
            //     console.log('what is happening', sum, tarray)
            //     return sum + tarray.exercise   
            // },0)

        console.log(total)

        
        return(
            <>
                <Header header={course}/>  
                <Content parts={course.part}/>
                <p>Total of {total} exercise</p>              
            </>
        )        
    }

    const Header = ({header}) => <h1>{header.name}</h1>
    // {
    //     console.log(header)
    //     return(
    //         <>
    //             <h1>{header.name}</h1>
                
    //         </>
    //     )
    // }

    const Content = ({parts}) => parts.map(part => <Part key={part.id}  pname={part.name} pexercise={part.exercise}/>)
    // {
    //        parts.map(
    //              part => {  
    //                  console.log (part.name))
    //                  <Part  pname={part.name} pexercise={part.exercise}/>
    //              }
    //         )
    //         console.log(parts)
    // }
   
    const Part = ({pname, pexercise}) => <p>{pname} {pexercise}</p>
    // {
    //     console.log(pname)
    //     return(
    //         <p>{pname} {pexercise}</p>
    //     )
    // }

    const course = {
        name: 'Half Stack Application Development!',
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
    }

    return(
        <div>
            <Course course={course}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));