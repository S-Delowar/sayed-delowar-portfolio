import React from 'react';
import './RecentProduct.css';
import projectImg1 from '../../images/ProjectImages/img12.png';
import projectImg2 from '../../images/ProjectImages/img33.png';
import projectImg3 from '../../images/ProjectImages/img21.png';
import { Link } from 'react-router-dom';

const RecentProducts = () => {
    return (
        <div>
            <div className="project-section">
                <div className="text-center section-header">
                <h1>Recent Projects</h1>
                </div>
                <div className="card-deck text-dark">
                    <div className="card bg-dark text-light mb-4">
                        <img className="card-img-top" src={projectImg1} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title gold-text">Online Food Services</h5>
                            <h6 className= "green-yellow-text">(Full-Stack)</h6>
                            <p className="card-text">
                            <strong>Technologies used:</strong> React, JavaScript(ES6), Bootstrap 4 for front-end; Node.js, Express, Heroku for back-end; Firebase for hoisting and authentication; Stripe as payment method; MongoDB for database.
                            </p>
                        </div>
                        
                        <a href="https://github.com/S-Delowar/hot-red-onion-project" target="_blank" className="btn btn-secondary ml-2 mr-2 mb-2">Github Repository</a>
                            <a href="https://red-onion-online-food.web.app/" target="_blank" className="btn btn-success ml-2 mr-2 mb-2">Live Website</a>
                    </div>
                    <div className="card bg-dark mb-4 text-light">
                        <img className="card-img-top" src={projectImg2} alt="Card image cap" />
                        <div className="card-body bg-dark text-white">
                            <h5 className="card-title gold-text">Online Doctor’s Portal</h5>
                            <h6 className= "green-yellow-text">(Full-Stack)</h6>
                            <p className="card-text">
                                <strong>Technologies used:</strong> React, JavaScript(ES6), Bootstrap 4 and Material UI for front-end; Node.js, Express, for back-end; MongoDB for database.
                            </p>
                        </div>
                        
                        <a href="https://github.com/S-Delowar/doctor-portal-front-end" target="_blank" className="btn btn-secondary ml-2 mr-2 mb-2">Github Repository</a>
                            <a href="https://doctors-portal1.firebaseapp.com/"  target="_blank" className="btn btn-success ml-2 mr-2 mb-2">Live Website</a>
                    </div>
                    <div className="card bg-dark mb-4 text-light">
                        <img className="card-img-top" src={projectImg3} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title gold-text">Ema-john Online Products Store</h5>
                            <h6 className= "green-yellow-text">(Full-Stack)</h6>
                            <p className="card-text">
                            <strong>Technologies used:</strong> React, JavaScript(ES6), Bootstrap 4 for front-end; Node.js, Express, Heroku for back-end; Firebase for hoisting and authentication; Stripe as payment method; MongoDB for database. 
                            </p>
                        </div>
                        <a href="https://github.com/S-Delowar/ema-john-simple" target="_blank"  className="btn btn-secondary ml-2 mr-2 mb-2">Github Repository</a>
                            <a href="https://ema-john-practice.web.app/" target="_blank" className="btn btn-success ml-2 mr-2 mb-2">Live Website</a>
                    </div>
                </div >            
                <Link to="/projects" className=" view-all-btn">
                    <button className="btn btn-danger full-width mt-4">View All Projects</button>
                </Link>
            </div>
        </div>
    );
};

export default RecentProducts;