import group136 from "../../assets/Group 136.png"
import DetailsFlexSection from "../../shared components/DetailsFlexSection";

const Testimonial = () => {
    return (
        <section className="container mx-auto py-4 md:py-7 px-3 md:px-10 ">
      <DetailsFlexSection
        title={[{ text: "What They Say?" }]}
        description="LearnEase has got more than 100k positive ratings from our users around the world. 
Some of the students and teachers were greatly helped by the LearnEase.
Are you too? Please give your assessment"
        img={group136}
        btnStyle2="Write your assessment"
        className="lg:flex-row-reverse"
      />
    </section>
    );
};

export default Testimonial;