import React from 'react';
import group135 from "../../assets/Group 135.png"
import DetailsFlexSection from '../../shared components/DetailsFlexSection';

const Integration = () => {
    return (
        <section className="container mx-auto py-4 md:py-7 px-3 md:px-10 ">
        <DetailsFlexSection
          title={[
            { text: "200+ educational tools and platform" },
            { text: "integrations", color: "text-secondary-600" },
          ]}
          description="Schoology has every tool your classroom needs and comes pre-integrated with more than 200+ tools, student information systems (SIS), and education platforms."
          img={group135} btnStyle2="See All integration"
        />
      </section>
    );
};

export default Integration;