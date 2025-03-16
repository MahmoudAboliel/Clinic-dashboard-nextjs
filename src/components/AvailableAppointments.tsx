"use client";

import HeaderSection from "@/components/HeaderSection";
import { CombineData } from "@/utils/types";
import CardPatient from "@/components/CardPatient";

interface TodayProps {
    styles: string;
    data: CombineData[];
    updateState: (id: string) => void;
    deletePatient: (id: string) => void;
}
const AvailableAppointments = ({ styles, data, updateState, deletePatient }: TodayProps) => {

    return (
        <div className={`${styles}`}>
            <HeaderSection>Available Appointments</HeaderSection>
            <div className="bg-(--bg-l) p-1 rounded-lg h-[400px] overflow-y-auto hidden-scrollbar">
                {data.map(pat => 
                    <CardPatient 
                    key={pat.patientID}
                    type="available"
                    patientID={pat.patientID}
                    name={pat.patientInfo.pName}
                    img={null}
                    age={pat.patientInfo.age}
                    gender={pat.patientInfo.gender}
                    date={pat.date}
                    reservationID={pat.reservationID}
                    reservationType={pat.reservationType}
                    state={pat.state}
                    deletePatient={deletePatient}
                    updateState={updateState}
                    />
                )}
            </div>
        </div>
    );
}

export default AvailableAppointments;