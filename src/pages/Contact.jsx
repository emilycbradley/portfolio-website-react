import { useState } from "react";
import "./Contact.css";

export default function Contact() {
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");

  return (
    <div className="contact-container">
        <div className="contact-header">
         <h1>Contact</h1>
         <p>Please contact with any project ideas or inquiries.</p>
        </div>
        <form 
            className="contact-form" 
            //could use formspree, action="formspree url"
            method="POST">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button type="submit">Send Message</button>
        </form>
    </div>
  );
}