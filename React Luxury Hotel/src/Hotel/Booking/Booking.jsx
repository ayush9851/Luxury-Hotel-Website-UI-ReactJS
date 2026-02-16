import "./Booking.css";
import React from "react";

const Booking = () => {
    return (
        <div className="bookingpage-container">

            <section className="bookingpage-hero">
                <div className="bookingpage-overlay">
                    <img src="booking-bg.png" alt="" className="bookimg" />
                </div>

                <center><div className="bookingpage-content">
                    <h1>Book Your Stay</h1>
                    <p>
                        Choose your dates, select guests, and experience luxury like never before.
                    </p>
                    <div className="bookingpage-card">

                        <div className="bookingpage-row">
                            <div className="bookingpage-field">
                                <label>Check In</label>
                                <input type="date" />
                            </div>

                            <div className="bookingpage-field">
                                <label>Check Out</label>
                                <input type="date" />
                            </div>
                        </div>

                        <div className="bookingpage-row">
                            <div className="bookingpage-field full">
                                <label>Guests</label>
                                <select>
                                    <option>Choose Below</option>
                                    <option>1 Guest</option>
                                    <option>2 Guests</option>
                                    <option>3 Guests</option>
                                    <option>4 Guests</option>
                                </select>
                            </div>
                        </div>

                        <button className="bookingpage-btn">
                            Check Availability
                        </button>

                    </div>
                </div></center>
            </section>

        </div >
    );
};

export default Booking;
