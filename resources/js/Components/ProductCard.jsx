import { Link } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function ProductCard({url,name,image,grades_count}) {
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     const pulseTimeout = setTimeout(() => {
    //         setLoading(false); 
    //     }, 1000);

    //     return () => clearTimeout(pulseTimeout);
    // }, []);
    return (
        
        <Link href="" className='border rounded-md group md:border-none'>
            <img src={image} className='w-full p-10 transition-all duration-300 ease-in-out group-hover:scale-110'/>
            <div className="pb-3 text-lg font-bold text-center text-red-600 border-b group-hover:text-red-700">{name}</div>
            <div className="py-3 font-light text-center text-gray-600">{grades_count} Grade available</div>
        </Link>
    )
}