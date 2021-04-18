import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import Dashboard from '../../Dashboard/Dashboard';

const Review = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { photoURL } = loggedInUser;
    const [added, setAdded] = useState(false);
    const [userName, setUserName] = useState("");
    const [description, setDescription] = useState("");
    const [designation, setDesignation] = useState("");

    const handleSubmit = e => {
        setAdded(true);
        const eventData = {
            userName: userName,
            description: description,
            designation: designation,
            userPhoto: photoURL
        }
        const url = `https://tranquil-bayou-21139.herokuapp.com/review`;
        console.log(eventData)
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(eventData)
        })
            .then(res => console.log("added item(client)", res));
        e.preventDefault();
    };

    return (
        <div className="row" >
            <div className="col-md-3">
                <Dashboard />
            </div>
            <div className="col-md-9" style={{ marginTop: "100px", height: "auto", paddingBottom: "238px", paddingLeft: "40px" }}>
                <h3 style={{paddingBottom: "20px"}}>Review</h3>
                {added && <div className="alert alert-success" role="alert">
                    An Item has been added!
                    </div>
                }
                <form className="row g-4" onSubmit={handleSubmit}>
                    <div className="col-md-8 form-group" >
                        <input name="userName" type="text" className="form-control" id="userName" placeholder="Enter Your Name" required onChange={(e) => setUserName(e.target.value)} />
                    </div>
                    <div className="col-md-8 form-group">
                        <input type="text" name="designation" className="form-control" id="designation" placeholder="Company's Name, Designation" onChange={(e) => setDesignation(e.target.value)} required />
                    </div>
                    <div className="col-md-8 form-group">
                        <input type="text-area" name="description" className="form-control" id="description" placeholder="Description" onChange={(e) => setDescription(e.target.value)} required />
                    </div>
                    <div className="col-md-8">
                        <button className="btn btn-success" type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Review;