import "./Contact.css";

const Contact = () => {
    return (
        <div className="contactpage-wrapper">

            <div className="contactpage-card">
                <h1>Contact Us</h1>
                <p>We’d love to hear from you</p>

                <div className="contactpage-info">
                    <div className="contactpage-item">
                        📞 <span>+91 98765 43210</span>
                    </div>

                    <div className="contactpage-item">
                        ✉️ <span>info@oceanpearl.com</span>
                    </div>

                    <div className="contactpage-item">
                        📍 <span>Bangalore, India</span>
                    </div>
                </div>

                <button className="contactpage-btn">
                    Get In Touch
                </button>
            </div>

        </div>
    );
};

export default Contact;
