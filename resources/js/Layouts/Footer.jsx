import { USEFUL_LINKS } from "@/Libs/Constant";
import { Link } from "@inertiajs/react";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { GoChevronRight } from "react-icons/go";

export default function Footer(second) {
    return (
       <>
            <div className="w-full bg-sky-950">
                <div className="container grid w-full grid-cols-1 gap-5 px-3 py-5 mx-auto md:grid-cols-4 md:py-10 md:px-0">
                    <div className="w-full">
                        <Link href={route('home')}>
                            <img src='/logo/gas-logo.png' className='h-4 mb-2 md:h-7'/>
                        </Link>
                        <div className="font-bold text-white">Global Auto Supply</div>
                        <div className="font-light text-gray-300">Bangkok Free Trade Zone No. 999/110 Moo 15 Bangsaotong District Bangkok 10570 </div>
                        <div className="font-light text-gray-300">Thailand</div>
                        <div className="font-light text-gray-300">Tel: <a href="tel:+669279544" className="hover:text-white">+669279544</a></div>
                        <div className="mb-3 text-sm text-gray-300">Follow us in Social Media :</div>
                        <div className="flex items-center gap-3">
                            <Link href="" className='p-2 text-gray-300 rounded bg-sky-600 hover:bg-sky-700 hover:text-white'><FaFacebookF/></Link>
                            <Link href="" className='p-2 text-gray-300 rounded bg-sky-500 hover:bg-sky-600 hover:text-white'><FaXTwitter/></Link>
                            <Link href="" className='p-2 text-gray-300 rounded bg-sky-600 hover:bg-sky-700 hover:text-white'><FaLinkedinIn/></Link>
                            <Link href="" className='p-2 text-gray-300 rounded bg-emerald-600 hover:bg-emerald-700 hover:text-white'><FaWhatsapp/></Link>
                        </div>
                    </div>
                    {USEFUL_LINKS.map((item,i) => (
                        <div className="w-full" key={item+i}>
                            <div className="mb-1 text-lg font-bold text-white uppercase md:mb-5">{item.title}</div>
                            <ul className='flex flex-col'>
                                {item.links.map((link,i) => (
                                    <li className='inline-flex items-center gap-1 text-gray-300 transition-all duration-200 ease-in-out hover:text-white hover:translate-x-1' key={i}>
                                        <GoChevronRight/>
                                        <Link href={route(link.url)}>{link.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex items-center justify-center w-full py-3 text-sm text-center bg-primary">
                <span className="font-light text-gray-300">© 2024 | <Link href={route('home')} className="font-semibold text-white hover:text-gray-300">www.gas.com</Link></span>
            </div>
        </>
    )
}