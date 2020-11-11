import React from "react";
import "./Country.css"

const Country = (props) => {

    return (
        <div className="country">
            <h2 className="countryName">{props.name}</h2>
            <h4 className="countryDetails">Capital: {props.capital}</h4>
            <h4 className="countryDetails">Currency: {props.currencies}</h4>
        </div>
    )
}

export default Country