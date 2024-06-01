import Banner from '@/Components/Banner';
import BreadCrumb from '@/Components/Breadcrumb';
import ProductCard from '@/Components/ProductCard';
import Guest from '@/Layouts/GuestLayout';
import { BANNER_DATA, MODEL_DATA, VEHICLE_BRAND_DATA } from '@/Libs/Constant';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import { RxExternalLink } from 'react-icons/rx';

export default function Vehicle({slug}) {    
    const [tab,setTab] = useState('LHD');

    const tabData = [
        {
            label: 'Left Hand Drive',
            id: 'LHD'
        },
        {
            label: 'Right Hand Drive',
            id: 'RHD'
        },
        {
            label: 'Left or Right Hand Drive Country Guide',
            id: 'guide'
        },
    ]

    const countSteeringPositions = (data) => {
        return data.reduce((acc, vehicle) => {
            vehicle.stering_position.forEach(position => {
                if (position === 'LHD') {
                    acc.LHD++;
                }
                if (position === 'RHD') {
                    acc.RHD++;
                }
            });
            return acc;
        }, { LHD: 0, RHD: 0 });
    };

    const { LHD, RHD } = countSteeringPositions(MODEL_DATA);
    const brand = VEHICLE_BRAND_DATA.find(vehicle => vehicle.slug === slug);
    const breadCrumbs = [
        {
            label: 'Home',
            url:'home',
            active:false
        },
        {
            label: 'New Vehicles',
            url:'vehicle.index',
            active:false
        },
        {
            label: brand.name,
            url:'vehicle.index',
            active:true
        }
    ]  

    return (
       <Guest>
            <Head title={brand.name} />
            <div className="w-full">
                <BreadCrumb data={breadCrumbs}/>
                <div className="container px-3 py-5 mx-auto md:pt-10 md:px-0">
                    <div className="flex items-center gap-3 mb-3 md:mb-5">
                        <img src={brand.image} alt={brand.name} className='h-10 md:h-16'/>
                        <h1 className="font-bold text-primary md:text-2xl">{brand.name}</h1>
                    </div>
                    <p className="mb-3 text-sm text-justify text-gray-600 md:text-base">{brand.description}</p>
                    <p className="mb-5 text-sm text-justify text-gray-600 md:text-base md:mb-10">{brand.description_2}</p>
                    <div className="w-full mb-6">
                        <div className="flex">
                            {tabData.map((item,i) => item.id != 'guide' ? (
                                <button onClick={() => setTab(item.id)} className={`inline-flex px-5 py-2 ${tab === item.id ? 'text-gray-600 border-x border-t border-gray-300':'text-red-600 hover:text-red-700 border-b border-gray-300'}`} key={item.id}><span className='hidden mr-1 md:block'>{item.label}</span><span className='block mr-1 md:hidden'>{item.id}</span> ({item.id === 'LHD' ? LHD:RHD})</button>
                            ):(
                                <a href={route('guidecountrySteering')} target='_BLANK' className={`px-5 py-2 inline-flex items-center text-red-600 hover:text-red-700 border-b border-gray-300`} key={item.id}><span className='hidden md:block'>{item.label}</span><span className='block uppercase md:hidden'>{item.id}</span><RxExternalLink className='ml-1 text-lg'/></a>
                            ))}
                            <div className="border-b border-gray-300 grow"></div>
                        </div>
                    </div>

                    <div className="grid w-full grid-cols-1 gap-6 p-0 md:gap-8 md:p-3 md:grid-cols-4">
                        {MODEL_DATA.filter(vehicle => vehicle.stering_position.includes(tab)).map((item,i) => (
                            <ProductCard name={item.name} image={item.image} grades_count={item.grades_count} key={item.name+i}/>
                        ))}
                    </div>
                </div>
                <Banner data={BANNER_DATA[0]}/>
            </div>
       </Guest>
    );
}
