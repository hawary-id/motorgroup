import Banner from '@/Components/Banner';
import BreadCrumb from '@/Components/Breadcrumb';
import Title from '@/Components/Title';
import Guest from '@/Layouts/GuestLayout';
import { BANNER_DATA } from '@/Libs/Constant';
import { Head } from '@inertiajs/react';

export default function ArmouredSpecialty({}) {  
    const breadCrumbs = [
        {
            label: 'Home',
            url:'home',
            active:false
        },
        {
            label: 'Armoured and Specialty Vehicles',
            url:'',
            active:true
        }
    ]  
    return (
       <Guest>
        <Head title="Armoured and Specialty Vehicles" />
            <div className="w-full">
                <div className="w-full h-44 md:h-96 bg-[url('/illustration/about-us.jpg')] bg-cover bg-center brightness-75"></div>
                <BreadCrumb
                    data={breadCrumbs}
                />
                <div className="container px-3 py-5 mx-auto md:px-0 md:py-10">
                    <Title>Armoured and Specialty Vehicles</Title>
                    <p className="mb-2 text-gray-700">Global Auto Supply is a renowned and trusted supplier to the Armoured Vehicle manufacturing industry, with our head office based in Bangkok Thailand we are ideally situated to supply a large range of vehicles normally used for the production of Armoured vehicles.</p>
                    <p className="mb-2 text-gray-700">We understand and recognise the need to have reliable, highly secure, and powerful vehicles for transporting people and valuable items, especially in high-risk industries and areas.</p>
                    <p className="mb-2 text-gray-700">In line with this, we have made it our mission to provide Armouring companies with the means to order a large range of vehicle specifically suited for re manufacturing into Armoured vehicles.</p>
                    <p className="mb-2 text-gray-700">We can supply vehicles either from current available stock or production orders placed with the manufacturer.</p>
                    <p className="mb-2 text-gray-700">With a factory order we can also go as far as to order specific vehicles “stripped down” from the manufacturer meaning you get the vehicle specification that you need for your requirements without having to pay for the items which would normally be discarded or sold off at a fraction of what they cost.</p>
                    <p className="mb-2 text-gray-700">We can supply vehicles for armouring purposes with these items deleted from factory, Window Glass, Bumpers, Headlamps, Fog lamps, Doors, Airbags, Interior Trim, Seats, Rear Decks, please note to provide a stripped down model from factory order it would need to be a sizeable order.</p>
                </div>
                
                <Banner data={BANNER_DATA[1]}/>
            </div>
       </Guest>
    );
}
