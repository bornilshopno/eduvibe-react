import React from 'react';
import heroBg from '../../assets/heroBG.png'
const Hero = () => {
    return (
        <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between px-4 md:px-10">
          {" "}
          {/* Hero Heading */}
          <div className="lg:w-4/5 mt-10 lg:0">
            <h1 className="text-5xl font-bold mb-5 text-secondary-600">
              Studying{" "}
              <span className="text-primary-600">Online is now much easier</span>
            </h1>
            <p className="text-justify text-gray-700">
              At LearnEase, we believe in the power of education that transcends
              boundaries. Our online platform is designed to bring the classroom
              experience to your fingertips, making learning a truly immersive and
              convenient journey.
            </p>
            {/* Hero Button */}
            <div className="flex items-center gap-3 mt-4">
              <button className='bg-primary-200 dark:text-white'>Sign Up</button>
              <div className="flex items-center gap-4">
                <button className='btn outline'>
                    Watch how it works
                </button>
                {/* <Button variant={"outline"}>
                  <FaPlay className="text-primary-600" />
                </Button>{" "}
                <span>Watch how it works</span> */}
              </div>
            </div>
          </div>
          {/* Hero Image */}
          <div className="relative mt-10 lg:mt-0">
            {/* <Image src={heroBG} alt="Hero Image" /> */}

            <img src={heroBg} alt="" />
          </div>
        </div>
      </div>
    );
};

export default Hero;