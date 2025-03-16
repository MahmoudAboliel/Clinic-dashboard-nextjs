import { IconType } from "react-icons";

interface CardMainInfoProps {
    styles: string;
    Icon: IconType;
    count: number;
    text: string;
}
const CardMainInfo = ({ styles, Icon, count, text }: CardMainInfoProps) => {
  return (
    <div className={`${styles} text-(--t-p) p-4 rounded-md flex justify-start items-center gap-2`}>
        {<Icon className="text-5xl  bg-[rgb(255,255,255,20%)] p-2 rounded-full" />}
        <p className="text-lg font-[600]">{count} <br /><span className="text-sm">{text}</span></p>
    </div>
  );
}

export default CardMainInfo;