import { Link } from "@inertiajs/react";
import { FaArrowRight } from "react-icons/fa6";

export default function PartCard({image}) {
    return (
        <div className="relative flex flex-col justify-between rounded-md md:h-[290px] overflow-hidden">
            <img src={image} className="object-cover w-full"/>
            <Link herf="" className="absolute inline-flex items-center gap-3 px-3 py-2 bg-white rounded text-primary hover:bg-primary group hover:text-white w-fit bottom-5 left-5 md:bottom-8 md:left-8">
                <span className="whitespace-nowrap">Shop Now</span>
                <FaArrowRight className='transition-all duration-200 ease-in-out text-primary group-hover:translate-x-1 group-hover:text-white'/>
            </Link>
        </div>
    )
}