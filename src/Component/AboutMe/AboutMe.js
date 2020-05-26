import React from 'react';
import './AboutMe.css';
import Skills from '../Skills/Skills';
import projectImg1 from '../../images/ProjectImages/img12.png';
import projectImg2 from '../../images/ProjectImages/img33.png';
import projectImg3 from '../../images/ProjectImages/img52.png';
import blogImg1 from '../../images/BlogImages/blog2.png';
import blogImg2 from '../../images/BlogImages/img3.png';
import blogImg3 from '../../images/BlogImages/blog4.png';
import { Link } from 'react-router-dom';


const AboutMe = () => {
    return (
        <div className="container about-page">
            <div className="row align-items-center">
                <div className="col-md-5 text-center">
                    <h1 className="gold-text">About Me</h1>
                </div>
                <div className="col-md-7">
                    <p>
                        Me, Sayed Delowar working as a junior web developer. <br />
                    I have come in the web development world only for my passion. I love creating and developing websites more than any other works.
                    </p>
                    <p>
                        Now I am working as a freelance web developer and looking forward to bringing my passion to a full-time role.
                    </p>
                </div>
            </div>
            <div className="skill-section">
                <Skills></Skills>
            </div>
            <div className="project-section">
                <div className="text-center section-header">
                    <h1>Recent Projects</h1>
                </div>
                <div className="card-deck text-dark">
                    <div className="card bg-dark text-white">
                        <img className="card-img-top" src={projectImg1} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title gold-text">Online Food Services</h5>
                            <h6 className="green-yellow-text">(Full-Stack)</h6>
                            <p className="card-text">
                                <strong>Technologies used:</strong> React, JavaScript(ES6), Bootstrap 4 for front-end; Node.js, Express, Heroku for back-end; Firebase for hoisting and authentication; Stripe as payment method; MongoDB for database.
                            </p>
                        </div>

                        <a href="https://github.com/S-Delowar/hot-red-onion-project" target="_blank" className="btn btn-secondary ml-2 mr-2 mb-2">Github Repository</a>
                        <a href="https://red-onion-online-food.web.app/" target="_blank" className="btn btn-success ml-2 mr-2 mb-2">Live Website</a>
                    </div>
                    <div className="card bg-dark">
                        <img className="card-img-top" src={projectImg2} alt="Card image cap" />
                        <div className="card-body bg-dark text-white">
                            <h5 className="card-title gold-text">Online Doctor’s Portal</h5>
                            <h6 className="green-yellow-text">(Full-Stack)</h6>
                            <p className="card-text">
                                <strong>Technologies used:</strong> React, JavaScript(ES6), Bootstrap 4 and Material UI for front-end; Node.js, Express, for back-end; MongoDB for database.
                            </p>
                        </div>

                        <a href="https://github.com/S-Delowar/doctor-portal-front-end" target="_blank" className="btn btn-secondary ml-2 mr-2 mb-2">Github Repository</a>
                        <a href="https://doctors-portal1.firebaseapp.com/" target="_blank" className="btn btn-success ml-2 mr-2 mb-2">Live Website</a>
                    </div>
                    <div className="card bg-dark text-light">
                        <img className="card-img-top" src={projectImg3} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title gold-text">Ema-john Online Products Store</h5>
                            <h6 className="green-yellow-text">(Full-Stack)</h6>
                            <p className="card-text">
                                <strong>Technologies used:</strong> React, JavaScript(ES6), Bootstrap 4 for front-end; Node.js, Express, Heroku for back-end; Firebase for hoisting and authentication; Stripe as payment method; MongoDB for database.
                            </p>
                        </div>
                        <a href="https://github.com/S-Delowar/ema-john-simple" target="_blank" className="btn btn-secondary ml-2 mr-2 mb-2">Github Repository</a>
                        <a href="https://ema-john-practice.web.app/" target="_blank" className="btn btn-success ml-2 mr-2 mb-2">Live Website</a>
                    </div>
                </div>
                <Link to="/projects" className=" view-all-btn">
                    <button className="btn btn-danger full-width mt-4">View All Projects</button>
                </Link>
            </div>
            <div className="blog-section">
                <div className="text-center section-header">
                    <h1>Recent Blogs</h1>
                </div>
                <div className="card-deck">
                    <div className="card bg-dark text-white">
                        <img className="card-img-top" src={blogImg1} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title green-yellow-text">Problem Solving | JavaScript Interview</h5>
                            <p className="card-text">10 common JS questions and solutions you must know in 2020 - 1. Implement enqueue and dequeue using only two stacks. 2. Write a “mul” function which will properly when invoked as below syntax - 3. What do you mean by a callback function.</p>
                        </div>
                        <a target="_blank" href="https://medium.com/@sayed.buet97/problem-solving-javascript-interview-d70f033352d6" className="btn btn-success ml-2 mr-2  mb-2">Read More</a>
                    </div>
                    <div className="card bg-dark text-white">
                        <img className="card-img-top" src={blogImg2} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title green-yellow-text">React-Hooks</h5>
                            <p className="card-text">A Hook is a special function that lets you “hook into” React features. For example, useState is a Hook that lets you add React state to function components. There are some react-hooks with example that you must know -</p>
                        </div>
                        <a target="_blank" href="https://medium.com/@sayed.buet97/react-hooks-9e70ffd1c6b8" className="btn btn-success ml-2 mr-2 mb-2">Read More</a>
                    </div>
                    <div className="card bg-dark text-white">
                        <img className="card-img-top" src={blogImg3} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title green-yellow-text">React Interview Preparation</h5>
                            <p className="card-text">10 most common questions with answers for React Interview - 1. What is the difference between Element and Component? Ans: Element is plain object that describes what we want to show on the screen in terms of DOM nodes or other components.</p>
                        </div>
                        <a target="_blank" href="https://medium.com/@sayed.buet97/react-interview-preparation-5438f09a88b4" className="btn btn-success ml-2 mr-2 mb-2">Read More</a>
                    </div>
                </div>
                <Link to="/blog" className=" view-all-btn">
                    <button className="btn btn-danger full-width mt-4">View All Blogs</button>
                </Link>
            </div>
        </div>
    );
};

export default AboutMe;