import React, {useState} from 'react';
import ReactDOM from 'react-dom';



const App = (props) => {
    const [selected, setSelected] = useState(0)
    const anecdotes = [
        "Life rocks",
        'If it hurts, do it more often',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
    ]
    const randSelect = () => setSelected(Math.floor(Math.random()*6)+1)

    return(
        <div>
            <p>{anecdotes[selected]}</p>
            <p>{console.log(anecdotes[selected])}</p>
            <button onClick={randSelect}>Next Anecdotes</button>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
