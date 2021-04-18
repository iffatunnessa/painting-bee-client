import React, { useState } from 'react';
import Dashboard from '../../Dashboard/Dashboard';

const MakeAdmin = () => {
    const [adminEmail, setAdminEmail] = useState("");
    const handleSubmit = e => {
        const eventData = {
            adminEmail: adminEmail
        }
        const url = `https://tranquil-bayou-21139.herokuapp.com/addAAdmin`;
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
                <h3 style={{ paddingLeft: "20px" }}>Add an admin</h3>
                <form className="row g-4" onSubmit={handleSubmit} style={{ marginLeft: "10px" }}>
                    <div className="col-md-5 form-group" >
                        <input name="email" type="email" className="form-control" id="email" placeholder="Enter Service Title" required onChange={(e) => setAdminEmail(e.target.value)} />
                    </div>
                    <div className="col-md-1">
                        <button className="btn btn-success" type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;