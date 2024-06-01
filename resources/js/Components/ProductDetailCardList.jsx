import { Link } from "@inertiajs/react";
import { FaRegHeart } from "react-icons/fa6";
import { IoMdArrowDropright } from "react-icons/io";

export default function ProductDetailCardList({image,name,price,discount,fuelType,transmission,driveType,steeringType,label,url}) {
    return (
        <div className="flex flex-col overflow-hidden border rounded-md md:flex-row md:gap-6">
            <img src={image} alt={name} className='object-cover w-full md:w-[24%]'/>
            <div className="w-full p-3">
                <h3 className='mb-3 font-bold text-primary md:text-xl'>{name}</h3>
                <div className="font-semibold text-primary whitespace-nowrap">$ {price} USD FOB</div>
                <div className="mb-3 text-sm font-light text-gray-600">$ {discount} USD FOB</div>
                <div className="flex flex-col w-full gap-2 py-3 font-light border-t md:gap-3 md:mb-5 md:flex-row">
                    <div className="flex items-center text-gray-700">
                        <IoMdArrowDropright className='text-2xl'/>
                        {fuelType}
                    </div>
                    <div className="flex items-center text-gray-700">
                        <IoMdArrowDropright className='text-2xl'/>
                        {transmission}
                    </div>
                    <div className="flex items-center text-gray-700">
                        <IoMdArrowDropright className='text-2xl'/>
                        {driveType}
                    </div>
                    <div className="flex items-center text-gray-700">
                        <IoMdArrowDropright className='text-2xl'/>
                        {steeringType}
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Link href={url} className="w-full px-3 pt-[10px] pb-3 text-sm text-center text-white rounded bg-primary md:w-fit md:text-base hover:bg-gray-700">{label}</Link>
                    <Link href="" className="px-[13px] py-[12px] md:py-[14px] text-center text-gray-700 bg-white border border-gray-500 rounded md:text-base whitespace-nowrap hover:bg-primary hover:text-white hover:border-primary"><FaRegHeart/></Link>
                </div>
            </div>
        </div>
    )
}