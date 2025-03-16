import { Doctor, Patient, Reservation, OldPatient } from '@/utils/types';
import logo_1 from "@/assets/images/logo_1.png";
import logo_2 from "@/assets/images/logo_2.png";

import doctor_1 from "@/assets/images/doctor_1.jpg";
// import doctor_2 from "@/assets/images/doctor_2.jpg";
// import doctor_3 from "@/assets/images/doctor_3.jpg";
// import doctor_4 from "@/assets/images/doctor_4.jpg";
// import doctor_5 from "@/assets/images/doctor_5.jpg";

import patient_1 from "@/assets/images/patient_1.jpg";
import patient_2 from "@/assets/images/patient_2.jpg";
import patient_3 from "@/assets/images/patient_3.jpg";
import patient_4 from "@/assets/images/patient_4.jpg";
import patient_5 from "@/assets/images/patient_5.jpg";
import patient_6 from "@/assets/images/patient_6.jpg";
import patient_7 from "@/assets/images/patient_7.jpg";
import patient_8 from "@/assets/images/patient_8.jpg";
import patient_9 from "@/assets/images/patient_9.jpg";
import patient_10 from "@/assets/images/patient_10.jpg";
import patient_11 from "@/assets/images/patient_11.jpg";
import patient_12 from "@/assets/images/patient_12.jpg";
import patient_13 from "@/assets/images/patient_13.jpg";
import patient_14 from "@/assets/images/patient_14.jpg";
import patient_15 from "@/assets/images/patient_15.jpg";
import patient_16 from "@/assets/images/patient_16.jpg";
import patient_17 from "@/assets/images/patient_17.jpg";
// import patient_18 from "@/assets/images/patient_18.jpg";

import { PiSquaresFourBold } from "react-icons/pi";
import { MdDateRange, MdClose } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { MdOutlineAccessTime } from "react-icons/md";
import { TiMessages } from "react-icons/ti";
import { FaRegFileLines } from "react-icons/fa6";
import { GrSettingsOption } from "react-icons/gr";
import { BiCreditCard } from "react-icons/bi";
import { IoMdSearch } from "react-icons/io";
import { GoQuestion } from "react-icons/go";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { TbEmergencyBed } from "react-icons/tb";
import { IoIosToday } from "react-icons/io";
import { MdOutlineRateReview } from "react-icons/md";
import { IoIosPersonAdd } from "react-icons/io";
import { PiGenderMale } from "react-icons/pi";
import { PiGenderFemale } from "react-icons/pi";
import { FaChild } from "react-icons/fa6";

export { logo_1, logo_2 };
export { 
    IoMdSearch, 
    GoQuestion, 
    IoMdNotificationsOutline, 
    IoMdArrowDropdown, 
    IoMenu, 
    MdDateRange, 
    FiUser, 
    TbEmergencyBed, 
    IoIosToday, 
    MdOutlineRateReview,
    IoIosPersonAdd,
    PiGenderMale,
    PiGenderFemale,
    FaChild,
    MdClose,
};

export const links = [
    {
        label: 'Overview',
        icon: PiSquaresFourBold,
    },
    {
        label: 'Appointment',
        icon: MdDateRange,
    },
    {
        label: 'My Patient',
        icon: FiUser,
    },
    {
        label: 'Schedule Timings',
        icon: MdOutlineAccessTime,
    },
    {
        label: 'Payments',
        icon: BiCreditCard,
    },
    {
        label: 'Messages',
        icon: TiMessages,
    },
    {
        label: 'Blog',
        icon: FaRegFileLines,
    },
    {
        label: 'Settings',
        icon: GrSettingsOption,
    },
];

export const doctorInfo:Doctor = {
    dName: 'Maryam Omar',
    img: doctor_1,
    specialization: 'Internal Medicine',
    email: 'maryam@gmail.com',
    phoneNumber: '+963938293299'
}

