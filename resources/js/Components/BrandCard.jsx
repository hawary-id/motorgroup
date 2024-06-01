import { Link } from "@inertiajs/react";

export default function BrandCard({image,label,slug}) {
    return (
        <Link href={route('vehicle.show',slug)} className="flex items-center justify-center h-24 px-3 overflow-hidden bg-white border-2 border-gray-200 rounded-md md:h-36 group">
            <img src={image} alt={label} className='transition-all duration-200 ease-in-out group-hover:scale-110 h-9 md:h-14'/>
        </Link>
    )
}