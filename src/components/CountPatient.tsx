"use client";

import HeaderSection from "@/components/HeaderSection";
import CountCard from "@/components/CountCard";
import { useAllAppointmentsStore } from "@/store/getAllAppointments";

interface CountPatientProps {
    styles: string;
}

const CountPatient = ({ styles }: CountPatientProps) => {

    const countNewAppointments = useAllAppointmentsStore(state => state.countAppointments);
  
    return (
        <div className={`${styles}`}>
            <HeaderSection>Patients</HeaderSection>
            <div className="bg-(--bg-l) px-2 py-5 space-y-5 rounded-lg">
                <CountCard 
                    count={countNewAppointments}
                    text="New Patient"
                    styles="text-(--c-l-blue) bg-(--bg-l-blue)"
                />
                <CountCard 
                    count={2}
                    text="Old Patient"
                    styles="text-(--c-yellow) bg-(--bg-yellow)"
                />
                <CountCard 
                    count={6}
                    text="Total Patient"
                    styles="text-(--c-d-blue) bg-(--bg-d-blue)"
                />
            </div>
        </div>
    );
}

export default CountPatient;