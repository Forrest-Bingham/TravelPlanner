import React, {useState, useEffect} from "react";
import axios from "axios"
import Trip from "./Trip";
import "./Body.css";


const TravelForm = () => {

    var trip = {start:"", end:""};

    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [itinerary, setItinerary] = useState([])

   
    const [searchTo, setSearchFrom] = useState("")

    // useEffect(()=> {

    //     axios
    //     .get('https://restcountries-v1.p.rapidapi.com/all')
    //     .then(response => {
    //         console.log(response.data);
    //         const place = response.data.filter(paiz =>
    //             paiz.name.toLowerCase().includes(search.toLowerCase()))
            
    //         setFrom(place)
    //         // if (from != null){
    //         //     setTo(place)
    //         // }
    //         // else {
    //         //     setFrom(place)
    //         // }
    //         console.log(from, "<-- From")
    //         // console.log(to, "<-- To")
    //     })
    //     .catch(error => console.log("Error fetching API", error))
    // }, [search])

    const handleSubmit = e => {
        e.preventDefault();
        // setSearch(e.target.value)
        // console.log(search, "<- Search Term")
        trip.start = from
        trip.end = to
        console.log("Trip ", trip)
        itinerary.push(trip)
        console.log(itinerary, "Itinerary")

        setFrom(to)
        setTo("")

    }

    return(
        <div className="planner">
        <form onSubmit={handleSubmit} className="form">
            <input
                type="text"
                name="from"
                value={from}
                placeholder=" From"
                onChange={e => setFrom(e.target.value)}
                className="from"
            />
            <input
                type="text"
                name="to"
                value={to}
                placeholder=" To"
                onChange={e => setTo(e.target.value)}
                className="to"
            />
            <button type="submit" className="formButton">Book It</button>
        </form>
        <div className="itinerary">
            <h2>Itinerary</h2>
            {itinerary.map(flight => (
                <Trip
                key={flight.start}
                start={flight.start}
                end={flight.end}
                />
            ))}
        </div>
        </div>
    )
}

export default TravelForm;