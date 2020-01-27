import React, { useState } from 'react'
import ReactDOM from 'react-dom';



const App = () =>{
	
	const [left, setLeft] = useState(0)
	const [right, setRight] = useState(0)
	
	return(
		<div>
			<div>
			{left}
			<button onClick = { () => setLeft(left + 1)}>
				Left
			</button>
			</div>
			<div>
				{right}
				<button onClick = { () => setRight(right + 1)}>
					Right
				</button>
			</div>
		
		</div>
	
	)
}
ReactDOM.render(<App />, document.getElementById('root'));
