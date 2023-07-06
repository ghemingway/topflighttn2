/*** Copyright G. Hemingway @2022-2023 ***/
"use strict";

import Button from "@/components/button";

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
const Portfolio = () => {
  return (
    <section
      id="portfolio"
      name="portfolio"
      className="py-32 bg-[#053254] text-white flex flex-col items-center justify-center"
    >
      <div className="max-w-[50rem] flex flex-col items-center justify-center text-center">
        <h2 className="text-[1.875rem] font-bold pb-2">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          What We're Up To
        </h2>
        <Button invert anchor="contact">
          Get in Touch
        </Button>
        <div className="mt-8">
          <script
            src="https://assets.juicer.io/embed.js"
            type="text/javascript"
            defer
          ></script>
          <link
            href="https://assets.juicer.io/embed.css"
            media="all"
            rel="stylesheet"
            type="text/css"
          />
          <ul
            className="juicer-feed"
            data-feed-id="topflighttn-19f81499-8c31-419c-aa74-8fcbdfa5071f"
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
