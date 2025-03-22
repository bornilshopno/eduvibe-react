import React from 'react';
import SectionHeading from '../../shared components/SectionHeading';
import UserInterface from './UserInterface';
import ToolsForTeacher from './ToolsForTeacher';
import Assessments from './Assessments';
import ClassManagement from './ClassManagement';
import Discussions from './Discussions';

const Features = () => {
    return (
        <div className="container mx-auto py-4 md:py-7 px-3 md:px-10">
        <SectionHeading
          title="Our"
          titleSecond="Features"
          description="This very extraordinary feature, can make learning activities more efficient"
        />
        <UserInterface />
        <ToolsForTeacher />
        <Assessments />
        <ClassManagement />
        <Discussions />
        <div className="flex justify-center -mt-5">
        <button className="btn rounded-full border border-secondary-600 bg-transparent text-secondary-600 hover:bg-amber-100 transition-all duration-150">See more features</button>
        </div>
      </div>
    );
};

export default Features;