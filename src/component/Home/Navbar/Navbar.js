import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Nav.css';
import logo from '../../../image/logo.jpg';

const Nav = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { photoURL } = loggedInUser;

    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/home'>
                    <img style={{ width: "40px" }} src={logo} alt='' />   Painting Bee
                    </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item ms-4">
                            <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item ms-4">
                            <Link className="nav-link" to="/about">About Us</Link>
                        </li>
                        <li className="nav-item ms-4">
                            <Link className="nav-link" to="/admin">Admin</Link>
                        </li>
                        <li className="nav-item ms-4">
                            <Link className="nav-link" to="/dashboard">Dashboard</Link>
                        </li>
                        <li className="nav-item ms-4">
                            {
                                loggedInUser.email ?
                                    <Link to="/" className="nav-link" ><img className="user-photo" src={photoURL} alt="" /></Link>
                                    :
                                    <Link to="/login" className="btn btn-danger">Login</Link>
                            } </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;