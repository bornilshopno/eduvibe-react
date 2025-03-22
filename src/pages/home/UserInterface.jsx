import React from 'react';
import users from "../../assets/users.svg"
import group73 from "../../assets/Group 73.svg"
import group72 from "../../assets/Group 72.svg"
import group134 from "../../assets/Group 134.png"
import DetailsFlexSection from '../../shared components/DetailsFlexSection';


const UserInterface = () => {
    const title = [
        {text: "A",color: ""},
        { text: "user interface", color: "text-secondary-600" },
        { text: "designed for the classroom", color: "" },
      ];
      const features = [
        {
          icon: users,
          text: "Teachers don’t get lost in the grid view and have a dedicated Podium space.",
        },
        {
          icon: group73,
          text: "TA’s and presenters can be moved to the front of the class.",
        },
        {
          icon: group72,
          text: "Teachers can easily see all students and class data at one time.",
        },
      ];
    return (
        <DetailsFlexSection
        className="lg:flex-row-reverse"
        title={title}
        features={features}
        img={group134}
      />
    );
};

export default UserInterface;