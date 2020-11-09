import React, {useState, useEffect} from "react";
import axios from "axios"


const Body = () => {
    
    const [countries, setCountries] = useState([])

    useEffect(() => {
        axios
        .get('https://restcountries-v1.p.rapidapi.com/all')
        .then(response => {
            console.log(response)
            setCountries(response)
        })
    }, [])

    return(
        <div>
            Look at these possible destinations
        </div>
    )
}

export default Body;