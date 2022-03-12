import React from "react";
import {Link} from "react-router-dom";
import medusa from "../medusa-logo.svg"

export default function Home() {
    return (
        <div className="Home">
            <img src={medusa} className="home--logo" />
            <div className="home--landing text">
            <h1>One less hassle!</h1>
            <p>Your one stop Menstrual Duration and Symptom Analyzer. Users can easily mark their PMS symptoms and periods on their calendars, and the web-app predicts future cycles for them. The <Link to="FAQs"><b>FAQs section</b></Link> is a good start for those who know nothing about menses.</p>

            <Link to="/about" className="nav--link"><button className="home--more">I want the long story!</button></Link>
            </div>
        </div>
    )
}