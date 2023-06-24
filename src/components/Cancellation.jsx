import React from "react";
import Header from "./Header"
import Footer from "./Footer";

function Cancellation(){
    return(
        <>
        <style>
            {`
                .maindiv{
                    margin:6rem 8rem;
                    font-size:20px;
                    text-align:justify;
                }
                .cptxt{
                    margin-bottom:1rem;
                }
            `}
        </style>
        <Header />
        <div className="maindiv">
            <h3 className="heading">Cancellation Policy:</h3>
            <ol className="cp">
                <li className="cptxt">You can cancel the pre-order in the My Orders tab given at the top of the website.</li>
                <li className="cptxt">The applicable refund amount will be credited to you within 7 working days.</li>
                <li className="cptxt">Cancellation of the order only applies on pre-ordered meals where the customer has given advance to book their table and meal.</li>
                <li className="cptxt">The complete amount taken in advance will be refunded if the customer cancels the order 15 minutes before the provided arrival time.</li>
                <li className="cptxt">If the customer cancels the order 0-15 minutes before the provided arrival time, no refund will be made.</li>
                <li className="cptxt">If a customer doesn’t visit the Restaurant after booking then no refund will be made.</li>
                <li className="cptxt">No refund will be made in case of service time issues. Refunds will only be made in case of cancellation of order in the time zone mentioned above or in case of order rejection by the partner Restaurant.</li>
                <li className="cptxt">DoT Restros is not responsible for the issues caused due to natural calamity.</li>
            </ol>
        </div>
        <Footer />
        </>
    )
}

export default Cancellation