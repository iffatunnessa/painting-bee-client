import React, { useEffect, useState } from 'react';
import './Testimonial.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimonial = () => {
    const [review, setReview] = useState([]);

    useEffect(() => {
        fetch('https://tranquil-bayou-21139.herokuapp.com/testimonial')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])

    let settings = {
        infinite: false,
        speed: 1000,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 2,

        responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="container all-container">
            <h1 className='section-title'>Testimonials</h1>
            <hr className='hr-style' />
            {review.length === 0 ? (
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            ) : (
                <Slider {...settings}>
                    {review.map((current) => (
                        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-4 g-4 service-row out d-flex justify-content-evenly" key={current._id}>
                            <div className="card h-100 testimonial-card align-items-center shadow p-3 mb-5 bg-white rounded">
                                <img
                                    className="rounded-circle mt-5"
                                    alt={"users here"}
                                    src={current.userPhoto}
                                    height={56}
                                    width={56}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{current.userName}</h5>
                                    <small>{current.designation}</small>
                                    <p className="card-text">
                                        {current.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            )}
        </div>
    );
};

export default Testimonial;