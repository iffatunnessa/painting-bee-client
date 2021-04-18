import { CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Dashboard from '../../Dashboard/Dashboard';
import OrderIndividual from '../OrderIndividual/OrderIndividual';

const OrderList = () => {
    const [orderedItems, setOrderedItems] = useState([]);
    useEffect(() => {
        fetch('https://tranquil-bayou-21139.herokuapp.com/orderList')
            .then(res => res.json())
            .then(data => setOrderedItems(data))

    }, [])
    console.log(orderedItems);
    return (
        <div className="row" >
        <div className="col-md-3">
            <Dashboard />
        </div>
        <div className="col-md-9" style={{ marginTop: "100px", height: "auto", paddingBottom: "238px", paddingLeft: "40px" }}>
            <h3 style={{ paddingLeft: "20px" }}>Order List</h3>
            <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Address</th>
                    <th scope="col">details</th>
                    <th scope="col">status</th>
                </tr>
            </thead>
            <tbody>
                {
                    orderedItems.map(orderItem => <OrderIndividual orderedItem={orderItem} />)
                }
            </tbody>
        </table>
        <div>
        {
            orderedItems.length === 0 && <div style={{ width: "100%", textAlign: "center",marginTop:"200px" }}><CircularProgress /></div>
        }
        </div>
      
        </div>
    </div>
    );
};

export default OrderList;