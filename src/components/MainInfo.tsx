"use client";

import { MdDateRange, TbEmergencyBed, IoIosToday, MdOutlineRateReview } from "@/utils/utils";
import gsap from "gsap";
import { useEffect } from "react";
import CardMainInfo from "@/components/CardMainInfo";
import { useAllAppointmentsStore } from "@/store/getAllAppointments";

const MainInfo = () => {

    const countPatients = useAllAppointmentsStore(state => state.countAppointments);
    const getCountPatients = useAllAppointmentsStore(state => state.getCountAppointments);
    
    
    useEffect(() => {
        const t1 = gsap.timeline();
        t1.from(".box1", { duration: 1, y: -300, opacity: 0});
        t1.from(".box2", { duration: 1, y: -300, opacity: 0});
        t1.from(".box3", { duration: 1, y: -300, opacity: 0});
        t1.from(".box4", { duration: 1, y: -300, opacity: 0});
    }, []);

    useEffect(() => {
        getCountPatients();
    }, [countPatients, getCountPatients]);
    

  return (
    <div className="container mx-auto">
        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-2 lg:grid-cols-4`}>
            <CardMainInfo 
                styles="box1 bg-(--c-l-blue)"
                Icon={MdDateRange}
                count={countPatients}
                text="All Appointments"
            />
            <CardMainInfo 
                styles="box2 bg-(--c-red)"
                Icon={TbEmergencyBed}
                count={144}
                text="Emergency status"
            />
            <CardMainInfo 
                styles="box3 bg-(--c-yellow)"
                Icon={IoIosToday}
                count={144}
                text="Today Appointments"
            />
            <CardMainInfo 
                styles="box4 bg-(--c-d-blue)"
                Icon={MdOutlineRateReview}
                count={144}
                text="Old Reviews"
            />
        </div>
    </div>
  );
}

export default MainInfo;