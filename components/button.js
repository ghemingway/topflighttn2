/*** Copyright G. Hemingway @2022-2023 ***/
"use strict";

import { Link } from "react-scroll";

/**
 * Simple button
 * @param children
 * @param disabled
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Button = ({ children, anchor = "", invert = false, ...props }) => {
  const colors = invert ? "text-[#053254] bg-white" : "text-white bg-[#053254]";
  const bgHover = invert ? "hover:bg-[#aaa]" : "hover:bg-[#133b3b]";
  const shadow = invert ? "" : "shadow-sm shadow-black";

  const handleClick = () => {
    const local = !anchor.startsWith("http");
    if (local) {
      window.history.pushState({}, "", `/#${anchor}`);
    } else {
      window.location = anchor;
    }
  };

  return (
    <Link to={anchor} spy={true} smooth={true} duration={300}>
      <button
        className={`transition ease-in-out delay-150 rounded-sm ${shadow} cursor-pointer flex justify-center px-10 py-6 font-bold ${colors} ${bgHover}`}
        onClick={handleClick}
        {...props}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
