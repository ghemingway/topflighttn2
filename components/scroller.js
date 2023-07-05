/*** Copyright G. Hemingway @2022-2023 ***/
"use strict";

import { animateScroll, scrollSpy } from "react-scroll";
import { AiOutlineArrowUp } from "react-icons/ai";
import { useEffect, useState } from "react";

const Scroller = () => {
  const [scrollVal, setScrollVal] = useState(0);
  const handleClick = () => {
    animateScroll.scrollToTop();
    window.history.pushState({}, undefined, "/");
  };

  useEffect(() => {
    setScrollVal(window.scrollY);
    window.addEventListener("scroll", (event) => {
      setScrollVal(window.scrollY);
    });
  }, []);

  const viz = scrollVal > 100;
  return (
    <>
      {viz ? (
        <button
          className="fixed right-1 bottom-1 rounded w-10 h-10 bg-gray-200/50 text-black/70 flex justify-center items-center text-2xl"
          onClick={handleClick}
        >
          <AiOutlineArrowUp />
        </button>
      ) : undefined}
    </>
  );
};

export default Scroller;
