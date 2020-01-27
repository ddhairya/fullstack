import React, { useState } from 'react'
import ReactDOM from 'react-dom';


const Button = ({onClick, text}) => {
	return(
		<>
			<button onClick={onClick}>
				{text}
			</button>
		</>
	)
}
const History = (props) => {
	
	if(props.allClicks.length === 0){
		return(
			<p>
				This app run by clicking on the button
			</p>
		)
	}
	
	return(
		<p>
			{props.allClicks.join(' ')}
		</p>
	)
}
const Apptest = (props) => {
	const [value, setValue] = useState(10)

  const hello = (who) => {
    const handler = () => {
      console.log('hello', who)
    }
    return (() => console.log('hello', who))
  }

  return (
    <div>
      {value}
      <button onClick={hello('world')}>button</button>
      <button onClick={hello('react')}>button</button>
      <button onClick={hello('function')}>button</button>
    </div>
  )
}
const App = () =>{
	
	const [left, setLeft] = useState(0)
	const [right, setRight] = useState(0)
	const [allClicks, setAllClicks] = useState([])
	

	
	const handleLeftClick = () => {
		
		setAllClicks(allClicks.concat('L'))
		setLeft(left+1)
	}
	
	const handleRightClick = () => {
		
		setAllClicks(allClicks.concat('R'))
		setRight(right+1)
		
	}
	
	return(
		<div>
			<div>
				{left}
				<Button onClick = {handleLeftClick} text = 'Left' />
					
			</div>
			<div>
				{right}
				<Button onClick = {handleRightClick} text = 'Right' />
					
			</div>
			<div>
				<History allClicks= {allClicks} />
			</div>
		
		</div>
	
	)
}
ReactDOM.render(<App />, document.getElementById('root'));
