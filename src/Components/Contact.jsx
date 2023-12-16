import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-hero">
      <div class="contact-form">
        <h1>Contact Us</h1>
        <div className="form">
        <form action="#" method="post">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label for="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>
          <div className="button">
          <button type="submit">Submit</button>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
}
export default Contact;