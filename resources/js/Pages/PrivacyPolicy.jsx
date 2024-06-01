import Banner from '@/Components/Banner';
import BreadCrumb from '@/Components/Breadcrumb';
import Title from '@/Components/Title';
import Guest from '@/Layouts/GuestLayout';
import { BANNER_DATA } from '@/Libs/Constant';
import { Head } from '@inertiajs/react';

export default function PrivacyPolicy({}) {  
    const breadCrumbs = [
        {
            label: 'Home',
            url:'home',
            active:false
        },
        {
            label: 'Privacy policy',
            url:'',
            active:true
        }
    ]  
    return (
       <Guest>
        <Head title="Privacy policy" />
            <div className="w-full">
                <div className="w-full h-44 md:h-96 bg-[url('/illustration/about-us.jpg')] bg-cover bg-center brightness-75"></div>
                <BreadCrumb
                    data={breadCrumbs}
                />
                <div className="container px-3 py-5 mx-auto md:px-0 md:py-10">
                    <Title>Privacy policy</Title>
                    <Title className="border-b-0">Privacy policy</Title>
                    <p className="mb-2 text-gray-700">Your privacy is important to Global Auto Supply. This privacy statement provides information about the personal information that Global Auto Supply collects, and the ways in which Global Auto Supply  uses that personal information.</p>
                    <p className="mb-2 text-gray-700">Personal information collection Global Auto Supply may collect and use the following kinds of personal information: information about your use of this website,information that you provide using for the purpose of registering with the website, information about transactions carried out over this website, information that you provide for the purpose of subscribing to the website services and any other information that you send to Global Auto Supply.</p>
                    <p className="mb-2 text-gray-700">Using personal information Global Auto Supply may use your personal information to: administer this website; personalize the website for you; enable your access to and use of the website services; send to you products that you purchase; supply to you services that you purchase; send you statements and invoices; collect payments from you; and send you marketing communications.</p>
                    <p className="mb-2 text-gray-700">Global Auto Supply will NOT publish information about you or your company on the website unless express permission has been obtained from you to do so.</p>
                    <p className="mb-2 text-gray-700">Where Global Auto Supply discloses your personal information to its agents or sub-contractors for processing of your vehicle shipments and the items listed above, the agent or sub-contractor in question will be obligated to use that personal information in accordance with the terms of this privacy statement.</p>
                    <p className="mb-2 text-gray-700">In addition to the disclosures reasonably necessary for the purposes identified elsewhere above, Global Auto Supply may disclose your personal information to the extent that it is required to do so by law, in connection with any legal proceedings or prospective legal proceedings, and in order to establish, exercise or defend its legal rights.</p>
                    <p className="mb-2 text-gray-700">Securing your data Global Auto Supply will take reasonable technical and organisational precautions to prevent the loss, misuse or alteration of your personal information. SAL Export will store all the personal information you provide on its secure servers.</p>
                    <p className="mb-2 text-gray-700">Cross-border data transfers Information that Global Auto Supply collects may be stored and processed in and transferred between any of the countries in which Global Auto Supply operates to enable the use of the information in accordance with this privacy policy.</p>
                    <p className="mb-2 text-gray-700">In addition, personal information that you submit for publication on the website will be published on the internet and may be available around the world to third parties for the purpose of shipment and delivering of vehicles and or parts.</p>
                    <p className="mb-2 text-gray-700">You agree to such cross-border transfers of personal information.</p>
                    <p className="mb-2 text-gray-700">You should check this page occasionally to ensure you are familiar with any changes.</p>
                    <p className="mb-2 text-gray-700">Other websites This website contains links to other websites.</p>
                    <p className="mb-2 text-gray-700">Global Auto Supplyis not responsible for the privacy policies or practices of any third party.</p>
                    <p className="mb-2 text-gray-700">Contact Global Auto Supply If you have any questions about this privacy policy or Global Auto Supply's treatment of your personal information.</p>    
                </div>
                
                <Banner data={BANNER_DATA[1]}/>
            </div>
       </Guest>
    );
}
