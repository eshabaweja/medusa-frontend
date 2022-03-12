import React from "react";

export default function Card(props){

    return(    
    <div className="Card">
        <img className="card--image" src={props.img} />
        <h2 className="card--title">{props.name}</h2>
        <p className="card--text text">{props.gist}</p>
    </div>
    )
}