/*** Copyright G. Hemingway @2022-2023 ***/
"use strict";

import Button from "@/components/button";

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
const About = () => {
  return (
    <section
      id="about"
      name="about"
      className="py-32 px-3 md:px-0 bg-[#f8f9fa] text-[#212529] flex items-center justify-center"
    >
      <div className="max-w-[50rem] flex flex-col items-center justify-center text-center">
        <h2 className="text-[1.875rem] font-bold pb-2">
          The Vision: A High-Quality Plane for Every Mission
        </h2>
        <p className="font-thin text-xl pb-12">
          We want the club experience to be the closest thing to owning your own
          fleet, minus all the exorbitant costs and upkeep. This means we keep a
          low member-to-plane ratio with best-in-class equipment.
        </p>
        <Button anchor="services">What We Offer</Button>
      </div>
    </section>
  );
};

export default About;
