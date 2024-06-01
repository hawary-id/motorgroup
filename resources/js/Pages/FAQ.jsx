import Banner from '@/Components/Banner';
import BreadCrumb from '@/Components/Breadcrumb';
import Title from '@/Components/Title';
import Guest from '@/Layouts/GuestLayout';
import { BANNER_DATA } from '@/Libs/Constant';
import { Head } from '@inertiajs/react';

export default function FAQ({}) {  
    const breadCrumbs = [
        {
            label: 'Home',
            url:'home',
            active:false
        },
        {
            label: 'F.A.Q. about purchase and export of vehicles from Global Auto Supply',
            url:'',
            active:true
        }
    ]  
    return (
       <Guest>
        <Head title="F.A.Q. about purchase and export of vehicles from Global Auto Supply" />
            <div className="w-full">
                <div className="w-full h-44 md:h-96 bg-[url('/illustration/about-us.jpg')] bg-cover bg-center brightness-75"></div>
                <BreadCrumb
                    data={breadCrumbs}
                />
                <div className="container px-3 py-5 mx-auto md:px-0 md:py-10">
                    <Title>F.A.Q. about purchase and export of vehicles from Global Auto Supply</Title>
                    <p className="mb-2 text-gray-700">Please stay tuned, we will be updating Frequently asked questions about purchase and export of vehicles from Global Auto Supply Soon!</p>
                </div>
                
                <Banner data={BANNER_DATA[1]}/>
            </div>
       </Guest>
    );
}
