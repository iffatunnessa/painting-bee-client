import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Services = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('https://tranquil-bayou-21139.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div className='container all-container'>
            <h1 className='section-title'>Services</h1>
            <hr className='hr-style' />
            <div className="row row-cols-1 row-cols-md-4 g-4 service-row" >
                {service.map((current) => (<div className="col" key={current._id}>
                    <Link className="card h-100 border-0 " to={"/book/" + current._id}>
                        <div className='service-img'>
                            <img src={current.imageURL} className="card-img-top service-icon" alt="..." />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{current.serviceTitle}</h5>
                            <p className="card-text">
                                {current.description}
                            </p>
                        </div>
                    </Link>
                </div>))}
            </div>
        </div>
    );
};

export default Services;