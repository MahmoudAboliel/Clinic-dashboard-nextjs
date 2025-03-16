import { doctorInfo, IoMdArrowDropdown } from "@/utils/utils";
import Image from "next/image";
const DoctorInfo = () => {
  return (
    <div className="flex items-center gap-2 rounded-full p-1 hover:bg-(--bg-l) cursor-pointer transition delay-150 border border-(--t-s)">
      <Image className="w-[27px] h-[27px] rounded-full" width={30} height={30} src={doctorInfo.img} alt="" />
      <div className="max-sm:hidden">
        <p className="text-[12px] text-(--t-p)">{doctorInfo.dName}</p>
        <p className="text-[11px]">{doctorInfo.specialization}</p>
      </div>
      {<IoMdArrowDropdown />}
    </div>
  );
}

export default DoctorInfo;