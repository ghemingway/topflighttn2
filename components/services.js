/*** Copyright G. Hemingway @2022-2023 ***/
"use strict";

import { GiCommercialAirplane } from "react-icons/gi";
import { SlMustache } from "react-icons/sl";
import { IoRibbonOutline } from "react-icons/io5";
import { LiaHeadsetSolid } from "react-icons/lia";

import Button from "@/components/button";

const Badge = ({ icon, tag, caption }) => {
  return (
    <div className="basis-[50%] max-w-[50%] min-w-[250px] flex flex-col items-center text-center px-4">
      <span className="service-icon">{icon}</span>
      <h4 className="text-2xl m-4">
        <strong>{tag}</strong>
      </h4>
      <p className="text-white/70 mb-8">{caption}</p>
    </div>
  );
};

const iconStyle = { stroke: "#053254", fill: "#053254" };

const Services = () => {
  return (
    <section
      id="services"
      name="services"
      className="py-32 bg-[#053254] text-white flex items-center justify-center"
    >
      <div className="max-w-3xl flex flex-col items-center justify-center">
        <h2 className="font-bold text-5xl mb-5 text-center">
          How do we define a great plane?
        </h2>
        <div className="flex py-10 flex-wrap justify-center">
          <Badge
            icon={<GiCommercialAirplane style={iconStyle} />}
            tag="Performance"
            caption="High performance, Creature comforts"
          />
          <Badge
            icon={<IoRibbonOutline style={iconStyle} />}
            tag="Safety"
            caption="Professional management, CAPS/BRS parachute"
          />
          <Badge
            icon={<LiaHeadsetSolid style={iconStyle} />}
            tag="Modern Avionics"
            caption="Glass cockpits, autopilots, ADSB
IFR ready"
          />
          <Badge
            icon={<SlMustache style={iconStyle} />}
            tag="Properly Maintained"
            caption="Good Exterior and Interior Condition"
          />
        </div>
        <Button anchor="membership" invert>
          Come Fly With Us
        </Button>
      </div>
    </section>
  );
};

export default Services;
