import { CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Dashboard from '../../Dashboard/Dashboard';
import ManageIndividual from '../ManageIndividual/ManageIndividual';

const ManageService = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://tranquil-bayou-21139.herokuapp.com/manageService')
            .then(res => res.json())
            .then(data => setItems(data))

    }, [])
    return (
        <div className="row" >
            <div className="col-md-3 col-sm-12">
                <Dashboard />
            </div>
            <div className="col-md-9 col-sm-12" style={{ marginTop: "100px", height: "auto", paddingBottom: "238px", paddingLeft: "40px" }}>
                <h3 style={{ paddingLeft: "20px" }}>Service List</h3>
                <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Service Title</th>
                        <th scope="col">Image</th>
                        <th scope="col">Description</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map(item => <ManageIndividual item={item} />)
                    }
                </tbody>
            </table>
            <div>
            {
                items.length === 0 && <div style={{ width: "100%", textAlign: "center",marginTop:"200px" }}><CircularProgress /></div>
            }
            </div>
          
            </div>
        </div>
    );
};

export default ManageService;