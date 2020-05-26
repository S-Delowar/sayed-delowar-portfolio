import React from 'react';
import './Home.css';
import img1 from '../../images/sayed.png'
import RecentProducts from '../RecentProducts/RecentProducts';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container home-page">
            <div className="row align-item-center">
                <div className="col-md-6 text-light">
                    <p>Hi There,</p>
                    <h3>I'm <span className="gold-text">SAYED DELOWAR</span></h3>
                    <h5><span className="green-yellow-text">Junior Web Developer</span></h5>
                   
                    <p>
                        Expert in developing Single Page Aplication(SPA) using React and Node.js. I've a good knowledge in Javascript, ES6, Bootstap-4 and also comfortable with Material UI, Express.js and MongoDB.
                    </p>
                    <p>
                        Client stisfaction is my pride. Love to develop modern and impressive websites for my clients and always responsible for the job.
                    </p>
                    <a target="_blank" href="https://www.linkedin.com/in/sayed-delowar-1894111a3/" className="btn btn-danger mr-2 mb-2">HIRE ME</a>
                    
                    <Link to="/about">
                    <button className="btn btn-primary mb-2">MORE ABOUT ME</button>
                    </Link>
                </div>
                <div className="col-md-6">
                   <img src={img1} alt=""/>
                </div>
            </div>

            <div>
                <RecentProducts></RecentProducts>
            </div>
        </div>
    );
};

export default Home;