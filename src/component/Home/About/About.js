import React from 'react';
import './About.css';
import familyPicture from "../../../image/family-painting-wall.jpg"
import paintingPink from "../../../image/painting-walls-pink.jpg"

const About = () => {
    return (
        <div className="container-lg all-container">
            <h1 className='section-title'>Improve Your Experience</h1>
            <hr className='hr-style'/>
            <div className='row d-flex align-items-center'>
                <div className="col-md-4" id="component-1">
                    <img src={familyPicture} alt="" />
                </div>
                <div className="col-md-4 d-flex align-items-center" id="component-2">
                    <div id="talkBubble">
                        <img src={paintingPink} alt="" />
                        <h1 className="text">SEAMLESS BOND <br/>
                        OF BETTER<br/>
                        CUSTOMER<br/>
                        SATISFACTION<br/>
                        </h1>
                    </div>
                </div>
            </div>
            <div>
                <div id="component-3"></div>
                <div id="component-4">
                    <h3 style={{fontWeight:"bold"}}>Great Team</h3>
                    <p>everage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
                </div>
            </div>
        </div>
    );
};

export default About;