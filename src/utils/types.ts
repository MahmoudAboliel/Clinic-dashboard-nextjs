import { StaticImageData } from "next/image";

export type Doctor = {
    dName: string;
    img: StaticImageData;
    specialization: string;
    email: string;
    phoneNumber: string;
}  

export type Patient = {
    patientID: string;
    pName: string;
    img: StaticImageData | null;
    bloodType: string, // 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
    gender: string, // 'male' | 'female';
    age: number;
    details: string;
}

export type Reservation = {
    reservationID: string;
    patientID: string;
    date: Date;
    reservationType: string, //'previous' | 'immediate' | 'emergency';
    available: boolean; // اذا حضر او لم يحضر الى العيادة 
    state: boolean, // 'watting' | 'ongoing' | false; // اذا حضر للعيادة هل بدأ او مازال ينتظر والفولس لعدم الحضور بعد
}

export type CombineData = Reservation & { patientInfo: Patient };

export type OldPatient = {
    visitID: string;
    name: string;
    img: StaticImageData | null;
    date: Date;
    gender: string;
    status: string;
}