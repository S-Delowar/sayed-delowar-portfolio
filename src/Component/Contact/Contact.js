import React from 'react';
import './Contact.css';
import { useForm } from 'react-hook-form';

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

                    <input type="submit" className="btn btn-primary" />
                </form>
            </div>
            <div className="col-md-6">
            hello
            </div>
        </div>
        </div>
    );
};

export default Contact;