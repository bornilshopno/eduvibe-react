import React from 'react';
import SectionHeading from '../../shared components/SectionHeading';
import SolutionCard from './SolutionCard';

const Solution = () => {
    return (
        <div className="container mx-auto py-4 md:py-7 px-3 md:px-10">
      <SectionHeading
        title="All-In-One"
        titleSecond="Solution"
        description="Skilline is one powerful online software suite that combines all the tools needed to run a successful school or office."
      />
      <SolutionCard />
    </div>
    );
};

export default Solution;