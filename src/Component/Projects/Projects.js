import React from 'react';
import './Projects.css';
import AllProjects from '../../Data/AllProjects';
import SingleProject from '../ProjectSingle/SingleProject';

const Projects = () => {
    const projects = AllProjects;
    console.log(projects)
    return (
        <div className="container project-page">
            <div className="text-center section-header">
                <h1>Projects -</h1>
            </div>
            {
                projects.map(project => <SingleProject key={project.id} project ={project}></SingleProject>)
            }
        </div>
    );
};

export default Projects;