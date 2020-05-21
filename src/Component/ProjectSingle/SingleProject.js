import React from 'react';

const SingleProject = (props) => {
    const { name, category, technologies, images, description } = props.project;
    return (
        <div className="card mb-4">
            <h4>{images.img1}</h4>
            <h3>{name}</h3>
            <h5>Catagory: {category}</h5>
            <p>{description}</p>
            <p><strong>Technologies used for this project:</strong> {technologies}</p>
            <button className="btn btn-primary">Checkout Github Rispository</button>
            <button className="btn btn-success">Visit Live Website</button>
        </div>
    );
};

export default SingleProject;