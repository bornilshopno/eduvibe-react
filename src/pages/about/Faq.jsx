import React from 'react';
import SectionHeading from '../../shared components/SectionHeading';
import FaqQuestion from '../../shared components/FaqQuestion';

const Faq = () => {
    return (
        <div className='py-10'>
            <SectionHeading
                title="Frequently Asked Questions :"
                titleSecond=" We're Here to Help"
                description=""
            />
            <div className='grid lg:grid-cols-2 gap-x-10 '>
              <FaqQuestion 
              question="How do I join EduVibe virtual class?"
              answer=" To join a virtual class, log in to your account, navigate to the My Classes section, and click on the class link at the scheduled time. Ensure you have a stable internet connection and a compatible browser for the best experience."
              />

              <FaqQuestion
              question="Do I need to install any software to attend a class?"
              answer="o, our virtual classroom runs directly in your web browser. However, for the best experience, we recommend using the latest versions of Chrome, Firefox, or Edge."
              />
              <FaqQuestion
              question="Can I interact with the teacher and other students during the class?"
              answer="Yes! Our virtual classroom supports real-time video, audio, and text chat, along with screen sharing and interactive whiteboards to enhance learning."
              />
              <FaqQuestion
              question="What should I do if I experience technical issues?"
              answer=" If you face technical problems, try refreshing the page or checking your internet connection. If the issue persists, visit our Help Center or contact our support team."
              />
              <FaqQuestion
              question="Are class recordings available for later viewing?"
              answer=" Yes, recorded sessions are available for review. You can access them in the Class Recordings section of your account However, availability depends on the teacher’s recording preferences."
              />

              {/* 
            

             

                

              

                
                
              */}

            </div>





        </div>
    );
};

export default Faq;