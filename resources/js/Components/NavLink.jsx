import { Link } from '@inertiajs/react';

export default function NavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={
                'inline-flex items-center px-1 pt-1 pb-2 font-light text-sm leading-5 transition duration-150 ease-in-out focus:outline-none ' +
                (active
                    ? 'text-white'
                    : 'border-transparent text-gray-300 hover:text-white focus:text-white') +
                className
            }
        >
            {children}
        </Link>
    );
}
