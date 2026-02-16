import { useRef } from "react";
import "./Dinein.css";

export default function Dinein() {
    const dateRef = useRef(null);
    const timeRef = useRef(null);
    return (
        <div className="dine-page">

            <section
                className="hero"
                style={{
                    backgroundImage:
                        "url('dinein.png')"
                }}
            >
                <div className="hero-overlay">
                    <h1>DINE & WINE</h1>
                    <p>Exquisite Dining Experience</p>
                </div>
            </section>

            <section className="intro">
                <p>
                    Experience gourmet dining in a luxurious ambiance.
                    Savor the finest cuisines prepared by our world-class chefs.
                </p>
            </section>

            <section className="features">

                <div className="feature-card">
                    <img src="Dinner.png" />
                    <h3>Fine Dining Restaurant</h3>
                    <p>A culinary journey with international flavors.</p>
                    <button>View Menu</button>
                </div>

                <div className="feature-card">
                    <img src="Dinein-pool.png" />
                    <h3>Rooftop Lounge</h3>
                    <p>Sip cocktails with a stunning night skyline.</p>
                    <button>Learn More</button>
                </div>

                <div className="feature-card">
                    <img src="/Dinein-food.png" />
                    <h3>Chef’s Specials</h3>
                    <p>Signature dishes crafted to perfection.</p>
                    <button>Discover</button>
                </div>

            </section>



            <section className="reservation">
                <h2>Reserve Your Table</h2>

                <form>
                    <button type="button" onClick={() => dateRef.current.showPicker()}>Select Date</button>
                    <input type="date" ref={dateRef} style={{display:"none"}}/>

                    <button type="button" onClick={() => timeRef.current.showPicker()}>Select Time</button>
                    <input type="time" ref={timeRef} style={{display:"none"}}/>
                    <select>
                        <option>Guests</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>

                    <button>Book Now</button>
                </form>
            </section>
        </div>
    );
}
