import React from "react";

const Trip = (props) => {

    return(
    <div className="trip">
        <h4>{props.start} {'-->'} {props.end}</h4>
    </div>
    )
    
}
export default Trip;