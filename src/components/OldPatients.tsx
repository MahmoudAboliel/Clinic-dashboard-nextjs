
import HeaderSection from "@/components/HeaderSection";
import Image from "next/image";
import { format } from "date-fns";
import { OldPatient } from "@/utils/types";


interface OldPatientsProps {
    styles: string;
    oldPatients: OldPatient[];
}

const OldPatients = ({ styles, oldPatients }: OldPatientsProps) => {

    const titles = ['Patient Name', 'Visit ID', 'Date', 'Gender', 'Status'];

    return (
        <div className={`${styles}`}>
            <HeaderSection>Recent Patients</HeaderSection>
            <div className="container mx-auto">
                <div className="overflow-x-auto hidden-scrollbar ">
                    <table className="min-w-[600px] md:min-w-[90vw] w-full text-(--t-p)">
                        <thead className="bg-(--bg-d) rounded-lg text-xl mb-4 ">
                            <tr>
                                {titles.map((title, i) => 
                                    <td className=" p-4 border-y-2 border-gray-400"
                                        key={i}>
                                        {title}
                                    </td>
                                )}
                            </tr>
                        </thead>
                        <tbody className=" mt-4 space-y-3">
                            {oldPatients.map(old => 
                                <tr key={old.visitID} className=" text-(--t-s) my-2 bg-(--bg-l) p-2 rounded-lg">
                                    <td className="flex items-center gap-3 p-4 border-y border-gray-400">
                                        {old.img === null 
                                            ? (<div className="w-[40px] h-[40px] rounded-full bg-(--bg-d)" />) 
                                            : (<Image 
                                                className="w-[40px] h-[40px] rounded-full"
                                                src={old.img} alt="patient image" 
                                            />)}
                                        <p>{old.name}</p>
                                    </td>
                                    <td className="pl-10 border-y-2 border-gray-400">{old.visitID}</td>
                                    <td className="pl-5 border-y-2 border-gray-400">{format(old.date, "yyyy MMM")}</td>
                                    <td className="border-y-2 border-gray-400 pl-4">{old.gender}</td>
                                    <td className="border-y-2 border-gray-400 pl-4">{old.status}</td>
                                </tr>
                                )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default OldPatients