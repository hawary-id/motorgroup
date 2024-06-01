import { GiPriceTag } from "react-icons/gi";

export default function ValueCard({icon,title,subtitle}) {
    return (
        <div className="flex flex-col items-center justify-center">
            <GiPriceTag className='text-4xl font-semibold text-center text-violet-700'/>
            <div className="font-semibold text-center text-primary md:text-2xl">{title}</div>
            <p className='text-sm font-light text-center text-gray-500'>{subtitle}</p>
        </div>
    )
}