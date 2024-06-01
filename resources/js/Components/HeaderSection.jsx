import { Link } from "@inertiajs/react";

export default function HeaderSection({title,longTitle,subtitle,url}) {
    return (
        <div className="container flex items-center justify-between w-full px-3 pt-5 mx-auto md:px-0">
            <h1 className="text-2xl font-bold text-primary">{title} <span className='text-red-600'>{longTitle}</span></h1>
            {subtitle && (
                <Link href="" className="text-sm text-primary hover:text-gray-500 md:text-lg">
                    <span className='whitespace-nowrap'>View all </span>
                    <span className='hidden md:inline-flex'>{subtitle}</span>
                </Link>
            )}
        </div>
    )
}