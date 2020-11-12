import React, {useState} from "react";
import Trip from "./Trip";
import "./Body.css";


const TravelForm = () => {

    var trip = {start:"", end:""};

    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [plan, setPlan] = useState([]);
    const [itinerary, setItinerary] = useState([])

    const handleSubmit = e => {
        e.preventDefault();
        trip.start = from
        trip.end = to
        console.log("Trip ", trip)
        itinerary.push(trip)
        console.log(itinerary, "Itinerary")

        setFrom(to)
        setTo("")
        setPlan("")

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