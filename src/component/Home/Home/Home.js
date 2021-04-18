import React from 'react';
import Footer from '../Footer/Footer';
import About from '../About/About';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Header/>
            <About/>
            <Services/>
            <Projects/>
            <Testimonial/>
            <Footer/>
        </div>
    );
};

export default Home;