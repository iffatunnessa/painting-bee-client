import React from 'react';
import projectData from './ProjectFakeData.json';
import './Project.css';

const Projects = () => {
    return (
        <div className='container all-container'>
            <h1 className='section-title'>Our Projects</h1>
            <hr className='hr-style' />
            <div className="row row-cols-1 row-cols-md-3 g-4 project-row" >
                {projectData.map((current) => (
                    <div className="col" key={current.id}>
                        <div className="card h-100 border-0 ">
                            <img src={current.image} className="card-img-top project-img" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{current.name}</h5>
                                <p className="card-text">
                                    {current.details}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;