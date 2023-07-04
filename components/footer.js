/*** Copyright G. Hemingway @2022-2023 ***/
"use strict";

import { FiFacebook } from "react-icons/fi";
import { GrInstagram } from "react-icons/gr";

`height: 4rem;
width: 4rem;
line-height: 4.3rem;
font-size: 1.5rem;
background-color: #053254;
`;

const Footer = () => {
  return (
    <section className="bg-white text-black min-h-[20rem] flex flex-col items-center justify-center">
      <div className="flex p-8 text-white gap-4">
        <a href="https://www.instagram.com/topflighttn/">
          <div className="w-16 h-16 rounded-full bg-[#053254] flex flex-wrap items-center justify-center text-3xl">
            <GrInstagram className="stroke-0" />
          </div>
        </a>
        <a href="https://fb.me/topflighttn">
          <div className="w-16 h-16 rounded-full bg-[#053254] flex flex-wrap items-center justify-center text-3xl">
            <FiFacebook className="stroke-1" />
          </div>
        </a>
      </div>
      <div className="text-black/30 font-thin">
        Copyright © Top Flight Aviation 2023
      </div>
    </section>
  );
};

export default Footer;
