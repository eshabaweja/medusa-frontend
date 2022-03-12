import React from "react";
import faq from '../images/undraw_faq.svg'

export default function FAQs() {
    return (
        <div className="FAQs">
            <h1 className="page--title">Frequently Asked Questions</h1>
            <img className="faqs--img" src={faq} alt="Error displaying image" />
        </div>
    )
}