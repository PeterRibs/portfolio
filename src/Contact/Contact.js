import React from "react";
import "../Styles/Contact.scss";

function Contact() {
    return (
        <section id="contact">
            <div>
                <h2 className="section-title">Contact</h2>
                <div className="contact-wrapper load-hidden">
                    <div className="contact-wrapper__text">
                        <p>Phone: +55 61 981234517</p>
                        <p>E-mail: pedrohenriquelr@gmail.com</p>
                        <div className="social-links">
                            <a rel="noreferrer" href={"https://www.linkedin.com/in/pedro-ribeiro-8b78a518b/"} target="_blank">
                                <i className="fa fa-linkedin fa-inverse font"></i>
                            </a>
                            <a rel="noreferrer" href={"https://github.com/PeterRibs"} target="_blank">
                                <i className="fa fa-github fa-inverse font"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Contact;


