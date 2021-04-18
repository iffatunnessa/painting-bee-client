import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

import { faFacebook, faInstagram, faTumblr, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Footer = () => {
    return (
        <div id='footer-area'>
            <div className='container'>
                <div className='row'>
                    <div className="col-md-4 p-2 mt-5 ">
                        <h3>Quick Links</h3>
                        <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                        <Link className="nav-link" to="/about">About Us</Link>
                        <Link className="nav-link" to="/services">Services</Link>
                        <Link className="nav-link" to="/admin">Admin</Link>
                        <Link className="nav-link" to="/dashboard">Dashboard</Link>
                    </div>

                    <div className="col-md-4 p-2 mt-5 ">
                        <h3>Social Media</h3>
                        <br/>
                        <div >
                            <FontAwesomeIcon icon={faFacebook} className='social-icon' />
                            <FontAwesomeIcon icon={faTwitter} className='social-icon' />
                            <FontAwesomeIcon icon={faInstagram} className='social-icon' />
                            <FontAwesomeIcon icon={faTumblr} className='social-icon' />
                        </div>
                        <br/>
                        <p>00/D Dhanmondi, Dhaka</p>
                    </div>
                    <div className="col-md-4 p-2 mt-5 ">
                        <h3>About Us</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quod distinctio pariatur molestias nam culpa labore voluptates non architecto officia ab, alias fuga illum optio? Aut ipsam quia odit tempora?</p>
                    </div>
                </div>
            </div>
            <br/>
            <h6 style={{textAlign:"center"}}>@ ALL RIGHTS DESERVED TO PAINTING BEE</h6>
        </div>
    );
};

export default Footer;