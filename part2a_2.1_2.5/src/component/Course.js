import React from 'react'

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

const Content = ({part}) => <Part key={part.id}  pname={part.name} pexercise={part.exercise}/>
 
const Part = ({pname, pexercise}) => <p>{pname} {pexercise}</p>
   

export default Course