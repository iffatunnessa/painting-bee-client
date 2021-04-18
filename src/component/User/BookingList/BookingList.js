import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Dashboard from '../../Dashboard/Dashboard';
import BookedItem from '../BookedItem/BookedItem';

const BookingList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const userEmail = loggedInUser.email;
    const [booking, setBooking] = useState([]);
    useEffect(() => {
        fetch(`https://tranquil-bayou-21139.herokuapp.com/bookingList?userEmail=${userEmail}`)
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [userEmail])

    return (
        <div className="row" >
            <div className="col-md-3">
                <Dashboard />
            </div>
            <div className="col-md-9" style={{ marginTop: "100px", height: "auto", paddingBottom: "238px", paddingLeft: "40px" }}>
                <h3 style={{ paddingLeft: "20px" }}>Booking List</h3>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    {
                        booking.map(item => <BookedItem bookedItem={item} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default BookingList;