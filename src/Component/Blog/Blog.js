import React from 'react';
import './Blog.css';
import AllBlog from '../../Data/AllBlog';
import SingleBlog from '../BlogSingle/SingleBlog';
const Blog = () => {
    const blogs = AllBlog;
    console.log(blogs)
    return (
        <div className=" container blog-page">
            <div className="card-deck">
                {
                    blogs.map(blog => <SingleBlog key={blog.id} blog={blog}></SingleBlog>)
                }
            </div>

        </div>
    );
};

export default Blog;