import { Link } from "@inertiajs/react";
import { VscChevronRight } from "react-icons/vsc";

export default function BreadCrumb({data, className="md:px-0"}) {
    return (
        <div className="w-full px-3 md:px-0">
            <div className={`container flex items-center justify-between gap-3 mx-auto text-sm font-light md:gap-0 ${className} `}>
                <div className="flex flex-wrap gap-3 py-3">
                    {data.map((item,i) => !item.active ? ( 
                        <div className="flex items-center gap-3" key={i+1}>
                            <Link href={route(item.url)} className="text-primary hover:text-gray-500">{item.label}</Link>
                            <VscChevronRight/>
                        </div>
                    ):(
                        <div className="text-gray-500" key={i+1}>{item.label}</div>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}