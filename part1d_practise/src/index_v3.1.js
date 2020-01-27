import React, { useState } from 'react'
import ReactDOM from 'react-dom';


const History = (props) => {
	
	if(props.allClicks.length == 0){
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
				<button onClick = {handleLeftClick}>
					Left
				</button>
			</div>
			<div>
				{right}
				<button onClick = {handleRightClick}>
					Right
				</button>
			</div>
			<div>
				<History allClicks= {allClicks} />
			</div>
		
		</div>
	
	)
}
ReactDOM.render(<App />, document.getElementById('root'));
