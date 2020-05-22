import React, { useState } from 'react';
import './SingleProject.css';
import Carousel from 'react-bootstrap/Carousel'
import img1 from '../../images/Projects/onlineFood1.png';
import img2 from '../../images/Projects/onlineFood2.png';
import img3 from '../../images/Projects/onlineFood3.png';

const SingleProject = (props) => {
    const { name, category, technologies, images, description, githubRipository, liveWebsite } = props.project;
    //carousel
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="container project mb-4 ">
            <div className="row align-items-center">
            <div className="col-md-7 pb-2">
                <h3><span className="orange-text">{name}</span></h3>
                <h5>Category: <span className="blue-text">{category}</span></h5>
                <p>{description}</p>
                <p><strong>Technologies used:</strong> <span className="blue-text">{technologies}</span></p>
                <a className="btn btn-sm mr-2 btn-secondary" target='_blank' href={githubRipository}>Github Rispository</a>
                <a className="btn btn-sm mr-2 btn-success" target='_blank' href={liveWebsite}>Visit Live Website</a>
            </div>
            <div className="col-md-5">
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={images.img1}
                            alt="First slide"
                        />                       
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={images.img2}
                            alt="Second slide"
                        />                       
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={images.img3}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            </div>
        </div>
    );
};

export default SingleProject;