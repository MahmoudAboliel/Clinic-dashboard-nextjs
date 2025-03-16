"use client";

import HeaderSection from "@/components/HeaderSection";
import { IoIosPersonAdd } from "@/utils/utils";
import { useEffect, useState } from "react";
import gsap from "gsap";
import FormInputs from "@/components/FormInputs";

interface AddPatientProps {
  styles: string;
}
const AddNewPatient = ({ styles }: AddPatientProps) => {

  const [openAddMenu, setOpenAddMenu] =useState(false);

  
  useEffect(() => {
    gsap.to(".form-add-patient", {
      x: openAddMenu ? 0 : '150%',
      z: 60,
      duration: 2,
    });
  }, [openAddMenu]);

  return (
    <>
      <div className={`${styles} relative`}>
          <HeaderSection>Add Patient</HeaderSection>
          <div className="bg-(--bg-l) p-3 rounded-lg space-y-5">
            <div className="flex items-center gap-4">
              {<IoIosPersonAdd className="text-(--c-l-blue) bg-(--bg-l-blue) text-6xl p-1 rounded-full" />}
              <p className="text-(--t-p) text-xl">New Appointment</p>
            </div>
            <button 
              onClick={() => setOpenAddMenu(true)}
              className="bg-(--bg-l-blue) w-full rounded-md text-2xl text-(--c-l-blue) border hover:opacity-85 cursor-pointer duration-100">
              Add
            </button>
          </div>
      </div>

      <div className="form-add-patient hidden-scrollbar fixed right-10 top-20 w-8/10 md:w-[500px] h-[70vh] z-[60]  overflow-y-auto text-(--t-p) rounded-lg bg-(--bg-d) shadow-sm border border-(--c-l-blue) shadow-gray-950 translate-x-[150%]">
        <div className="flex items-centern justify-between border-b border-(--c-l-blue) h-[40px]">
            <h2 className="text-xl flex items-center gap-3 p-2">
              {<IoIosPersonAdd className="text-(--c-l-blue) bg-(--bg-l-blue) text-3xl rounded-full " />}
              Add Patient
            </h2>
          <button 
            onClick={() => {
              setOpenAddMenu(false);
            }}
            className="bg-(--bg-red) text-(--c-red) w-15  hover:opacity-80">
              X
            </button>
        </div>
          <FormInputs />
      </div>
    </>
  );
}

export default AddNewPatient;