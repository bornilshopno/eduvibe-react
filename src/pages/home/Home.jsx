import React from 'react';
import Hero from './Hero';
import Solution from './Solution';
import AboutHeading from '../about/AboutHeading';
import Features from './Features';
import Integration from './Integration';
import Testimonial from './Testimonial';
import ChatRoom from '../ChatRoom/ChatRoom';

const Home = () => {
    return (
        <div>
            <Hero />
            <Solution />
            <AboutHeading />
            <Features />
            <Integration />
            <Testimonial />
            <ChatRoom></ChatRoom>
        </div>
    );
};

export default Home;