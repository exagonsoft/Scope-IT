import React from "react";
import HeroImage from '../../assets/images/landing_hero.png'

const LandingHero = () => {
  return (
    <section id="herosection">
      <div className="w-full flex sm:flex-row flex-col sm:gap-[3rem] gap-6 justify-center items-center">
        <div className="flex flex-col gap-1">
          <h1 className="head_text text-center sm:text-start overflow-x-visible flex-nowrap flex relative">
            Unlocking Efficiency...
          </h1>
          <span className=" head_text orange_gradient text-center sm:text-start sm:!mt-2 sm:py-[1rem]">
            Saving Your Time
          </span>
          <p className="desc font-medium text-center sm:text-start !mt-0">
            SCOPE-IT empowers precise project planning and enhances team
            efficiency, offering tools that not only save you time but also
            delight your clients.
          </p>
        </div>
        <div className="">
          <img
            src={HeroImage}
            alt="hero image"
            className=" w-80 rounded-full shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
