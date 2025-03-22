import React from 'react';
import Hero from './Hero';
import Solution from './Solution';
import AboutHeading from '../about/AboutHeading';
import UserInterface from './UserInterface';
import ToolsForTeacher from './ToolsForTeacher';
import Features from './Features';
import Integration from './Integration';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Hero />
            <Solution />
            <AboutHeading />
            <Features />
            <Integration />
            <Testimonial />
        </div>
    );
};

export default Home;