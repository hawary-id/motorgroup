import { Link } from "@inertiajs/react";
import { AiOutlineLike } from "react-icons/ai";
import { IoMdTime } from "react-icons/io";
import { LiaEdit } from "react-icons/lia";

export default function NewsCard({image,badge,title,author,postDate,view,description,slug}) {
    return (
        <div className="w-full rounded-md shadow-md">
            <Link href={route('news.detail',slug)} className="group">
                <div className="relative transition-all duration-200 ease-in-out rounded-t-md group-hover:brightness-50">
                    <img src={image} alt="" className='object-cover w-full h-full' />
                    <div className="absolute px-2 py-1 text-sm text-white whitespace-nowrap bg-violet-600 bottom-3 left-3">{badge}</div>
                </div>
                <h1 className="w-full px-3 pt-3 text-lg font-bold md:text-xl text-primary md:px-5 md:pt-5 group-hover:text-gray-500">{title}</h1>
            </Link>
            <div className="px-3 md:px-5">
                <div className="flex justify-between mb-3 text-sm">
                    <div className="flex gap-5">
                        <div className="flex items-center gap-1 font-light text-gray-400">
                            <LiaEdit/>
                            <span>{author}</span>
                        </div>
                        <div className="flex items-center gap-1 font-light text-gray-400">
                            <IoMdTime/>
                            <span>{postDate}</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-1 font-light text-gray-400">
                        <AiOutlineLike/>
                        <span>{view}</span>
                    </div>
                </div>
                <p className="w-full mb-3 text-sm font-light text-justify text-gray-500 md:text-base md:mb-5">
                    {description}
                </p>
            </div>
        </div>
    )
}