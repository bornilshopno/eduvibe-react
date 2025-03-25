import React from 'react';
import DetailsFlexSection from '../../shared components/DetailsFlexSection';
import photo from '../../assets/Group 122.png'

const ToolsForTeacher = () => {
    return (
        <DetailsFlexSection
        title={[
          { text: "Tools", color: "text-secondary-600" },
          { text: "For Teachers And Learners" },
        ]}
        description="Class has a dynamic set of teaching tools built to be deployed and used during class.
  Teachers can handout assignments in real-time for students to complete and submit."
        img= {photo}
      />
    );
};

export default ToolsForTeacher;