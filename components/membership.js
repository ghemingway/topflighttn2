/*** Copyright G. Hemingway @2022-2023 ***/
"use strict";

import Link from "next/link";
import Button from "@/components/button";

const Membership = () => {
  return (
    <section
      id="membership"
      className="py-32 px-3 md:px-0 bg-[#f8f9fa] text-[#212529] flex items-center justify-center relative"
      style={{
        background: `linear-gradient(90deg,rgba(255,255,255,.1) 0,rgba(255,255,255,.1) 100%),url(../img/bg-callout.jpeg);
           background-position: center center;
           background-repeat: no-repeat;
           background-size: cover;`,
      }}
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
        <Link href="#portfolio">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <Button>What We're Up To</Button>
        </Link>
        <div className="mb-32" />
      </div>
    </section>
  );
};

export default Membership;
