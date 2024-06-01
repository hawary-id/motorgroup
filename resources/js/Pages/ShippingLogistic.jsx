import Banner from '@/Components/Banner';
import BreadCrumb from '@/Components/Breadcrumb';
import Title from '@/Components/Title';
import Guest from '@/Layouts/GuestLayout';
import { BANNER_DATA } from '@/Libs/Constant';
import { Head } from '@inertiajs/react';

export default function ShippingLogistic({}) {  
    const breadCrumbs = [
        {
            label: 'Home',
            url:'home',
            active:false
        },
        {
            label: 'Shipping and Logistics',
            url:'',
            active:true
        }
    ]  
    return (
       <Guest>
        <Head title="Shipping and Logistics" />
            <div className="w-full">
                <div className="w-full h-44 md:h-96 bg-[url('/illustration/about-us.jpg')] bg-cover bg-center brightness-75"></div>
                <BreadCrumb
                    data={breadCrumbs}
                />
                <div className="container px-3 py-5 mx-auto md:px-0 md:py-10">
                    <Title>Shipping and Logistics</Title>
                    <p className="mb-2 text-gray-700">Our professional staff will take care of all logistics, weather it be inland truck transport or rail freight, container or RoRo shipping by sea freight, or Air Freight for time critical vehicle or parts needs, Global Auto Supply will handle it.</p>
                    <p className="mb-2 text-gray-700">Our Logistics staff perform a comprehensive inspection on your new vehicle purchases with full inspection and photographs of your vehicles which are available on our website in your account through our customer portal, you can track your shipment, download photographs, Reports, shipping documentation, certificates etc.</p>
                    <p className="mb-2 text-gray-700">Our relationships with all major banking, shipping, warehousing and freight forwarding companies allow us to offer a full range of cost effective, and customs friendly, purchase and delivery support services.</p>
                    <p className="mb-2 text-gray-700">Modern and effective digital platforms, and customer centric staff ensure uncomplicated, transparent and honest communications, and a positive purchasing experience for our customers.</p>
                </div>
                
                <Banner data={BANNER_DATA[1]}/>
            </div>
       </Guest>
    );
}
