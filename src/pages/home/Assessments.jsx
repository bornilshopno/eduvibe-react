import React from 'react';
import DetailsFlexSection from '../../shared components/DetailsFlexSection';
import group92 from "../../assets/Group 92.png"

const Assessments = () => {
    return (
        <DetailsFlexSection title={[
            {text: "Assessments,"},
            {text: "Quizzes", color: "text-secondary-600"},
            {text: ", Tests",},
          ]} description="Easily launch live assignments, quizzes, and tests.
      Student results are automatically entered in the online gradebook." img={group92} className="lg:flex-row-reverse"/>
    );
};

export default Assessments;