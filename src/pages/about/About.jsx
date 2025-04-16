import React from 'react';
import AboutHeading from './AboutHeading';
import OurJourney from './OurJourney';
import Faq from './Faq';

const About = () => {
    return (
        <div className='container mx-auto py-4 md:py-7 px-3 md:px-10'>
            <AboutHeading/>
            <OurJourney/>
            <Faq/>
            
        </div>
    );
};

export default About;