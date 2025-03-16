"use client";

import { useState } from "react";
import { AddApointmentScema } from "@/utils/validation";
import { patients, reservations } from "@/utils/utils";
import { toast } from "react-toastify";
import { v4 as uuid } from "uuid";
import { useStatusStore } from "@/store/getStatus";

const FormInputs = () => {


    const addPatient = useStatusStore(state => state.editAddPatient);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [bloodType, setBloodType] = useState('');
    const [appointmentType, setAppointmentType] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState(0);
    const [date, setDate] = useState('');
    const [details, setDetails] = useState('');

    const submitHandle = (e: React.FormEvent) => {
        e.preventDefault();

        const validation = AddApointmentScema.safeParse({
            firstName,
            lastName,
            bloodType,
            appointmentType,
            gender,
            age,
            date,
            details
        });

        if (!validation.success) {
            toast.error(validation.error.errors[0].message);
            console.log('error', validation.error.errors[0].message)
            return
        }

        const pID: string = uuid();
        const rID: string = uuid();

        patients.push({
            patientID: pID,
            pName: `${firstName} ${lastName}`,
            img: null,
            bloodType: bloodType,
            gender: gender,
            age: age,
            details: details,
        });

        reservations.push({
            reservationID: rID,
            patientID: pID,
            date: new Date(date),
            reservationType: appointmentType,
            available: false,
            state: false,
        });

        addPatient();
        console.log('successfully...')
        console.log(patients)
        console.log(reservations)
        toast.success("Add Appointments successfully");
    }

    const styles = {
        input: 'bg-(--bg-l) outline-none border border-(--t-s) rounded-md p-1',
        select: 'bg-(--bg-l) text-(--t-s) p-2 rounded-md border outline-none',
        button: 'bg-(--bg-l-blue) text-(--c-l-blue) p-2 w-full my-4 text-xl border rounded-lg hover:opacity-85 transition duration-100',
    }

    return (
        <form 
            onSubmit={submitHandle}
            className="p-4">
            <label htmlFor="fullName">Full Name</label>
            <div className="flex gap-2 my-2">

              <input 
                className={`${styles.input} w-[49%]`} 
                type="text" 
                name="fullName"  
                id="fullName" 
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                placeholder="First Name" />

              <input 
                className={`${styles.input} w-[49%]`} 
                type="text" 
                name="fullName" 
                id="fullName" 
                value={lastName}
                onChange={e => setLastName(e.target.value)}
                placeholder="Last Name" />

            </div>
            <div className="space-y-4 sm:space-y-8 mt-4 sm:mt-12">
                <div className="space-x-2">

                    <label htmlFor="bloodType">Blood Type: </label>
                    <select 
                        className={`${styles.select}`}
                        id="bloodType"
                        value={bloodType}
                        onChange={e => setBloodType(e.target.value)} 
                    >
                        <option value="">Choose</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                    </select>

                </div>
                <div>

                    <label htmlFor="appointmentType">Appointment Type: </label>
                    <select className={`${styles.select}`}
                        id="appointmentType"
                        value={appointmentType}
                        onChange={e => setAppointmentType(e.target.value)}
                    >
                        <option value="">Choose</option>
                        <option value="previous">Previous</option>
                        <option value="immediate">Immediate</option>
                        <option value="emergecy">Emergecy</option>
                    </select>

                </div>
                <div>

                    <label htmlFor="gender">Gender: </label>
                    <select className={`${styles.select}`}
                        id="gender"
                        value={gender}
                        onChange={e => setGender(e.target.value)}
                    >
                        <option value="">Choose</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>

                </div>
                <div className="space-y-2">

                    <label className="block" htmlFor="age">Age: </label>
                    <input 
                        className={`${styles.input} md:w-[49%]`}
                        type="number" 
                        name="age" 
                        id="age" 
                        value={age}
                        onChange={e => setAge(parseInt(e.target.value))}
                        placeholder="Enter patiet's age" />
                    
                      
                    <label className="block" htmlFor="date">Date: </label>
                    <input 
                        className={`${styles.input}`}
                        type="datetime-local" 
                        name="date" 
                        id="date" 
                        value={date}
                        onChange={e => setDate(e.target.value)} />
                    
                    <label className="block" htmlFor="details">Details: </label>
                    <textarea 
                        rows={5}
                        className={`${styles.input} w-full resize-none`} 
                        name="details" 
                        id="details" 
                        value={details}
                        onChange={e => setDetails(e.target.value)} 
                        placeholder="Enter Any details you need" />

                </div>
            </div>
            <button type="submit" 
                className={`${styles.button}`}>
                Add
            </button>
        </form>
    );
}

export default FormInputs;