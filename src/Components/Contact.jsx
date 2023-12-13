import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="container">
      <h1>Contact Us</h1>
      <p>Lorem ipsum</p>

      <div id="contact-container">
        <div className="contact-info">
          <h4>
            Contact Information
            </h4>
          <p>text</p>
          <div className="icon-text">
            <i className="icon"></i>
            <span>text</span>
          </div>
          <div className="social-media">
            <a href="#" className="icon-circle">
              <i className="icon"></i>
            </a>
          
          </div>
        </div>
        <form>

        </form>
      </div>
    </div>
  );
}

export default Contact;
