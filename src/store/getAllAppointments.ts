import { patients, reservations } from "@/utils/utils";
import { CombineData } from "@/utils/types";
import { create } from 'zustand';


interface getAllAppointments {

  allAppointments: CombineData[];
  getAllAppointments: () => void;
  
  countAppointments: number;
  getCountAppointments: () => void;

  updateAvailable: (id: string) => void;
  
  updateState: (id: string) => void;
}

export const useAllAppointmentsStore = create<getAllAppointments>()((set) => ({
    
  allAppointments: [],
  getAllAppointments: () => {

    const data: CombineData[] = reservations
      .map(res => {
            const patient = patients.find(pat => pat.patientID === res.patientID);
            if (!patient) 
                throw new Error(`Patient with ID ${res.patientID} Not found`);

            return {
                ...res,
                patientInfo: patient
            }
          });
      set(() => ({ allAppointments: data }));
  },

  countAppointments: 0,
  getCountAppointments: () => 
    set(() => ({ countAppointments: reservations.length })),
  
  updateAvailable: (id) => {
    reservations.map(res => 
      res.reservationID === id ? {...res, available: true } : res
    )
  },

  updateState: (id) => {
    reservations.map(res => 
      res.reservationID === id ? {...res, state: true } : res
    )
  }
}));