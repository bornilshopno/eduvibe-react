import React from 'react';
import photo130 from '../../assets/Group 130.png'
import photo131 from '../../assets/Group 131.png'
import photo132 from '../../assets/Group 132.png'
const SolutionCard = () => {
    const data = [
        {
          icon: photo130,
          title: "Flexible Learning",
          desc: "Study on your terms with self-paced courses, allowing you to learn when it suits you bes",
        },
        {
          icon: photo131,
          title: "Expert Instructors",
          desc: "Learn from professionals and experts in their respective fields, ensuring high-quality education",
        },
        {
          icon: photo132,
          title: "Flexible Learning",
          desc: "Engage with a diverse community of learners, fostering discussions, collaboration, and peer learning.",
        },
      ];
    return (
        <div className="mt-6 md:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-8">
        {data.map((card, index) => (
          <div
            key={index}
            className="py-5 px-10 shadow-xl shadow-primary-100 flex flex-col items-center rounded-4xl"
          >
            <img src={card.icon} alt={card.title} className='w-24 h-24' />
            {/* <Image width={100} height={100} src={card.icon} alt={card.title} /> */}
            <h2 className="text-primary-600 font-medium text-xl text-center">
              {card.title}
            </h2>
            <p className="text-center mt-5 text-slate-600 pb-10">{card.desc}</p>
          </div>
        ))}
      </div>
    );
};

export default SolutionCard;