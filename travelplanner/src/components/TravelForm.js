import React, {useState} from "react";

const TravelForm = () => {

    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [plan, setPlan] = useState([]);
    const [itinerary, setItinerary] = useState([])

    const handleSubmit = e => {
        e.preventDefault();
    }

    return(
        <div>
        <form onSubmit={handleSubmit} className="form">
            <input
                type="text"
                name="from"
                value={from}
                placeholder="From"
                onChange={e => setFrom(e.target.value)}
            />
            <input
                type="text"
                name="to"
                value={to}
                placeholder="To"
                onChange={e => setTo(e.target.value)}
            />
        </form>
        </div>
    )
}

export default TravelForm;