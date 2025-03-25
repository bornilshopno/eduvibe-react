import React from 'react';
import photo from  '../../assets/Group 106.png'
import DetailsFlexSection from '../../shared components/DetailsFlexSection';

const Discussions = () => {
    return (
        <DetailsFlexSection
        title={[
          { text: "One-on-One" },
          { text: "Discussions", color: "text-secondary-600" },
        ]}
        description="Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.    "
        img={photo} className="lg:flex-row-reverse"
      />
    );
};

export default Discussions;