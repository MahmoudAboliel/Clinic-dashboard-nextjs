import HeaderSection from "@/components/HeaderSection";
import { PiGenderMale, PiGenderFemale, FaChild } from "@/utils/utils";

interface GenderProps {
    styles: string;
}
const Gender = ({ styles }: GenderProps) => {
  return (
    <div className={`${styles}`}>
        <HeaderSection>Gender</HeaderSection>
        <div className="bg-(--bg-l) p-3 rounded-lg space-y-5">
            <div className="flex items-center gap-4 ">
                {<PiGenderMale className={`text-5xl text-(--c-l-blue) bg-(--bg-l-blue) p-1 rounded-full`} />}
                <p className="text-(--t-p) font-semibold text-2xl">
                    { 2 }
                    <br />
                    <span className="text-(--t-s) text-sm font-normal">{'Male'}</span>
                </p>
            </div>
            <div className="flex items-center gap-4 ">
                {<PiGenderFemale className={`text-5xl text-(--c-yellow) bg-(--bg-yellow) p-1 rounded-full`} />}
                <p className="text-(--t-p) font-semibold text-2xl">
                    { 2 }
                    <br />
                    <span className="text-(--t-s) text-sm font-normal">{'FeMale'}</span>
                </p>
            </div>
            <div className="flex items-center gap-4 ">
                {<FaChild className={`text-5xl text-(--c-d-blue) bg-(--bg-d-blue) p-1 rounded-full`} />}
                <p className="text-(--t-p) font-semibold text-2xl">
                    { 2 }
                    <br />
                    <span className="text-(--t-s) text-sm font-normal">{'Child'}</span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Gender