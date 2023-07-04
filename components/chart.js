/*** Copyright G. Hemingway @2022-2023 ***/
"use strict";

import Image from "next/image";
import chartImg from "../images/chart.jpg";

const imageStyle = {};

const Chart = () => {
  return (
    <section id="chart" className="w-full border-gray-500/70 border-y-[1px]">
      <a
        href="https://skyvector.com/?ll=36.183194854857554,-86.88654326814626&chart=301&zoom=1"
        style={{ width: "100%", height: "500px" }}
      >
        <Image
          src={chartImg}
          alt="TopFlight Aviation Banner"
          style={imageStyle}
        ></Image>
      </a>
    </section>
  );
};

export default Chart;
