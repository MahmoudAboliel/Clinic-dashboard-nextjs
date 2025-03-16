"use client";
;
import Image from "next/image";
import { logo_2 } from "@/utils/utils";
import { useStatusStore } from "@/store/getStatus";
import { useEffect } from "react";
import gsap from "gsap";

const Logo = () => {

  const isOpen = useStatusStore(state => state.isOpenMenu);

  useEffect(() => {
    gsap.to('.logo-text', {

    });
  }, [isOpen]);

  return (
    <div className="flex items-center gap-3 mt-10 mb-8 p-1 md:py-3 md:px-4 shadow shadow-gray-900 rounded-sm md:rounded-lg w-fit">
        <Image src={logo_2} alt="logo" width={35} height={35} className="rounded-full w-[35px] h-[35px]" />
        <p className="logo-text  hidden md:block text-2xl font-semibold text-(--t-p)">
        <span className="text-(--c-red)">Doc</span>tor
        </p>
    </div>
  )
}

export default Logo