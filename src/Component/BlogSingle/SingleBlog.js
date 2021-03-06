import React from 'react';
import './SingleBlog.css';
import img1 from '../../images/BlogImages/blog1.png';


const SingleBlog = (props) => {
    const { image, title, description, blogLink } = props.blog;
    return (
        // <div className="card">
        //     <img src={img1} alt=""/>
        //     <h2>{image}</h2>
        //     <h3>{title}</h3>
        //     <p>{description}</p>

        <div className='mb-4 mt-2'>
            <div className="card bg-dark text-light">
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
            </div>
            <a href={blogLink} target='_blank' className="btn btn-success mb-4 ml-3 mr-3">Read more</a>
        </div>
        </div>

        // </div>
    );
};

export default SingleBlog;