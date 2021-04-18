import { CircularProgress } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Dashboard from '../../Dashboard/Dashboard';

const Admin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
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
        <div className="row">
            {
                admin ? <><div className="col-md-3">
                    <Dashboard />
                </div>
                    <div className="col-md-9" style={{ marginTop: "100px", height: "auto", paddingBottom: "238px", paddingLeft: "40px" }}>
                        <h3 style={{ paddingLeft: "20px" }}>Welcome {loggedInUser.displayName}</h3>
                    </div>
                </>
                    : <div style={{ width: "100%", textAlign: "center",marginTop:"200px" }}>
                        <p>You are not an admin</p>
                    </div>
            }
        </div>
    );
};

export default Admin;