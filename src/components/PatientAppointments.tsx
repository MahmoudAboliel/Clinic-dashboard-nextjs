"use client";

import CardPatient from "@/components/CardPatient";
import HeaderSection from "@/components/HeaderSection";
import { CombineData } from "@/utils/types";

interface PatientAppProps {
    styles: string;
    data: CombineData[];
    updateAvailable: (id: string) => void;
    deletePatient: (id: string) => void;

}

const PatientAppointments = ({ styles, data, updateAvailable, deletePatient }: PatientAppProps) => {

    return (
        <div className={`${styles}`}>
            <HeaderSection>Patients Appointments</HeaderSection>
            <div className="bg-(--bg-l) p-1 rounded-lg h-[400px] overflow-y-auto hidden-scrollbar">
                {data.map(pat => 
                    <CardPatient 
                        key={pat.patientID}
                        type="notAvailable"
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
                        updateAvailable={updateAvailable}
                        />
                )}
            </div>
        </div>
    );
}

export default PatientAppointments;