"use client";

import { format } from "date-fns";
import Image, { StaticImageData } from "next/image";

interface CardPatientProps {
    name: string;
    img: StaticImageData | null;
    age: number;
    gender: string;
    date: Date;
    reservationType: string;
    patientID: string;
    reservationID: string;
    state: boolean;
    deletePatient: (id: string) => void;
    updateAvailable?: (id: string) => void;
    updateState?: (id: string) => void;
    type: string;
}

const CardPatient = ({name, img, age, gender, date, reservationID, patientID, reservationType, state, deletePatient, updateAvailable, updateState, type }: CardPatientProps) => {
    const styleType = reservationType === 'previous'
                        ? 'border-(--c-d-blue)'
                        : reservationType === 'immediate'
                        ? 'border-(--c-l-blue)'
                        : 'border-(--c-red)';

    return (
        <div className={`flex items-center justify-between mb-1 border-l-4 p-3 ${styleType}`}>
            <div className="flex flex-wrap items-center gap-3">
                {img === null 
                ? (<div className="w-[40px] h-[40px] rounded-full bg-(--bg-d)" />) 
                : (<Image src={img} alt="image patient" className="w-[40px] h-[40px] rounded-full" />)}
                <div>
                    <h4 className="text-(--t-p) font-semibold">{name}</h4>
                    <p className="text-(--t-s) text-sm">{age} {gender}, {format(date, "d MMM, h:mm a")}</p>
                </div>
                {/* <span className={`${styleType} px-2 py-1 font-semibold rounded-md`}>
                    {reservationType}
                </span> */}
            </div>
            <div className="flex flex-col gap-2">
                <button 
                    onClick={() => {
                        if (type === 'notAvailable') deletePatient(patientID);
                        else if (updateState) updateState(patientID);
                    }}
                    className={`
                        ${type === 'notAvailable' ? 'bg-(--bg-red) text-(--c-red)' : 'bg-(--bg-yellow) text-(--c-yellow)'} 
                        cursor-pointer font-semibold px-2 py-1 rounded-md border hover:opacity-85 transition duration-100`}
                    >
                    {type === 'notAvailable' ? 'Cancel' : state ? 'Ongoing' : 'Start'}
                </button>
                <button 
                    onClick={() => {
                        if (type === 'notAvailable' && updateAvailable) 
                            updateAvailable(reservationID);
                        else deletePatient(patientID);
                    }}
                    className={`
                        ${type === 'notAvailable' ? 'bg-(--bg-yellow) text-(--c-yellow)' : 'bg-(--bg-l-blue) text-(--c-l-blue)'} 
                        cursor-pointer font-semibold px-2 py-1 rounded-md border hover:opacity-85 transition duration-100`}>
                    {type === 'notAvailable' ? 'Update' : 'Done'}
                </button>
            </div>
        </div>
    );
}

export default CardPatient;