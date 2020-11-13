import React, {useState, useEffect} from "react";
import axios from "axios"

const SearchForm = () => {

    const [countries, setCountries] = useState([])
    const [search, setSearch] = useState("")

    const handleInputChange = event => {
        setSearch(event.target.value);
      };

      useEffect(() => {
        axios
        .get('https://restcountries-v1.p.rapidapi.com/all')
        .then(response => {
            console.log(response.data)
            setCountries(response.data)
            // setCountries(response.data)
            const searchCountry = response.data.filter(paiz => 
                paiz.name.toLowerCase().includes(search.toLowerCase()))
            
            setCountries(searchCountry);
        })
        .catch(error => console.log(error))
    }, [search])

    return (
        <div className="allSearch">
            <form className="searchForm">
            <input
                type="text"
                name="from"
                value={search}
                placeholder=" Search "
                onChange={handleInputChange}
                className="from"
            />
            </form>
        </div>
    )
}
export default SearchForm;