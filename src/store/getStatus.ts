
import { create } from 'zustand';


interface getStatus {
    isOpenMenu: boolean;
    editMenu: () => void;

    active: number;
    editActive: (id: number) => void;

    addPatient: number;
    editAddPatient: () => void;

    deletePatient: number;
    editDeletePatient: () => void;
}

export const useStatusStore = create<getStatus>()((set) => ({
    isOpenMenu: false,
    editMenu: () => set((state) => ({ isOpenMenu: !state.isOpenMenu })),

    active: 0,
    editActive: (name) => set(() => ({ active: name })),

    addPatient: 0,
    editAddPatient: () => set((state) => ({ addPatient: state.addPatient + 1 })),
    
    deletePatient: 0,
    editDeletePatient: () => set((state) => ({ addPatient: state.addPatient + 1 })),
}));