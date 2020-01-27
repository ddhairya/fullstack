import React, {useState} from 'react';
import ReactDOM from 'react-dom'; 

const Header = ({text}) => <h1> {text} </h1>

const Button = ({text,onClick}) => <button onClick={onClick}> {text} </button>

const Statistics = ({text1, value1,text2, value2,text3, value3,text4, value4,text5, value5,text6, value6 }) => {
    
    
    if (value4 === 0){
        return(
            <p> No feedback given</p>   
        )
    }
    
    return (
        <table>
            <tbody>
                <tr>
                    <td>{text1}</td>
                    <td>{value1}</td>
                </tr>
                <tr>
                    <td>{text2}</td>
                    <td>{value2}</td>
                </tr>
                <tr>
                    <td>{text3}</td>
                    <td>{value3}</td>
                </tr>
                <tr>
                    <td>{text4}</td>
                    <td>{value4}</td>
                </tr>
                <tr>
                    <td>{text5}</td>
                    <td>{value5}</td>
                </tr>
                <tr>
                    <td>{text6}</td>
                    <td>{value6}</td>
                </tr>
            </tbody>
        </table>
    )
}

const App = () =>{
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const addGood = (value) => setGood(value)
    const addNeutral = (value) => setNeutral(value)
    const addBad = (value) => setBad(value)
    
    

    return(
        <div>
            <Header text='give feedback'/>
            <div>
                <Button text = 'good' onClick = {() => addGood(good + 1)}/> 
                <Button text = 'neutral' onClick = {() => addNeutral(neutral +1)}/>
                <Button text = 'bad' onClick = {() => addBad(bad + 1)}/>
            </div>
            <Header text='statistics'/>
            <Statistics text1 = 'good' value1 = {good} text2 = 'neutral' value2 = {neutral} text3 = 'bad' value3 = {bad} text4 = 'all' 
                value4 = {good+neutral+bad} text5 = 'average' value5 = {(good - bad)/(good + neutral + bad)} text6 = 'positive' 
                value6 = {(good/(good+bad+neutral))*100 + ' %'} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));