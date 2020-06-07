import React, { useState } from 'react';
import './Contact.css';
import { useForm } from 'react-hook-form';
import { GrFacebook } from 'react-icons/gr';
import { GoMarkGithub } from 'react-icons/go';
import { GrLinkedin } from 'react-icons/gr';
import Axios from 'axios';

const Contact = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [buttonText, setButtonText] = useState('Send Message');
    const [sent, setSent] = useState(false);
    
    const onSubmit = (data, e) => {
        console.log(data);
        setButtonText('...sending');

        Axios.post('http://localhost:4444/sendMessage', data)
        .then(res => {
            setSent(true);
            e.target.reset()
            alert('Message sent')
            console.log('sending success')
            setButtonText('Send Message')
        })
        .catch(() => {
            console.log('Message not sent')
            alert('Message not sent. Try again')
            setSent(true);
            e.target.reset()
            setButtonText('Send Message')
        })
    };

    return (
        <div className="container contact-page">
            <div className=" row row align-items-center ">
                <div className="col-md-6 pb-4">
                    <h4 className="text-success">Tell me how can I help you:</h4>
                    <form className="contactForm" onSubmit={handleSubmit(onSubmit)}>
                        <input name="name" ref={register({ required: true })} placeholder="Your Name" />
                        {errors.name && <small className="error">Name is required</small>}

                        <input name="email" ref={register({ required: true })} placeholder="Your Email" />
                        {errors.email && <small className="error">Email is required</small>}

                        <textarea name="message" ref={register({ required: true })} placeholder="Type your message" />
                        {errors.message && <small className="error">Message is required</small>}

                        <input type="submit" className="btn btn-danger" value={buttonText} />
                    </form>
                </div>
                <div className="col-md-6  also-find ">
                    <h5>You also find me in -</h5>
                    <div>
                        <a className="btn btn-primary mr-2 mt-2 " target="_blank" href="https://www.linkedin.com/in/sayed-delowar-1894111a3/"><GrLinkedin /> Linkedin</a>
                        <a className="btn btn-secondary mr-2 mt-2" target="_blank" href="https://github.com/S-Delowar"><GoMarkGithub /> Github</a>
                        <a className="btn btn-primary mt-2" target="_blank" href="https://www.facebook.com/S.Delowar/"><GrFacebook /> Facebook</a>
                    </div>
                    <div className="mt-4">
                        <p><strong>Address:</strong><br/>Room-311, Titumir Hall, <br/>Bangladesh University of Engineering and Technology,<br/>Dhaka-1000, Bangladesh.</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;