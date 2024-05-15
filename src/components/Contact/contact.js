import React, { useRef } from 'react';
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'; 
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_wx7t4vf', 'template_q6441mm', form.current, 'z00UKkVGTOEdZwzDR')
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert('email sent');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id='contactpage'>
        <div id='contact'>
          <h1 className='contactpagetitle'>Contact Me</h1>
          <span className='contactdesc'>please contact me by filling this form</span>

          <form className='contactform' ref={form} onSubmit={sendEmail}>
            <input type='text' className='name' placeholder='your name' name='your_name' />
            <input type='email' className='mail' placeholder='your email' name='your_email' />
            <textarea className='msg' name='message' rows='5' placeholder='your message'></textarea>
            <button type='submit' value='Send' className='submitbtn'>
              Submit
            </button>
            <div className='links'>
            <a href='https://www.linkedin.com/in/tejeswar-rao-boora-6b6174229' target='_blank' className='link'>
                <FontAwesomeIcon icon={faLinkedin} style={{ color: '#0077B5' }} fontSize='3rem' />
              </a>
              <a href='https://github.com/tejeswar2' target='_blank'  className='link'>
                <FontAwesomeIcon icon={faGithub} style={{ color: '#171515' }} fontSize='3rem'/>
              </a>
            </div>
          </form>
        </div>
    </section>
  );
};
