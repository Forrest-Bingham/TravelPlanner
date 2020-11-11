import React, {useState, useEffect} from "react";
import axios from "axios"
import Navbar from "./Navbar";
import Country from "./Country";
import "./Country.css"

const All = () => {
    
    const [countries, setCountries] = useState([])

    // useEffect(() => {
    //     axios
    //     .get('https://restcountries-v1.p.rapidapi.com/all')
    //     .then(response => {
    //         console.log(response.data)
    //         setCountries(response.data)
    //     })
    // }, [])

    return(
        <div>
            <Navbar/>
            <div className="countryList">
            {countries.map(country => {
                return(
                    <Country
                    key={country.numericCode}
                    name={country.name}
                    capital={country.capital}
                    currencies={country.currencies}
                    />
                )
            })}
            </div>
        <div className="country">
            <h2 className="countryName">Genovia</h2>
            <h4 className="countryDetails">Capital: IDK</h4>
            <h4 className="countryDetails">Currency: Money</h4>
        </div>

        <div className="country">
            <h2 className="countryName">AFGHANISTAN</h2>
            <h4 className="countryDetails">Capital: IDK</h4>
            <h4 className="countryDetails">Currency: Money</h4>
        </div>
            
        </div>
    )
}

export default All;