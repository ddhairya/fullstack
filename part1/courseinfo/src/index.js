import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const Header = (props) => {
	console.log('This is from Header const')
	return(
		<div>
			<h1>{props.course}</h1>
		</div>
	)
}

const Content = (props) => {
	console.log('This is Content component')
	return(
		<div>
			<Part part={props.part1} exercise = {props.exercises1}/>
			<Part part={props.part2} exercise = {props.exercises2}/>
			<Part part={props.part3} exercise = {props.exercises3}/>
		</div>
	)
}

const Part = (props) => {
	console.log('This is the Part component')
	return(
		<div>
			<p>{props.part} {props.exercise}</p>
		</div>
	)
}

const Total = (props) => {
	console.log('This is total component')
	return(
		<div>
			<p>Number of  exercise {props.total}</p>
		</div>
	)
}


const App = () => {
	console.log('This is the main component')
	const course = 'Half Stack application development'
	const part1 = 'Fundamentals of React'
	const exercises1 = 10
	const part2 = 'Using props to pass data'
	const exercises2 = 7
	const part3 = 'State of a component'
	const exercises3 = 14

	
	return(
	  <>
		<Header course={course} />
		<Content part1={part1} part2={part2} part3={part3} exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
		<Total total={exercises1+exercises2+exercises3} />
	  </>
	)
}

ReactDOM.render(<App />, document.getElementById('root'));
