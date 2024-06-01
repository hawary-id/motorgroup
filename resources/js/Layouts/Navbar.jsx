import { MENU_DATA } from "@/Libs/Constant";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import { FaPhone } from "react-icons/fa6";
import { RiMenu3Fill } from "react-icons/ri";
import { VscChromeClose } from "react-icons/vsc";
import { BsSearch } from "react-icons/bs";

export default function Navbar(second) {
    const [menuMobile, setMenuMobile] = useState(false);
    return (
        <>
            <div className="sticky top-0 z-50 w-full py-2 bg-white shadow-md md:py-3">
                <div className="container relative flex items-center justify-between px-3 mx-auto md:px-0">
                    <Link href={route('home')}>
                        <img src='/logo/gas-logo.png' className='h-3 md:h-7' alt="gas-logo"/>
                    </Link>
                    <div className="flex items-center gap-3 md:hidden">
                        <Link href={route('search')} className="text-primary hover:text-gray-500 active:text-gray-500 focus:text-gray-500"><BsSearch/></Link>
                        <button className='block p-2 border rounded border-primary text-primary hover:text-white active:text-white focus:text-white hover:bg-primary active:bg-primary focus:bg-primary' onClick={() => setMenuMobile(!menuMobile)}>
                            <RiMenu3Fill/>
                        </button>
                    </div>
                    <div className="items-center hidden space-x-8 text-primary md:flex">
                        <div className="flex flex-row items-center gap-5 mb-5 md:mb-0">
                            {MENU_DATA.map((item,i) => item.target ? (
                                <a href={item.url} target="_BLANK" className={`${route().current(item.active) ? 'text-gray-500': 'hover:text-gray-500'}`} key={item.label+i}>{item.label}</a>
                            ):(
                                <Link href={route(item.url)} className={`${route().current(item.active) ? 'text-gray-500': 'hover:text-gray-500'}`} key={item.label+i}>{item.label}</Link>
                            ))}
                            <a href="tel:+669279544" className="flex items-center gap-2 hover:text-gray-500 text-primary">
                                <FaPhone/>
                                <span>+669279544</span>
                            </a>
                            <Link href={route('search')} className="flex items-center gap-2 text-primary hover:text-gray-500">
                                <BsSearch/>
                            </Link>
                        </div>
                        <div className="flex flex-col gap-3 md:flex-row w-fit">
                            <Link href={route('login')} className='px-3 pt-[10px] pb-3 text-sm text-center text-white uppercase border rounded bg-primary border-primary hover:bg-gray-600'>Member Login</Link>
                            <Link href={route('register')} className='px-3 pt-[10px] pb-3 text-sm text-center uppercase bg-white border rounded text-primary border-primary hover:bg-primary hover:text-white'>Register</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`text-primary flex md:hidden p-3 flex-col space-x-0 fixed bg-white shadow-md md:shadow-none rounded-b-md w-full z-50 items-start transition-all ease-in-out duration-700 ${menuMobile ? 'top-0':'-top-96'}`}>
                <div className="flex justify-end w-full">
                <button className='block p-2 border rounded border-primary text-primary md:hidden hover:text-white active:text-white focus:text-white hover:bg-primary active:bg-primary focus:bg-primary' onClick={() => setMenuMobile(!menuMobile)}>
                    <VscChromeClose/>
                </button>
                </div>
                <div className="flex flex-col items-start gap-3 mb-5 md:gap-5">
                    {MENU_DATA.map((item,i) => item.target ?(
                        <a href={item.url} target="_BLANK"  className={`${route().current(item.active) ? 'text-gray-500': 'hover:text-gray-500'}`} key={item.label+i}>{item.label}</a>
                    ):(
                        <Link href={route(item.url)} className={`${route().current(item.active) ? 'text-gray-500': 'hover:text-gray-500'}`} key={item.label+i}>{item.label}</Link>
                    ))}
                    <a href="tel:+669279544" className="flex items-center gap-2 hover:text-gray-500">
                        <FaPhone/>
                        <span>+669279544</span>
                    </a>
                </div>
                <div className="flex flex-col w-full gap-3">
                    <Link href={route('login')} className='inline-flex items-center justify-center px-3 pt-[10px] pb-3 text-sm text-center text-white uppercase border rounded bg-primary border-primary hover:bg-gray-700'>Member Login</Link>
                    <Link href={route('register')} className='inline-flex items-center justify-center px-3 pt-[10px] pb-3 text-sm text-center uppercase bg-white border rounded border-primary text-primary hover:bg-primary hover:text-white'>Register</Link>
                </div>
            </div>
        </>
    )
}