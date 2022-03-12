import React from "react";
import Card from "../components/Card";
import data from '../components/data';

export default function Features() {

    const cards = data.map(item => (
        <Card img={item.imageUrl}
            name={item.title}
            gist={item.gist} />)
    )

    return (
        <div className="Features">
            <h1 className="page--title">Features of Medusa</h1>
            <div className="Cards">
                {cards}
            </div>
        </div>
    )
}