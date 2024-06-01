import { Link } from "@inertiajs/react";

export default function BrandType({url,image,label}) {
    return (
        <Link href="" className="flex flex-col items-center justify-center h-24 px-3 overflow-hidden bg-white border-2 border-gray-200 rounded-md md:h-36 group">
            <img src={image} alt={name} className='transition-all duration-200 ease-in-out group-hover:scale-110'/>
            <div className="text-gray-800">{label}</div>
        </Link>
    )
}