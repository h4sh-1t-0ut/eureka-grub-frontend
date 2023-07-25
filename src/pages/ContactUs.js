import React from 'react'
import "../styles/ContactUs.css"


const ContactUs = () => {

  return (
    <div className="contact">
    <div
        className="leftSide"
    ></div>
    <div className="rightSide">
        <h1> Contact Me</h1>

        <form id="contact-form" >
        <label htmlFor="name">Full Name</label>
        <input name="name" placeholder="Enter full name..." type="text" />

        <label htmlFor="email">Email</label>
        <input name="email" placeholder="Enter email..." type="email" />

        <label htmlFor="message">Message</label>
        <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
        ></textarea>
        <a href = "mailto: delta2023hashitout@gmail.com">Send Email</a>
        </form>
    </div>
    </div>
  )
}

export default ContactUs