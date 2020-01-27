import React, { useState } from 'react'
import ReactDOM from 'react-dom';



const App = () =>{
	
	const [clicks, setClicks] = useState({left:0, right:0})
	

	
	const handleLeftClick = () => {
		const newClick = {
			...clicks,
			left: clicks.left + 1,
		}
		setClicks(newClick)
	}
	
	const handleRightClick = () => {
		const newClick = {
			...clicks,
			right: clicks.right + 1
		}
		setClicks(newClick)
	}
	
	return(
		<div>
			<div>
				{clicks.left}
				<button onClick = {handleLeftClick}>
					Left
				</button>
			</div>
			<div>
				{clicks.right}
				<button onClick = {handleRightClick}>
					Right
				</button>
			</div>
		
		</div>
	
	)
}
ReactDOM.render(<App />, document.getElementById('root'));
