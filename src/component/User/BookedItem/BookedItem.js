import React from 'react';

const BookedItem = ({bookedItem}) => {
    const {serviceDescription, serviceTitle, status, imageURL} = bookedItem;
    return (
        <div>
            <div className="card border-light mb-3" style={{maxWidth: "18rem"}}>
                <div className="card-header">
                    <img src={imageURL} alt='' style={{width:'40px',margin:'6px', marginRight:"80px" }}/>
                    <button className='btn btn-outline-danger disabled'>{status}</button>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{serviceTitle}</h5>
                    <p className="card-text">{serviceDescription}</p>
                </div>
            </div>

        </div>
    );
};

export default BookedItem;