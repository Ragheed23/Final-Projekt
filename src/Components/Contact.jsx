import React from 'react'
import "./Contact.css"; 

function Contact() {
  return (
    <div className="contact-hero">
    <form>
      <div className="form-group">
        <label>Name *</label>{" "}
        <input
          type="text"
          class="form-control"
          name="text_name"
          placeholder="Placeholder Textfeld"
          required="required"
        />
      </div>
      <div className="form-group">
        <label>Nachname *</label>{" "}
        <input
          type="text"
          class="form-control"
          name="text_name"
          placeholder="Placeholder Textfeld"
          required="required"
        />
      </div>
      <div className="form-group-3">
        <label> E-Mail *</label>{" "}
        <input
          type="email"
          class="form-control"
          name="email_name"
          placeholder="her your email"
        />
      </div>
      <div className="form-group-4">
        <label>Beschriftung Textarea</label>
        <textarea
          class="form-control"
          name="textarea_name"
          placeholder="please here your message"
        ></textarea>
      </div>
      <div class="form-group-5">
        <input
          type="submit"
          class="btn btn-primary"
          name="button_name"
          value="Senden"
        />
      </div>
      <small>Felder markiert mit * sind Pflichtfelder.</small>
    </form>
  </div>

  
    
  )
};

export default Contact