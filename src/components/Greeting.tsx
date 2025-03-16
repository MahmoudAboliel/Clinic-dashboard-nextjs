"use client";

import { doctorInfo } from "@/utils/utils";
import { useEffect } from "react";
import gsap from "gsap";

const Greeting = () => {

  useEffect(() => {
    gsap.from(".greet", { x: -200, duration: 1, opacity: 0 });
  }, []);

  return (
    <div className="greet mt-5 text-center sm:text-start">
        <h1 className="text-lg sm:text-2xl text-(--t-p) my-">Welcome: Dr.{doctorInfo.dName}</h1>
        <p className="text-(--t-s)">have a nice day at great work</p>
    </div>
  );
}

export default Greeting;