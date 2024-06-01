import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';
import { BiSearch } from 'react-icons/bi';
import { IoHeartOutline } from 'react-icons/io5';
import { RxGear } from 'react-icons/rx';
import { IoIosLogOut } from 'react-icons/io';
import { FaUserCircle } from 'react-icons/fa';

export default function Authenticated({children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="min-h-screen bg-white">
            <nav className="flex justify-between w-full px-3 text-gray-200 bg-gray-950 md:px-8 h-14">
                <div className="flex">
                    <div className="hidden space-x-3 sm:flex">
                        <NavLink className='bg-red-600' href={route('dashboard')} active={route().current('user.dashboard')}>
                            <BiSearch className='pt-1 mr-1 text-xl'/> Search
                        </NavLink>
                        <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                            <IoHeartOutline className='pt-1 mr-1 text-xl'/> Watch List
                        </NavLink>
                        <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                            Bid
                        </NavLink>
                        <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                            My Purchase
                        </NavLink>
                        <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                            Payments
                        </NavLink>
                        <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                            User Guide
                        </NavLink>
                    </div>
                </div>

                <div className="hidden sm:flex sm:items-center sm:ms-6">
                    <div className="relative ms-3">
                        <Dropdown>
                            <Dropdown.Trigger>
                                <span className="inline-flex rounded-md">
                                    <button
                                        type="button"
                                        className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-300 transition duration-150 ease-in-out hover:text-white focus:outline-none"
                                    >
                                        <FaUserCircle className='mr-1 mt-[2px] text-base'/>
                                        SH

                                        <svg
                                            className="ms-2 -me-0.5 h-4 w-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </span>
                            </Dropdown.Trigger>

                            <Dropdown.Content>
                                <Dropdown.Link href={route('profile.edit')}><RxGear className='mr-1 text-xl pt-[3px]'/>Profile Setting</Dropdown.Link>
                                <Dropdown.Link href={route('logout')} method="post" as="button" className='text-red-600'><IoIosLogOut className='mr-1 text-xl pt-[3px]'/>Log Out</Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                    </div>
                </div>

                <div className="flex items-center -me-2 sm:hidden">
                    <button
                        onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                        className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
                    >
                        <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path
                                className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                            <path
                                className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
                <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'}>
                    <div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink href={route('dashboard')} active={route().current('dashboard')}>
                            Dashboard
                        </ResponsiveNavLink>
                    </div>

                    <div className="pt-4 pb-1 border-t border-gray-200">
                        <div className="px-4">
                            <div className="text-base font-medium text-gray-800">Syamsul Hadi</div>
                            <div className="text-sm font-medium text-gray-500">syamsul</div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink href={route('profile.edit')}>Profile</ResponsiveNavLink>
                            <ResponsiveNavLink method="post" href={route('logout')} as="button">
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>
            <main className='px-3 md:px-8'>{children}</main>
        </div>
    );
}
