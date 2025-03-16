"use client";

import { useEffect } from "react";
import { logo_2 } from "@/utils/utils";
import Image from "next/image";
import { links } from "@/utils/utils";
import Link from "next/link";
import gsap from "gsap";
import { IoMenu } from "@/utils/utils";
import { useStatusStore } from "@/store/getStatus";


const Navbar = () => {

  const isOpen = useStatusStore(state => state.isOpenMenu);
  const editMenu = useStatusStore(state => state.editMenu);

 
  const classes = {
    link: 'text-black bg-(--t-p) p-2 rounded-md mb-1',
    label: 'text-[16px]',
    icon: 'text-[25px]',
   };

  useEffect(() => {
    gsap.to('.sidebar', {
      x: isOpen ? 0 : '-100%',
      duration: .5,
    });
  }, [isOpen]);
   

  return (
      <div className={`sidebar bg-(--bg-l) w-[250px] fixed top-0 left-0 h-screen p-4 shadow shadow-gray-950 z-100 -translate-x-[500%]  `}>
        <button
            onClick={editMenu}>
            {<IoMenu
                className=" text-(--t-p) text-2xl cursor-pointer mt-4" />}
        </button>
        <Link href="/">
          <div className="flex items-center gap-3 my-7 py-3 px-4 shadow-inner shadow-gray-900 rounded-lg w-fit">
            <Image src={logo_2} alt="logo" width={35} height={35} className="rounded-md w-[35px] h-[35px]" />
            <p className="text-2xl font-semibold text-(--t-p)">
            <span className="text-(--c-red)">Doc</span>tor
            </p>
          </div>
        </Link>
        <ul>
          {links.map((link, index) => 
          <li key={index}>
            <Link href="/#" className={`w-full flex items-center gap-3 font-[550] hover:bg-white hover:opacity-75 hover:text-black p-2 rounded-md ${index === 0 ? classes.link : 'text-(--t-s)'}`}>
              {<link.icon className={`text-2xl ${index === 0 && classes.icon}`} />}
              <p className={`text-[15px] ${index === 0 && classes.label}`}>{link.label}</p>
            </Link>
          </li>)}
        </ul>
      </div>
    
  );
}

export default Navbar;