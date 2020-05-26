import React from 'react';
import './Skills.css'

const Skills = () => {
    return (
        <div className="skill-section">
            <div className="text-center section-header">
                <h1>Skills</h1>
            </div>
           <div className="skills row align-items-center skills">
           <div className="col-md-9">
            <div className="web-skills row align-items-center">
                <div className="col-md-5 text-center">
                    <h4>Web Skills</h4>
                </div>
                <div className="col-md-7 green-yellow-text">
                    <p>-Expertise: React, JavaScript, ES6, Bootstrap 4.
                        <br/>
                        -Comfortable: Node.js, Express.js, MongoDB.
                        <br/>
                        -Tools: VS code, Git, Webpack, Chrome Dev Tool.
                    </p>
                </div>
            </div>
            <div className="other-skills row align-items-center">
                <div className="col-md-5 text-center">
                    <h4>Other Skills</h4>
                </div>
                <div className="col-md-7">
                    <p>-Softwares: MS Office (Excel, Word, Power Point), Adobe Photoshop, Camtasia Studio.</p>
                </div>
            </div>
            <div className="languages row align-items-center">
                <div className="col-md-5 text-center">
                    <h4>Languages</h4>
                </div>
                <div className="col-md-7">
                <p>-English <br/>-Bengali</p>                    
                </div>
            </div>
            

            </div>
            <div className="col-md-3 center">
                <a target="_blank" href="https://www.linkedin.com/in/sayed-delowar-1894111a3/" className="btn btn-danger btn-lg">Hire me</a>
            </div>
           </div>
                    
        </div>
    );
};

export default Skills;