import { React, useState, useEffect } from 'react'
import './DigimonContainer.css'

const DigimonContainer = () => {

    // digimonData is the state but setDigimonData is a function to change the state

    const [digimonData, setDigimonData] = useState([])

    // Using the useEffect hook to get data from an API
    // useEffect for 'side effects' lol
    // useEffect can take up to two arguments 
    // Runs every time it is rendered
    // Good to add a function to the end of useEffect to save memory

    useEffect(() => {
        // fetch is built into the browser to access APIs
        // fetch uses promises
        // A promise is something that will either be 'kept' (completed) or 'broken' (not completed)
        // A promise uses asynchronous programming
        // Asynchronous code carries out a task but can run other code or do other stuff at the same time
        // JSON looks like objects/dictionaries - key value pairs but it's a bit different

        // .then((response)) - fetches and returns a response
        // .then((data)) - gives the actual data
        // That data is stored in the useState setDigimonState function 


        fetch('https://digimon-api.vercel.app/api/digimon')
            .then((response) => response.json())
            .then((data) => {
                setDigimonData(data);
            })
            
    }, []);
    return (
        <>
            <h1>Digimon List</h1>
            <ul>
            {/* Grabbing that digimonData from the API URL and map is used to loop through each item in the JSON, then gives a new array when the function is called */}
                {digimonData.map((digimon) => (
                    <li key={digimon.name}>{digimon.name}</li>
                ))}
            </ul>
        </>
    )
}

export default DigimonContainer


