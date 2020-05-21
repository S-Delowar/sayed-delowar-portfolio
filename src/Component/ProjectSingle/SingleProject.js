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
        <div className="project mb-4 d-flex">
            <div className="col-7">
                <h3>{name}</h3>
                <h5>Catagory: {category}</h5>
                <p>{description}</p>
                <p><strong>Technologies used for this project:</strong> {technologies}</p>
                <a className="btn btn-sm mr-2 btn-secondary" target='_blank' href={githubRipository}>Github Rispository</a>
                <a className="btn btn-sm mr-2 btn-success" target='_blank' href={liveWebsite}>Visit Live Website</a>
            </div>
            <div className="col-5">
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img1}
                            alt="First slide"
                        />
                        
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img2}
                            alt="Second slide"
                        />

                        
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img3}
                            alt="Third slide"
                        />
                        </Carousel.Item>
    </Carousel>
            </div>
        </div>
    );
};

export default SingleProject;