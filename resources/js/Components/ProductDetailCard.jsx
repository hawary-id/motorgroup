import { Link } from "@inertiajs/react";
import { FaRegHeart } from "react-icons/fa6";

export default function ProductDetailCard({image,title,price,discount,label,url,target=false}) {
    return (
        <div className="relative w-full border border-gray-200 rounded-md">
            <button className="absolute p-2 bg-white rounded-full text-primary top-3 right-3 hover:bg-primary hover:text-white">
                <FaRegHeart/>
            </button>
            <div className="w-full overflow-hidden rounded-t-md">
                <img src={image} alt="" className="w-full" />
            </div>
            <div className="p-3 md:p-5">
                <h3 className="mb-3 text-lg font-bold text-primary">{title}</h3>
                <div className="flex items-center justify-between">
                    <div className="">
                        <div className="font-semibold text-primary whitespace-nowrap">$ {price} USD FOB</div>
                        <div className="text-sm text-gray-600">$ {discount} USD FOB</div>
                    </div>
                    {target ? (
                        <a href={url} target="_BLANK" className="px-3 pt-[10px] pb-3 text-sm text-center text-white rounded bg-primary md:text-base whitespace-nowrap hover:bg-gray-700">{label}</a>
                    ):(
                        <Link href={url} className="px-3 pt-[10px] pb-3 text-sm text-center text-white rounded bg-primary md:text-base whitespace-nowrap hover:bg-gray-700">{label}</Link>
                    )}
                </div>
            </div>
        </div>
    )
}