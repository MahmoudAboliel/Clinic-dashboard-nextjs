"use client";

import { useEffect } from "react";
import gsap from "gsap";

interface HeaderSectionProps {
    children: React.ReactNode;
}

const HeaderSection = ({ children }: HeaderSectionProps) => {

  useEffect(() => {
    gsap.from(".section-header", {
      y: -10,
      opacity: 5,
      duration: 1,
    });
  }, []);

  return (
    <h2 className="section-header text-2xl text-(--t-p) mb-2 mt-4">{children}</h2>
  )
}

export default HeaderSection