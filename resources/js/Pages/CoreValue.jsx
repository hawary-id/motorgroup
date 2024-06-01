import Banner from '@/Components/Banner';
import BreadCrumb from '@/Components/Breadcrumb';
import CoreValueContent from '@/Components/CoreValueContent';
import Title from '@/Components/Title';
import Guest from '@/Layouts/GuestLayout';
import { BANNER_DATA, CORE_VALUE_DATA } from '@/Libs/Constant';
import { Head } from '@inertiajs/react';

export default function CoreValue({}) {  
    const breadCrumbs = [
        {
            label: 'Home',
            url:'home',
            active:false
        },
        {
            label: 'Global Auto Supply Core Values',
            url:'',
            active:true
        }
    ]  
    return (
       <Guest>
        <Head title="Global Auto Supply Core Values" />
            <div className="w-full">
                <div className="w-full h-44 md:h-96 bg-[url('/illustration/about-us.jpg')] bg-cover bg-center brightness-75"></div>
                <BreadCrumb
                    data={breadCrumbs}
                />
                <div className="container px-3 py-5 mx-auto md:px-0 md:py-10">
                    <Title>Global Auto Supply Core Values</Title>
                    {CORE_VALUE_DATA.map((item,i) => (
                        <CoreValueContent title={item.title} contents={item.contents} key={i+1}/>
                    ))}
                </div>
                
                <Banner data={BANNER_DATA[1]}/>
            </div>
       </Guest>
    );
}
