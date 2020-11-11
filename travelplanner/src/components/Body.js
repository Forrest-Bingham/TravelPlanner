import React, {useState, useEffect} from "react";
import axios from "axios";
import "./Body.css";
import TravelForm from "./TravelForm";

const Body = () => {
    

    return(
        <div className="body">
            <div className="Search">
                <h2>Create your travel plan</h2>
                <TravelForm/>
            </div>
        </div>
    )
}

export default Body;