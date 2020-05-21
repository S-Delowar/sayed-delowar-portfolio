import React from 'react';

const SingleBlog = (props) => {
    const { image, title, description, blogLink } = props.blog;
    return (
        <div className="card">
            <h2>{image}</h2>
            <h3>{title}</h3>
            <p>{description}</p>
            
        </div>
    );
};

export default SingleBlog;