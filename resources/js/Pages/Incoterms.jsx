import Banner from '@/Components/Banner';
import BreadCrumb from '@/Components/Breadcrumb';
import IncotermContent from '@/Components/IncotermContent';
import Title from '@/Components/Title';
import Guest from '@/Layouts/GuestLayout';
import { BANNER_DATA, INCOTERMS_DATA } from '@/Libs/Constant';
import { Head } from '@inertiajs/react';

export default function Incoterms({}) {  
    const breadCrumbs = [
        {
            label: 'Home',
            url:'home',
            active:false
        },
        {
            label: 'Basic overview of the INCOTERMS rules 2010',
            url:'',
            active:true
        }
    ]  
    return (
       <Guest>
        <Head title="Basic overview of the INCOTERMS rules 2010" />
            <div className="w-full">
                <div className="w-full h-44 md:h-96 bg-[url('/illustration/about-us.jpg')] bg-cover bg-center brightness-75"></div>
                <BreadCrumb
                    data={breadCrumbs}
                />
                <div className="container px-3 py-5 mx-auto md:px-0 md:py-10">
                    <Title>Basic overview of the INCOTERMS rules 2010</Title>
                    <p className="mb-2 text-gray-700">All modes of transport</p>
                    {INCOTERMS_DATA.map((item,i) => (
                        <IncotermContent title={item.title} subtitle={item.subtitle} key={i+1}/>
                    ))}
                    <p className="mb-2 text-gray-700">*Rules based on INCOTERMS® 2010</p>
                </div>
                
                <Banner data={BANNER_DATA[1]}/>
            </div>
       </Guest>
    );
}
