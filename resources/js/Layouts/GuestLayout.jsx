import { Head } from '@inertiajs/react';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Guest({ children }) {
    return (
        <>
            <Head>
                <link rel="icon" type="image/x-icon" href="favicon.ico" />
            </Head>
            <div className="relative flex flex-col justify-between w-full min-h-screen bg-white">
                <Navbar/>
                <div className='pb-8 grow'>
                    {children}
                </div>
                <Footer/>
            </div>    
        </>
    );
}
