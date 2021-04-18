import React, { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import { useParams } from 'react-router';
import Dashboard from '../../Dashboard/Dashboard';

const stripePromise = loadStripe('pk_test_51IhHn8DH2n415uEGFepghWSSwrPh0z4H95SmuYM6En4hPtxabzO1QL5wp7ToazdVQzwKwe5NPIZGzaWTGHflA7Ju00XLlGgnLl');

const Book = () => {
    const { id } = useParams();
    const [bookService, setBookService] = useState([]);
    useEffect(() => {
        fetch(`https://tranquil-bayou-21139.herokuapp.com/book/${id}`)
            .then(res => res.json())
            .then(data => setBookService(data[0]))
    }, [id])

    return (
        <div className="row" >
            <div className="col-md-3">
                <Dashboard />
            </div>
            <div className="col-md-8" style={{ marginTop: "100px", height: "auto", paddingBottom: "238px", paddingLeft: "40px" }}>
                <h3 style={{ paddingLeft: "20px" }}>Book</h3>
                <Elements stripe={stripePromise}>
                    <CheckoutForm service={bookService} />
                </Elements>

            </div>
        </div>
    );
};

export default Book;