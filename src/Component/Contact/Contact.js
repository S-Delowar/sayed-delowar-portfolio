import React from 'react';
import './Contact.css';
import { useForm } from 'react-hook-form';
import { GrFacebook } from 'react-icons/gr';
import { GoMarkGithub } from 'react-icons/go';
import { GrLinkedin } from 'react-icons/gr';

const Contact = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        console.log(data);

        fetch('url', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(response => {
                if (response.status === 'success') {
                    alert('Message sent')
                } else {
                    alert('Message failed to send')
                }
            })
    };

    return (
        <div className="container contact-page">
            <div className=" row row align-items-center ">
                <div className="col-md-6">
                    <h3>Contact with me:</h3>
                    <form className="contactForm" onSubmit={handleSubmit(onSubmit)}>
                        <input name="name" ref={register({ required: true })} placeholder="Your Name" />
                        {errors.name && <small className="error">Name is required</small>}

                        <input name="email" ref={register({ required: true })} placeholder="Your Email" />
                        {errors.email && <small className="error">Email is required</small>}

                        <textarea name="message" ref={register({ required: true })} placeholder="Type your message" />
                        {errors.message && <small className="error">Message is required</small>}

                        <input type="submit" className="btn btn-success" value="Send" />
                    </form>
                </div>
                <div className="col-md-6 pt-4">
                    <h5>You can also contact me with-</h5>
                    <div>
                        <a className="btn btn-primary mr-2 mt-2 text-center" href=""><GrLinkedin /> Linkedin</a>
                        <a className="btn btn-secondary mr-2 mt-2" href=""><GoMarkGithub /> Github</a>
                        <a className="btn btn-primary mt-2" href=""><GrFacebook /> Facebook</a>
                    </div>
                    <div className="mt-4">
                        <p><strong>Address:</strong><address>Room-311, Titumir Hall, <br/>Bangladesh University of Engineering and Technology,<br/>Dhaka-1000, Bangladesh.</address></p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;