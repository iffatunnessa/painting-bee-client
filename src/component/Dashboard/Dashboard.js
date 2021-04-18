import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/auth";
import './Dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faShoppingBasket, faShoppingCart, faSignOutAlt, faPlus, faShoppingBag, faTasks, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../App';
import firebaseConfig from '../../firebaseConfig';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}
const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const id = useParams();
    const handleSignOut = () => {
        firebase.auth().signOut().then(() => {
            setLoggedInUser('');
        }).catch((error) => {
            // An error happened.
        });
    }
    const [admin, setAdmin] = useState(false);
    useEffect(() => {
        fetch('https://tranquil-bayou-21139.herokuapp.com/admin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setAdmin(data));
    }, [])

    return (
        <section className="container-fluid row" style={{ marginTop: '100px' }}>
            <div className="sidebar d-flex flex-column justify-content-between col-md-3 py-5 px-4" style={{ height: "500px" }}>
                <ul className="list-unstyled">
                    {
                        admin ? <div>
                            <li>
                                <Link to="/orderList" className="text-white">
                                    <FontAwesomeIcon icon={faShoppingBag} /> <span>Order List</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/addService" className="text-white">
                                    <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/makeAdmin" className="text-white">
                                    <FontAwesomeIcon icon={faUserFriends} /> <span>Make Admin</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/manageService" className="text-white">
                                    <FontAwesomeIcon icon={faTasks} /> <span>Manage Service</span>
                                </Link>
                            </li>
                        </div>
                            : <div>
                                <li>
                                    <Link to={"/book/" + id} className="text-white">
                                        <FontAwesomeIcon icon={faShoppingCart} /> <span>Book</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/services" className="text-white">
                                        <FontAwesomeIcon icon={faShoppingBasket} /> <span>Service</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/bookingList" className="text-white">
                                        <FontAwesomeIcon icon={faShoppingBasket} /> <span>Booking List</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/review" className="text-white">
                                        <FontAwesomeIcon icon={faCommentDots} /> <span>Review</span>
                                    </Link>
                                </li>
                            </div>
                    }
                    <li>
                        <Link to="/" onClick={() => handleSignOut()} className="text-white">
                            <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
                        </Link>
                    </li>

                </ul>
            </div>
        </section>
    );
};

export default Dashboard;