import React, {useState, useEffect} from "react";
import axios from "axios"
import Navbar from "./Navbar";
import Country from "./Country";
import SearchForm from "./SearchForm";
import "./Country.css"

const All = () => {
    

    const [countries, setCountries] = useState([])
    const [search, setSearch] = useState("")
    const [copy, setCopy] = useState([])

    var list = []

    function checkForDuplicates(array){

       console.log(array)
       list = array
       
    }

    const handleSubmit = event => {
        event.preventDefault()
        // checkForDuplicates(countries)
        setSearch(event.target.value);
        console.log(search, "<- Search")
        const searchCountry = copy.filter(paiz => 
        paiz.name.toLowerCase().includes(search.toLowerCase()))
        
        setCopy(searchCountry);
      };
    useEffect(() => {
        axios
        .get('https://restcountries-v1.p.rapidapi.com/all')
        .then(response => {
            console.log(response.data)
            // console.log(countries)
            // setCountryList(countries)
            
            setCountries(response.data)
            console.log("Countries", countries)
            setCopy(countries)
            console.log("Copy = ", copy)
            console.log("API call has been made")
            // const searchCountry = response.data.filter(paiz => 
            //     paiz.name.toLowerCase().includes(search.toLowerCase()))
            
            // setCountries(searchCountry);
            
        })
        .catch(error => console.log(error))
    }, [])
    return(
        <div>
            <Navbar/>
            <div className="allSearch">
            <form className="searchForm">
            <input
                type="text"
                name="from"
                value={search}
                placeholder=" Search "
                onChange={handleSubmit}
                className="from"
            />
            <button type="submit">Search</button>
            </form>
        </div>
            <div className="countryList">
            {copy.map(country => {
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
        {/* <div className="country">
            <h2 className="countryName">Genovia</h2>
            <h4 className="countryDetails">Capital: IDK</h4>
            <h4 className="countryDetails">Currency: Money</h4>
        </div>

        <div className="country">
            <h2 className="countryName">AFGHANISTAN</h2>
            <h4 className="countryDetails">Capital: IDK</h4>
            <h4 className="countryDetails">Currency: Money</h4>
        </div> */}
            
        </div>
    )
}

export default All;