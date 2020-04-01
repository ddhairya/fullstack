import React,{useState, useEffect} from 'react'
import Filter from './component/Filter'
import axios from 'axios'

const App = () => {
    const [country, setCountry] = useState([])
    const [filterName, setFilterName] = useState('')
    const [weather, setWeather] = useState([])
    const url = 'https://restcountries.eu/rest/v2/all'
    //console.log(url)
    const api = process.env.REACT_APP_API_KEY
    //console.log(api)

    


    const HandleFilter = (event) => {
        setFilterName(event.target.value) 
    }

    const hook = () => {
        axios
            .get(url)
            .then(response => 
                setCountry(response.data)
            )
    }
    useEffect(hook,[])
    // useEffect(() => {
    //     axios
    //         .get(wurl)
    //         .then(response => console.log(response.data))
    // },setFilterName)

    const WeartherHandle = (wurl) =>{   
                                        console.log("weatherHandle wurl") 
                                        axios
                                        .get(wurl)
                                        .then(response => setWeather(response.data))
                                        //console.log(`Current temperature in ${weather} is`)
    }
    

    const CountryDetails = (country) => {        
            
        if(weather.length !== 0)
        {
            //console.log(weather.location.name)
    
            return(
                <>
                    {console.log(country)}
                    <h1>{country.name}</h1>
                    <>
                        capital:{country.capital}<br/>
                        population: {country.population}<br/>
                    </>
                    <h2>Spoken languages</h2>
                    <ul>
                        {country.languages.map(country => <li key = {country.name}>{country.name}</li>)}
                    </ul>
                    <br/>
                    <img src = {country.flag} height = '150' alt = 'flag'></img>
                    <h2>Weather in {weather.location.name} </h2>
                    <span> <b>temperature: </b> {weather.current.temperature} Celcius  </span><br/>
                    <img src = {weather.current.weather_icons} alt = 'weather icon'></img><br/>
                    <span> <b>wind:</b> {weather.current.wind_speed} mph direction {weather.current.wind_dir}</span>
                    {console.log('last')}      
                </>
            )
        }else{
            //console.log(weather.location.name)
    
            return(
                <>
                    {console.log(country)}
                    <h1>{country.name}</h1>
                    <>
                        capital:{country.capital}<br/>
                        population: {country.population}<br/>
                    </>
                    <h2>Spoken languages</h2>
                    <ul>
                        {country.languages.map(country => <li key = {country.name}>{country.name}</li>)}
                    </ul>
                    <br/>
                    <img src = {country.flag} height = '150' alt = 'flag'></img>
                    {console.log('last')}      
                </>
            )
        }
        
    }



    const HandleClick = (name,capital) => {
        //console.log(country)
        const wurl = 'http://api.weatherstack.com/current?access_key='+api+'&query='+capital
        console.log(wurl)
        WeartherHandle(wurl)
        setFilterName(name)
    }


    const nameToShow = country.filter(({name}) => name.toLowerCase().includes(filterName.toLowerCase()))
    const row = () => {
        if(nameToShow.length === 1){
            return(
                //console.log("Found One")
                //console.log({nameToShow})
                //countryDetails(nameToShow)
                nameToShow.map((country,i) => <div key = {i}>{ CountryDetails(country)} </div>)
            )
        } else if (nameToShow.length <= 10 && nameToShow.length > 1){
            return(
                nameToShow.map((country,i) => <div key = {i}>{country.name} <button  onClick={() => HandleClick(country.name,country.capital)} >show</button><br/></div>)
            )
        } else if (nameToShow.length > 10 && filterName.length > 0){
            return(
                <p>"Found too many"</p>
            )
        }
    }
       
       
    
    return(
        <div>
            <p>Hello</p>
            <Filter value={filterName} onChange={HandleFilter} />
            <div>{ row()}</div>
        </div>
    )
}

export default App