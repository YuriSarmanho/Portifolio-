import React from "react";
import "./Contact.css";
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get in Contact</h5>
      <h2>Contact me </h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>yuri.sarmanho@hotmail.com</h5>
            <a target='_blank' href="mailto: yuri.sarmanho@hotmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine/>
            <h4>Messenger</h4>
            <h5>hello world</h5>
            <a target='_blank' href="#">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp/>
            <h4>Whatsapp</h4>
            <h5></h5>
            <a target='_blank' href="http://api.whatsapp.com/send?phone=55091991780812">Send a message</a>
          </article>
        </div>
        {/* END OF THE CONTACT OPTIONS */}
        <form action="">
          <input type="text" name="name" placeholder="Your full name" required />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea name="message" rows="7" placeholder="Your message" required/>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
