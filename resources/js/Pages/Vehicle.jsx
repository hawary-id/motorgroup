import Banner from '@/Components/Banner';
import BrandCard from '@/Components/BrandCard';
import BreadCrumb from '@/Components/Breadcrumb';
import Title from '@/Components/Title';
import Guest from '@/Layouts/GuestLayout';
import { BANNER_DATA, VEHICLE_BRAND_DATA } from '@/Libs/Constant';
import { Head } from '@inertiajs/react';

export default function Vehicle({}) {    
    const breadCrumbs = [
        {
            label: 'Home',
            url:'home',
            active:false
        },
        {
            label: 'New Vehicles',
            url:'vehicle.index',
            active:true
        }
    ]  
    return (
       <Guest>
        <Head title="New Vehicle Makes" />
            <div className="w-full">
                <BreadCrumb data={breadCrumbs}/>
                
                <div className="container w-full px-3 py-6 mx-auto font-bold text-center border-b md:px-0">
                    <Title>Vehicle brands from around the world that <span className='text-red-600 underline'>GAS</span> can supply</Title>
                </div>
                <div className="container grid grid-cols-3 gap-3 px-3 py-3 mx-auto md:py-6 md:gap-6 md:mb-5 md:px-0 md:grid-cols-6">
                    
                    {VEHICLE_BRAND_DATA.map((item,i) => (
                        <BrandCard image={item.image} label={item.name} slug={item.slug} key={item.name+i}/>
                    ))}
                </div>      
                <Banner data={BANNER_DATA[1]}/>
            </div>
       </Guest>
    );
}
