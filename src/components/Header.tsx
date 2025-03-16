"use client";

import { IoMdSearch, GoQuestion, IoMdNotificationsOutline, IoMenu } from "@/utils/utils"
import DoctorInfo from "@/components/DoctorInfo";
import { useStatusStore } from "@/store/getStatus";

const Header = () => {

    const editMenu = useStatusStore(state => state.editMenu);
    return (
        <header className="fixed top-0 left-0 w-full h-[60px] z-50 flex items-center gap-3 bg-(--bg-d) text-(--t-s) p-2 shadow shadow-gray-900">
            <button
                onClick={editMenu}>
                {<IoMenu
                    className=" text-(--t-p) text-2xl cursor-pointer" />}
            </button>
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        {<IoMdSearch className="text-2xl" />}
                        <form className="max-md:hidden flex items-center gap-2 shrink">
                            <input 
                                className="outline-hidden"
                                type="search" 
                                name="search" 
                                id="search" 
                                placeholder="Search Appointment, patient or etc" />
                        </form>
                    </div>
                    <div className="flex items-center gap-2 text-xl">
                        {<GoQuestion className="cursor-pointer" />}
                        {<IoMdNotificationsOutline className="cursor-pointer" />}
                        <DoctorInfo />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;