import React from "react";
import './Contact.scss';

export const Contact = () => {
    return (  
        <div className="contact">
           <div className="contact-title">
                <h1>Contact me!</h1>
                <form>
                    <p className="prompt">Name:</p>
                    <input type="text" name="name" placeholder="Enter your name" required/>
                    <p className="prompt">Email Address:</p>
                    <input type="email" name="email" placeholder="Enter your email" required />
                    <p className="prompt">Message:</p>
                    <textarea className="big-box" name="message" rows="4" placeholder="Write your message here..." required></textarea>
                    <button className="send" type="submit">Send</button>
                </form>
            </div> 
        </div> 
    );
}