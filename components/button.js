/*** Copyright G. Hemingway @2022-2023 ***/
"use strict";

/**
 * Simple button
 * @param children
 * @param disabled
 * @param onClick
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Button = ({ children, onClick = () => {}, invert = false, ...props }) => {
  const colors = invert ? "text-[#053254] bg-white" : "text-white bg-[#053254]";
  const bgHover = invert ? "hover:bg-[#aaa]" : "hover:bg-[#133b3b]";
  const shadow = invert ? "" : "shadow-sm shadow-black";
  return (
    <button
      className={`transition ease-in-out delay-150 rounded-sm ${shadow} cursor-pointer flex justify-center px-10 py-6 font-bold ${colors} ${bgHover}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
