import React,{useState, useEffect} from 'react'
import Filter from './component/Filter'
import Form from './component/Form'
import Persons from './component/Persons'
import personService from './services/persons'
import Notification from './component/Notification'
import './App.css'


const App = () => {
    const [person, setPerson] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [showAll, setShowAll] = useState(true)
    const [filterName, setFilterName] = useState('')
    const [message, setMessage] = useState('')

    
    
    const nameToShow = showAll ? person : person.filter(({name}) => name.toLowerCase().includes(filterName.toLowerCase()))
    
    const hook = () => {
        console.log('effect')
        personService
            .getAll()
            .then(response => setPerson(response.data))
        
        // axios
        //     .get('http://localhost:3001/persons')
        //     .then(response => {
        //         console.log('promise fullfiled')
        //         setPerson(response.data)
        //     })
    }

    useEffect(hook,[])
    const reset = () => {
        setNewName('')
        setNewNumber('')
    }

    const addName = (event) => {
        const result = person.find(({name}) => name === newName)
        //event.preventDefault()
        const personObject = {
            name: newName,
            number: newNumber
        }
        //console.log('Result'+result)
        if (result === undefined ) {
            //console.log(result)
            personService.create(personObject)
            setPerson(person.concat(personObject))
            hook()
            row()
            setMessage(`Added ${newName}`)
            setTimeout(() => {setMessage('')},5000)
            //console.log(response)
            reset()
        }else{
            if(window.confirm(`${result.name} is already to phonebook, replace the older number with a new one?`)){
                //console.log(personService.update(personObject,result.id))
                personService.update(personObject,result.id)
                //alert(`${result.id} is already added to phonebook`)
                reset()
            }            
        }
    }

    const handleNewName = (event) => setNewName(event.target.value)
    const handleNewNumber = (event) => setNewNumber(event.target.value)
    const handleFilter = (event) => {
        setShowAll(false)
        setFilterName(event.target.value)
    }
    const handleDelete = (id, name) => {
        if(window.confirm(`Delete ${name}`)){
            console.log(id)
            personService.recordDel(id).catch(error => {
                setMessage(`Information of ${name} has already been removed from server`)
                setTimeout(() => {
                    setMessage('')
                }, 5000);
            }
            )
            hook()
        }
        
    }

    const row = () => nameToShow.map(person => <p key = {person.name}>{person.name} {person.number} <button onClick = {() => handleDelete(person.id, person.name)}>delete{person.id}</button> </p> )
    console.log("main method")
    return(
        <div>
            <h2>Phonebook</h2>
            <Notification message = {message}/>
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