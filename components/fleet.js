/*** Copyright G. Hemingway @2022-2023 ***/
"use strict";

//import { GiCommercialAirplane } from "react-icons/gi";
import Button from "@/components/button";
import Image from "next/image";
import n422rj1 from "../images/n422rj_1.jpg";
import n422rj2 from "../images/n422rj_2.jpg";
import n262bc1 from "../images/n262bc_1.jpg";
import n262bc2 from "../images/n262bc_2.jpg";

const Feature = ({ children }) => <li className="text-md">{children}</li>;

const imageStyle = {
  width: "50%",
  height: "auto",
};

const Plane = ({ tag, model, children }) => {
  return (
    <div className="w-full flex flex-col sm:flex-row items-center p-4 bg-gray-200 rounded-md">
      <div className="sm:w-1/3 self-start">
        <h4 className="text-4xl font-bold pb-1 text-blue-800">{tag}</h4>
        <h3 className="text-2xl font-thin">{model}</h3>
      </div>
      {children}
    </div>
  );
};

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
const Fleet = () => {
  return (
    <section
      id="fleet"
      className="py-16 bg-[#f8f9fa] text-[#212529] flex items-center justify-center"
    >
      <div className="w-full flex flex-col items-center justify-center">
        <h2 className="font-bold text-5xl mb-2 text-center">Club Aircraft</h2>
        <div className="w-full sm:w-3/4 px-4 flex flex-col py-10 flex-wrap justify-center items-center gap-2">
          <Plane tag="N422RJ" model="2013 Cirrus SR22">
            <ul className="list-disc px-4 py-2">
              <Feature>Garmin 12” Perspective Glass Cockpit</Feature>
              <Feature>Garmin Digital Autopilot</Feature>
              <Feature>GMA 350 Audio Panel</Feature>
              <Feature>Factory A/C</Feature>
              <Feature>ADSB In/Out</Feature>
              <Feature>FIKI</Feature>
              <Feature>FLIR EVS Night Vision Camera</Feature>
              <Feature>XM Weather</Feature>
              <Feature>5 Seats</Feature>
            </ul>
            <div className="sm:w-2/3 flex flex-wrap">
              <Image
                alt="TopFlight Aviation Banner"
                style={imageStyle}
                src={n422rj1}
              />
              <Image
                alt="TopFlight Aviation Banner"
                style={imageStyle}
                src={n422rj2}
              />
            </div>
          </Plane>
          <Plane tag="N262BC" model="2010 Cirrus SR20">
            <ul className="list-disc px-4 py-2">
              <Feature>Garmin Perspective Glass Cockpit</Feature>
              <Feature>Garmin Digital Autopilot</Feature>
              <Feature>GMA 350c Audio Panel</Feature>
              <Feature>ADSB In/Out</Feature>
              <Feature>XM Weather</Feature>
              <Feature>4 Seats</Feature>
            </ul>
            <div className="sm:w-2/3 flex flex-wrap">
              <Image
                alt="TopFlight Aviation Banner"
                style={imageStyle}
                src={n262bc1}
              />
              <Image
                alt="TopFlight Aviation Banner"
                style={imageStyle}
                src={n262bc2}
              />
            </div>
          </Plane>
        </div>
        <Button anchor="membership">Come Fly With Us</Button>
      </div>
    </section>
  );
};

export default Fleet;