export const patients: Patient[] = [
    {
        patientID: '1',
        pName: 'Layla Ahmed',
        img: patient_1,
        bloodType: 'A+',
        gender: 'female',
        age: 28,
        details: 'Some details about this patient Some details about this patient Some details about this patient Some details about this patient'
    },
    {
        patientID: '2',
        pName: 'Ali Hassan',
        img: patient_2,
        bloodType: 'A-',
        gender: 'male',
        age: 7,
        details: 'Some details about this patient Some details about this patient Some details about this patient Some details about this patient'
    },
    {
        patientID: '3',
        pName: 'Omar Khalid',
        img: patient_3,
        bloodType: 'B+',
        gender: 'male',
        age: 26,
        details: 'Some details about this patient Some details about this patient Some details about this patient Some details about this patient'
    },
    {
        patientID: '4',
        pName: 'Amina Khalid',
        img: patient_4,
        bloodType: 'B-',
        gender: 'female',
        age: 24,
        details: 'Some details about this patient Some details about this patient Some details about this patient Some details about this patient'
    },
    {
        patientID: '5',
        pName: 'Zahra Mahmoud',
        img: patient_5,
        bloodType: 'AB+',
        gender: 'female',
        age: 28,
        details: 'Some details about this patient Some details about this patient Some details about this patient Some details about this patient'
    },
    {
        patientID: '6',
        pName: 'Nour Hassan',
        img: patient_6,
        bloodType: 'AB-',
        gender: 'female',
        age: 25,
        details: 'Some details about this patient Some details about this patient Some details about this patient Some details about this patient'
    },
    {
        patientID: '7',
        pName: 'Khalid Mahmoud',
        img: patient_7,
        bloodType: 'O+',
        gender: 'male',
        age: 26,
        details: 'Some details about this patient Some details about this patient Some details about this patient Some details about this patient'
    },
    {
        patientID: '8',
        pName: 'Yasmin Ali',
        img: patient_8,
        bloodType: 'O-',
        gender: 'female',
        age: 24,
        details: 'Some details about this patient Some details about this patient Some details about this patient Some details about this patient'
    },
    {
        patientID: '9',
        pName: 'Sara Abdullah',
        img: patient_9,
        bloodType: 'A+',
        gender: 'female',
        age: 24,
        details: 'Some details about this patient Some details about this patient Some details about this patient Some details about this patient'
    },
    {
        patientID: '10',
        pName: 'Rana Mohammed',
        img: patient_10,
        bloodType: 'A-',
        gender: 'female',
        age: 24,
        details: 'Some details about this patient Some details about this patient Some details about this patient Some details about this patient'
    },
    {
        patientID: '11',
        pName: 'Hana Ibrahim',
        img: patient_11,
        bloodType: 'A+',
        gender: 'female',
        age: 24,
        details: 'Some details about this patient Some details about this patient Some details about this patient Some details about this patient'
    },
    {
        patientID: '12',
        pName: 'Hana Ibrahim',
        img: patient_12,
        bloodType: 'A+',
        gender: 'female',
        age: 24,
        details: 'Some details about this patient Some details about this patient Some details about this patient Some details about this patient'
    },
    {
        patientID: '13',
        pName: 'Youssef Ahmed',
        img: patient_13,
        bloodType: 'A+',
        gender: 'male',
        age: 24,
        details: 'Some details about this patient Some details about this patient Some details about this patient Some details about this patient'
    },
    
];

export const reservations: Reservation[] = [
    {
        reservationID: '1',
        patientID: '1',
        date: new Date(2025, 3, 4, 8),
        reservationType: 'previous',
        available: true,
        state: false,
    },
    {
        reservationID: '2',
        patientID: '2',
        date: new Date(2025, 3, 4, 10),
        reservationType: 'immediate',
        available: true,
        state: false,
    },
    {
        reservationID: '3',
        patientID: '3',
        date: new Date(2025, 3, 4, 9, 0),
        reservationType: 'emergency',
        available: false,
        state: false,
    },
    {
        reservationID: '4',
        patientID: '4',
        date: new Date(2025, 3, 4, 2),
        reservationType: 'previous',
        available: false,
        state: false,
    },
    {
        reservationID: '5',
        patientID: '5',
        date: new Date(2025, 3, 4, 8),
        reservationType: 'previous',
        available: true,
        state: false,
    },
    {
        reservationID: '6',
        patientID: '6',
        date: new Date(2025, 3, 4, 10),
        reservationType: 'immediate',
        available: true,
        state: false,
    },
    {
        reservationID: '7',
        patientID: '7',
        date: new Date(2025, 3, 4, 9, 0),
        reservationType: 'emergency',
        available: false,
        state: false,
    },
    {
        reservationID: '8',
        patientID: '8',
        date: new Date(2025, 3, 4, 2),
        reservationType: 'previous',
        available: false,
        state: false,
    },
    {
        reservationID: '9',
        patientID: '9',
        date: new Date(2025, 3, 4, 2),
        reservationType: 'previous',
        available: false,
        state: false,
    },
    {
        reservationID: '10',
        patientID: '10',
        date: new Date(2025, 3, 4, 2),
        reservationType: 'previous',
        available: false,
        state: false,
    },
    {
        reservationID: '11',
        patientID: '11',
        date: new Date(2025, 3, 4, 2),
        reservationType: 'previous',
        available: false,
        state: false,
    },
    {
        reservationID: '12',
        patientID: '12',
        date: new Date(2025, 3, 4, 2),
        reservationType: 'previous',
        available: false,
        state: false,
    },
    {
        reservationID: '13',
        patientID: '13',
        date: new Date(2025, 3, 4, 2),
        reservationType: 'previous',
        available: false,
        state: false,
    },
];

export const oldPatients: OldPatient[] = [
    {
       visitID: '1',
       name: 'Nour Ali',
       img: patient_14,
       date: new Date(2024, 7, 1),
       gender: 'Male',
       status: 'Out-Patient'
    },
    {
       visitID: '2',
       name: 'Nour Ali',
       img: patient_15,
       date: new Date(2024, 7, 1),
       gender: 'Male',
       status: 'Out-Patient'
    },
    {
       visitID: '3',
       name: 'Nour Ali',
       img: patient_16,
       date: new Date(2024, 7, 1),
       gender: 'Male',
       status: 'Out-Patient'
    },
    {
       visitID: '4',
       name: 'Nour Ali',
       img: patient_17,
       date: new Date(2024, 7, 1),
       gender: 'Male',
       status: 'Out-Patient'
    },
];