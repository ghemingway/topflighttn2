/*** Copyright G. Hemingway @2022-2023 ***/
"use strict";

import Button from "@/components/button";

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
const Structure = () => {
  return (
    <section
      id="structure"
      className="py-32 bg-[#053254] text-white flex items-center justify-center"
    >
      <div className="max-w-3xl flex flex-col items-center justify-center">
        <h2 className="font-bold text-5xl mb-3 text-center">
          Membership & Financial Structure
        </h2>
        <div className="px-2 sm:px-0 w-full flex flex-col py-10 flex-wrap justify-center">
          <div>Club Structure: Non-Profit TN Corporation, Equity Club</div>
          <div>Home Base Airport: KJWN John Tune Nashville</div>
          <div>Member Capacity: 18 with current fleet</div>
          <div className="py-2">
            <h2 className="font-bold text-lg">Financials</h2>
            <ul className="list-disc pl-12">
              <li>Initiation Fee: $2,000</li>
              <li>Member Equity Buy-in: $15,000*</li>
              <li>Monthly Dues: $450*</li>
            </ul>
          </div>
          <div className="py-2">
            <h2 className="font-bold text-lg">Current Fleet Hourly Rates</h2>
            <ul className="list-disc pl-12">
              <li>4 Seater: N262BC 2010 Cirrus SR20 G3 - Dry Rate $125</li>
              <li>5 Seater: N422RJ 2013 Cirrus SR22 G5 - Dry Rate $160</li>
            </ul>
          </div>
        </div>
        <div className="text-xs pb-10 px-2 sm:px-0 ">
          *Financials are based on 18 members, all expenses split equally, and
          are subject to potential increases should overhead costs increase.
          Additional capital may be called from members for additional planned
          or unplanned expenses that arise. Airplane dry rates are also subject
          to change over time to optimize club financials.
        </div>
        <Button invert anchor="other">
          One Last Thing...
        </Button>
      </div>
    </section>
  );
};

export default Structure;
