"use client";

import PatientsAppointments from "@/components/PatientAppointments";
import CountPatient from "@/components/CountPatient";
import AddNewPatient from "@/components/AddNewPatient";
import Gender from "@/components/Gender";
import AvailableAppointments from "@/components/AvailableAppointments";
import OldPatients from "@/components/OldPatients";
import ReservationsType from "@/components/ReservationsType";
import { useEffect, useState, useMemo } from "react";
import { reservations, patients, oldPatients } from "@/utils/utils";
import { CombineData } from "@/utils/types";
import gsap from "gsap";
import { useStatusStore } from "@/store/getStatus";
import { toast } from "react-toastify";
import { v4 as uuid } from "uuid";

const Appointments = () => {

  const [resState, updateResState] = useState(reservations); 
  const [patState, updatePatState] = useState(patients); 
  const [oldState, updateOldState] = useState(oldPatients); 

  // الحالة تتحدث عند اضافة مريض جديد لتحديث البيانات
  const addPatientState = useStatusStore(state => state.addPatient);

  const deletePatientState = useStatusStore(state => state.deletePatient);
  const editDeletePatientState = useStatusStore(state => state.editDeletePatient);

  // تحديث الحالة عندما يحضر المريض إلى العيادة
  const updateAvailable = (id: string) => {
      const updatedReservation = reservations.map(res => 
          res.reservationID === id ? {...res, available: true} : res
      );

      updateResState(updatedReservation);
  }

  // تحديث الحالة عندما يبدأ المريض بالعلاج
  const updateState = (id: string) => {
      const updatedReservation = reservations.map(res => 
          res.reservationID === id ? {...res, state: true} : res
      );

      updateResState(updatedReservation);
  }

  const deletePatient = (id: string) => {
    try {
      data.map(d => {
        if (d.patientID === id) {
          const visitID = uuid();
          oldState.push({
            visitID: visitID,
            name: d.patientInfo.pName,
            img: d.patientInfo.img,
            date: d.date,
            gender: d.patientInfo.gender,
            status: 'Out-Patient'
          });

          updateOldState(oldState);
        }

      }
      );

      const newRes = resState.filter(res => 
        res.patientID !== id);
      const newPat = patState.filter(pat => 
        pat.patientID !== id);

      updateResState(newRes);
      updatePatState(newPat);
      toast.success("delete patient successfully");
      editDeletePatientState();
    } catch {
      console.log("some thing wrong");
      toast.error("some thing wrong")
    }
  }

  const data: CombineData[] = useMemo(() => {
      return resState.map(res => {
        const patient = patState.find(pat => pat.patientID === res.patientID);
        if (!patient) {
          console.warn("Not found patient");
          return null;
        }

        return {
          ...res,
          patientInfo: patient,
        };
      });

    console.log(addPatientState, deletePatientState);

  }, [resState, patState, addPatientState, deletePatientState]).filter(d => d !== null);

  useEffect(() => {
    gsap.from(".all-patient", { duration: 1, x: -200 });
    gsap.from(".count-patient", { duration: 2, x: 200 });
    gsap.from(".gender", { duration: 3, x: 200 });
    gsap.from(".add-patient", { duration: 4, x: -200 });
    gsap.from(".available-patient", { duration: 5, x: 200 });
    gsap.from(".old-patient", { duration: 6, y: 200 });
   

  }, []);

  

  return (
    <section className="appointments ">
      <ReservationsType 
        styles=""/>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <PatientsAppointments 
          styles="all-patient p-2 col-span-1"
          data={data.filter(d => !d.available)}
          updateAvailable={updateAvailable} 
          deletePatient={deletePatient}
        />
        <AvailableAppointments 
          styles="available-patient"
          data={data.filter(d => d.available)}
          updateState={updateState}
          deletePatient={deletePatient}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-content-streach">
        <AddNewPatient 
          styles="add-patient "  />
        <CountPatient 
          styles="count-patient " />
        <Gender 
          styles="gender "/>
      </div>
      <OldPatients 
        styles="old-patient w-full " 
        oldPatients={oldPatients}/>
    </section>
  )
}

export default Appointments