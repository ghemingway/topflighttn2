/*** Copyright G. Hemingway @2022-2023 ***/
"use strict";

import Button from "@/components/button";

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
const Other = () => {
  return (
    <section
      id="other"
      className="py-16 bg-[#f8f9fa] text-[#212529] flex items-center justify-center"
    >
      <div className="max-w-3xl flex flex-col items-center justify-center">
        <h2 className="font-bold text-5xl mb-3 text-center">
          More About the Club
        </h2>
        <div className="px-2 sm:px-0 w-full flex flex-col py-10 flex-wrap justify-center">
          <h3 className="font-bold pb-4 text-lg">
            What qualities do we seek in new members?
          </h3>
          <ul className="list-disc pl-8">
            <li>Individuals seeking long term membership in the club</li>
            <li>Financially stable</li>
            <li>
              Individuals interested in participating in the social aspect of
              the club and attending regular meetings
            </li>
            <li>
              Individuals willing to volunteer time towards club needs (ie:
              serve in officer roles, help with plane upkeep, etc...)
            </li>
          </ul>
        </div>
        <div className="pb-10 px-2 sm:px-0">
          <h5 className="font-bold text-lg">In Addition...</h5>
          <div>
            Insurance requirements for our Cirrus aircraft require that a member
            has an IFR rating in order to be able to fly the aircraft solo.
            Members may use the Cirrus aircraft to train for an instrument
            rating, but may not fly solo until IFR rated. In addition, the SR20
            requires 100+ hours total flight time and the SR22 requires 200+
            hours total flight time for a pilot to be qualified to fly solo, in
            addition to the other requirements.
          </div>
        </div>
        <Button anchor="portfolio">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          What We're Up To
        </Button>
      </div>
    </section>
  );
};

export default Other;
