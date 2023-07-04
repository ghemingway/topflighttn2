/*** Copyright G. Hemingway @2022-2023 ***/
"use strict";

import Link from "next/link";
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
      className="py-32 bg-[#f8f9fa] text-[#212529] flex flex-col items-center justify-center"
    >
      <div className="max-w-[50rem] flex flex-col items-center justify-center text-center">
        <h2 className="text-[1.875rem] font-bold pb-2">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          What we're up to
        </h2>
        <Link href="#contact">
          <Button>Get in Touch</Button>
        </Link>
        <div>
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
