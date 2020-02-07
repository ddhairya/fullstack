import React, {useState} from 'react';
import ReactDOM from 'react-dom';


const TitleHead = (props) => <h1>{props.text}</h1>

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState({0:0, 1:0, 2:0, 3:0, 4:0, 5:0, 6:0})
    const anecdotes = [
        "Life rocks",
        'If it hurts, do it more often',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
    ]
    
    const randSelect = () =>  setSelected(Math.floor(Math.random()*6))   
    
    const voteAdd = () => setVotes({...votes, [selected] : votes[selected]+1})    
    
    const maxArray = Object.values(votes)
    const maxAnecdostes = maxArray.indexOf(Math.max(...maxArray))

    //console.log(votes)
    return(        
        <div>
            <TitleHead text = 'Anecdote of the day'/>
            <p>{anecdotes[selected]} <br/> has {votes[selected]}</p>
            <Button onClick={voteAdd} text = 'Vote'/>
            <Button onClick={randSelect} text = 'Next Anecdote'/>
            <TitleHead text = 'Anecdote with the most vote'/>
            <p>{anecdotes[maxAnecdostes]}</p>            
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
