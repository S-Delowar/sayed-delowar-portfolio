import React, { useState, useEffect } from 'react';
import './Blog.css';
import AllBlog from '../../Data/AllBlog';
import SingleBlog from '../BlogSingle/SingleBlog';
const Blog = () => {
    const blogs = AllBlog;
    console.log(blogs)
//test medium
    const [myBLogs, setMyBlogs] = useState([]);

    useEffect(() => {
        fetch('https://medium.com/@sayed.buet97')
        .then(response => response.json())
        .then(data => console.log(data))
    },[])


    return (
        <div className=" container blog-page">
            <div className="card-columns">
                {
                    blogs.map(blog => <SingleBlog key={blog.id} blog={blog}></SingleBlog>)
                }
            </div>

        </div>
    );
};

export default Blog;