import React from 'react';
import DetailsFlexSection from '../../shared components/DetailsFlexSection';
import photo from  '../../assets/Group 124.png'

const ClassManagement = () => {
    return (
        <DetailsFlexSection
      title={[
        { text: "Class Management", color: "text-secondary-600" },
        { text: "Tools for Educators" },
      ]} description="Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. With the Gradebook, teachers can review and grade tests and quizzes in real-time.
" img={photo}
    />
    );
};

export default ClassManagement;