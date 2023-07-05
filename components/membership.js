/*** Copyright G. Hemingway @2022-2023 ***/
"use strict";

import Button from "@/components/button";

const Membership = () => {
  return (
    <section
      id="membership"
      name="membership"
      className="py-32 px-3 md:px-0 bg-[#f8f9fa] text-[#212529] flex items-center justify-center relative bg-center bg-cover bg-[url(/img/bg-callout.jpeg)]"
    >
      <div className="max-w-[50rem] flex flex-col items-center justify-center text-center">
        <h2 className="text-[1.875rem] font-bold pb-2">
          What club membership is all about
        </h2>
        <p className="font-thin text-xl pb-12">
          TopFlight Aviation is also a social club. It provides an opportunity,
          venue, and resources for its members to be in community with other
          pilots who have a passion for general aviation, advocacy, education,
          and philanthropy. Membership is open to pilots and individuals seeking
          to become pilots.
        </p>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <Button anchor="portfolio">What We're Up To</Button>
        <div className="mb-32" />
      </div>
    </section>
  );
};

export default Membership;
