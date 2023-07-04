/*** Copyright G. Hemingway @2022-2023 ***/
"use strict";

import { Source_Sans_3 } from "next/font/google";
const Source = Source_Sans_3({ subsets: ["latin"] });
import Header from "@/components/header";
import About from "@/components/about";
import Services from "@/components/services";
import Membership from "@/components/membership";
import Contact from "@/components/contact";
import Portfolio from "@/components/portfolio";
import Chart from "@/components/chart";
import Footer from "@/components/footer";


export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Services />
      <Membership />
      <Portfolio />
      <Contact />
      <Chart />
      <Footer />
    </>
  );
}
