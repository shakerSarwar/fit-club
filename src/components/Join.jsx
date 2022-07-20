import './Join.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Join() {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_ng1y621', 'template_k7q5jak', form.current, 'RK4cZOsVTlB19qivv')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className='Join' id='join-us'>
      <div className='left-j'>
        <hr />
        <div>
            <span className='stroke-text'>READY TO </span>
            <span> LEVEL UP</span>
        </div>
        <div>
        <span>YOUR BODY</span>
        <span className='stroke-text'> WITH US</span>
    </div>
      </div>

        <div className='right-j'>
        <form ref={form} className='email-container' >
            <input type='email' name='user_email' placeholder='Enter Your Email' />
            <button type='submit' className='btn btn-j' onSubmit={sendEmail}>Join Now</button>
        </form>
        </div>
    </div>
  )
}

export default Join
