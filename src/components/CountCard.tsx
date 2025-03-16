"use client";

import { FiUser } from "@/utils/utils";

interface CountCardProps {
    count: number;
    text: string;
    styles: string;
}

const CountCard = ({ count, text, styles }: CountCardProps) => {

    return (
        <div className="flex items-center gap-4">
            {<FiUser className={`${styles} text-5xl p-2 rounded-full`} />}
            <p className="text-(--t-p) font-semibold text-xl">
                { count }
                <br />
                <span className="text-(--t-s) text-sm font-normal">{text}</span>
            </p>
        </div>
    );
}

export default CountCard;