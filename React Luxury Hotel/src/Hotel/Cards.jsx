import React from "react";
import './Cards.css'

function Cards() {
    return (
        <div className="cards-section">

            <center><h1>-----Why Choose Us-----</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia quo doloremque, numquam dolorum, optio laudantium amet facere </p>
            </center><br /><br />

            <div className="cards">

                <div className="card">
                    <img src="Night Room.png" />
                    <h3>LUXURY ROOMS</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                </div>

                <div className="card">
                    <img src="fine-dine.png" />
                    <h3> FINE DINE</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>

                <div className="card">
                    <img src="infinity-pool.png" />
                    <h3>INFINITY POOL</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                </div>
            </div>

        </div>

    );
}

export default Cards;
