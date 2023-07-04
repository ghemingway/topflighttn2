/*** Copyright G. Hemingway @2022-2023 ***/
"use strict";

import Link from "next/link";
import Button from "@/components/button";

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
const Contact = () => {
  return (
    <section
      id="contact"
      className="py-32 bg-[#053254] text-white flex items-center justify-center"
    >
      <div className="max-w-[50rem] flex flex-col items-center justify-center text-center">
        <h2 className="text-[1.875rem] font-bold pb-2">Contact Us!</h2>
        <p className="font-thin text-xl pb-12">
          Interested in joining us? Please contact at{" "}
          <mailto>flying@topflighttn.com</mailto>.
        </p>
        <Link href="https://m.me/topflighttn">
          <Button invert>Message us on Facebook</Button>
        </Link>
      </div>
    </section>
  );
};

export default Contact;
