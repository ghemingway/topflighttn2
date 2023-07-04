/*** Copyright G. Hemingway @2022-2023 ***/
"use strict";

import Image from "next/image";
import Link from "next/link";
import Button from "./button";
import bannerImg from "../images/TopFlightLogo.png";

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
const Header = () => {
  return (
    <header
      id="header"
      className="w-full min-h-[40rem] md:h-screen relative flex flex-col items-center justify-center  bg-center bg-cover bg-[url(/img/bg-masthead.jpeg)]"
    >
      <div className="flex flex-col items-center justify-center p-4">
        <Image
          src={bannerImg}
          alt="TopFlight Aviation Banner"
          priority={true}
        ></Image>
        <h3 className="mb-10 font-bold text-2xl text-[#212529] text-center">
          <em>A premier aviation club in Nashville, TN</em>
        </h3>
        <Link href="#about">
          <Button>Find Out More</Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
