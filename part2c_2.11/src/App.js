import React,{useState, useEffect} from 'react'
import Filter from './component/Filter'
import Form from './component/Form'
import Persons from './component/Persons'
import axios from 'axios'

const App = () => {
    const [person, setPerson] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [showAll, setShowAll] = useState(true)
    const [filterName, setFilterName] = useState('')
    
    const nameToShow = showAll ? person : person.filter(({name}) => name.toLowerCase().includes(filterName.toLowerCase()))
    
    const hook = () => {
        console.log('effect')
        axios
            .get('http://localhost:3001/persons')
            .then(response => {
                console.log('promise fullfiled')
                setPerson(response.data)
            })
    }

    useEffect(hook,[])

    const addName = (event) => {
        const result = person.find(({name}) => name === newName)
        event.preventDefault()
        if (result === undefined ) {
            //console.log(result)
            const personObject = {
                name: newName,
                number: newNumber
            }
            setPerson(person.concat(personObject))
            setNewName('')
            setNewNumber('')
        }else{
            alert(`${newName} is already added to phonebook`)
            setNewName('')
            setNewNumber('')
        }
    }

    const handleNewName = (event) => setNewName(event.target.value)
    const handleNewNumber = (event) => setNewNumber(event.target.value)
    const handleFilter = (event) => {
        setShowAll(false)
        setFilterName(event.target.value)
    }

    const row = () => nameToShow.map(person => <p key = {person.name}>{person.name} {person.number} </p> )
    console.log("main method")
    return(
        <div>
            <h2>Phonebook</h2>
            <Filter value = {filterName} onChange = {handleFilter}/>
            <h3>add a new</h3>
            <Form onSubmit = {addName} value1 = {newName} value2 = {newNumber} onChange1 = {handleNewName} onChange2 = {handleNewNumber}/>
            <h3>Numbers</h3>
            <div>
                <Persons row={row()}/>
            </div>

        </div>
    )
}

export default App