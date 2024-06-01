import Banner from '@/Components/Banner';
import BreadCrumb from '@/Components/Breadcrumb';
import Title from '@/Components/Title';
import Guest from '@/Layouts/GuestLayout';
import { BANNER_DATA, COUNTRIES_STEERING_DATA } from '@/Libs/Constant';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function GuideCountrySteering({label}) {  
    const [tab,setTab] = useState('Left Hand Drive');

    const breadCrumbs = [
        {
            label: 'Home',
            url:'home',
            active:false
        },
        {
            label: 'LHD and RHD country guide',
            url:'guidecountrySteering',
            active:true
        }
    ]

    const tabData = [
        {
            label: 'Left Hand Drive',
            id: 'LHD'
        },
        {
            label: 'Right Hand Drive',
            id: 'RHD'
        }
    ] 
    
    return (
       <Guest>
        <Head title="LHD and RHD country guide" />
            <div className="w-full">
                <div className="w-full h-44 md:h-96 bg-[url('/illustration/news.jpg')] bg-cover bg-center brightness-75"></div>
                <BreadCrumb
                    data={breadCrumbs}
                />
                <div className="container px-3 py-5 mx-auto md:pt-10 md:px-0">
                    <div className="flex items-center gap-3 mb-3 md:mb-5">
                        <Title>LHD and RHD country guide</Title>
                    </div>
                    <p className="mb-3 text-sm text-justify text-gray-800 md:text-base">The guide below tells you what side the steering wheel is on for the country, there are some exceptions such as Myanmar where both LHD and RHD vehicles are allowed to be driven on the road.</p>
                    <p className="mb-5 text-sm text-justify text-gray-800 md:text-base md:mb-10">Global Auto Supply provides new vehicles in both Left Hand and Right Hand steering, with our vast logistics experience we can ship vehicles to any of the countries (or Territories) listed below, if you would like a quote for shipping please contact us</p>

                    <div className="w-full mb-6">
                        <div className="flex">
                            {tabData.map((item,i) => (
                                <button onClick={() => setTab(item.label)} className={`inline-flex px-5 py-2 ${tab === item.label ? 'text-gray-800 border-x border-t border-gray-300':'text-red-600 hover:text-red-700 border-b border-gray-300'}`} key={item.id}><span className='hidden mr-1 md:block'>{item.label}</span><span className='block mr-1 md:hidden'>{item.id}</span></button>
                            ))}
                            <div className="border-b border-gray-300 grow"></div>
                        </div>
                    </div>
                    <table className='w-full table-auto md:table-fixed'>
                        <thead className='border-b'>
                            <tr className='font-semibold'>
                                <td className='py-2'>Country / State / Territory</td>
                                <td className='py-2'>Steering</td>
                            </tr>
                        </thead>
                        <tbody>
                            {COUNTRIES_STEERING_DATA.filter(straring => straring.stering_position.includes(tab)).map((item,i) => (
                                <tr className='' key={item.country+i}>
                                    <td className='w-full px-3 py-2 text-sm text-gray-700 border-y'>{item.country}</td>
                                    <td className='w-full px-3 py-2 text-sm text-center text-gray-700 md:text-start border-y'>{item.stering_position}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <Banner data={BANNER_DATA[1]}/>
                
            </div>
       </Guest>
    );
}
