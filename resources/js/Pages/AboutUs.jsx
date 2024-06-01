import Banner from '@/Components/Banner';
import BreadCrumb from '@/Components/Breadcrumb';
import Title from '@/Components/Title';
import Guest from '@/Layouts/GuestLayout';
import { BANNER_DATA } from '@/Libs/Constant';
import { Head } from '@inertiajs/react';

export default function AboutUs({}) {  
    const breadCrumbs = [
        {
            label: 'Home',
            url:'home',
            active:false
        },
        {
            label: 'About Us',
            url:'news.index',
            active:true
        }
    ]  
    return (
       <Guest>
        <Head title="About Us" />
            <div className="w-full">
                <div className="w-full h-44 md:h-96 bg-[url('/illustration/about-us.jpg')] bg-cover bg-center brightness-75"></div>
                <BreadCrumb
                    data={breadCrumbs}
                />
                <div className="container px-3 py-5 mx-auto md:px-0 md:py-10">
                    <Title>About Global Auto Supply - World wide exporter of quality vehicles</Title>
                    <div className="py-3 md:py-6">
                        <h2 className="mb-2 text-xl text-gray-800">Established</h2>
                        <p className="mb-2 text-gray-600">Global Auto Supply is a leading specialist in international automotive distribution, export and supply chain solutions.</p>
                        <p className="mb-2 text-gray-600">With over three decades of experience in automotive export Global Auto Supply was initially established in Thailand to provide locally made Pickups and SUV's for the RHD market countries, once Global Auto Supply had established the Right Hand Drive vehicles markets there was overwhelming demand for Left Hand Drive vehicles, Global Auto Supply then started expanding the business to supply vehicles from strategic export locations around the globe.</p>
                        <p className="mb-2 text-gray-600">Today Global Auto Supply has export companies in Japan, Thailand.</p>
                    </div>
                    <div className="py-3 md:py-6">
                        <h2 className="mb-2 text-xl text-gray-800">Worldwide automotive supply solution specialists</h2>
                        <p className="mb-2 text-gray-600">Global Auto Supply's ever evolving highly developed E Commerce Website and Company Structures provides the highest customer convenience and satisfaction, personalised online (and phone) support giving Global Auto Supply customers the tools needed to purchase vehicles and have them securely shipped to the customer destination all of which is controlled by our sales office located in Bangkok, Thailand.</p>
                        <p className="mb-2 text-gray-600">Global Auto Supply's extensive range of new vehicle supply capability as well as genuine parts backup and accessories, along with the Global Auto Supply Logistics team and long term established relationships with nearly all shipping companies means we can acheive swift delivery to our customers, be it one vehicle or hundreds of vehicles.</p>
                    </div>
                    <div className="py-3 md:py-6">
                        <h2 className="mb-2 text-xl text-gray-800">Export services</h2>
                        <p className="mb-2 text-gray-600">With over three decades of automotive export experience Global Auto Supply has grown both customer and industry relationships, we have in place a professional team and a network of vehicle distributors across the supply chain. This has enabled Global Auto Supply to offer customers a one-stop vehicle supply experience, from purchase, parts and accessories, to financial, logistics, customs and clearing services.</p>
                    </div>
                    <div className="py-3 md:py-6">
                        <h2 className="mb-2 text-xl text-gray-800">Global Auto Supply's Vision</h2>
                        <p className="mb-2 text-gray-600">At Global Auto Supply we aim to deliver exceptional value, building long-term partnerships and providing professional automotive supply solutions and services, with the Global Auto Supply e-commerce website backed by personal service by real people that know what we are talking about when it comes to supplying the vehicles you need, we are only a email, chat or phone call away.</p>
                    </div>
                    <div className="py-3 md:py-6">
                        <h2 className="mb-2 text-xl text-gray-800">Global Auto Supply's Mission</h2>
                        <p className="mb-2 text-gray-600">We strive to provide the highest quality of automotive supply services at the best rates, whilst offering a stress-free experience, to become and be the only source of vehicle supply that you will need.</p>
                    </div>
                    <div className="py-3 md:py-6">
                        <h2 className="mb-2 text-xl font-bold text-gray-950">Global Auto Supply Core Values</h2>
                        <div className="py-3 md:py-6">
                            <h2 className="mb-2 text-xl text-gray-800">Trust</h2>
                            <ul className="list-disc list-outside pl-7">
                                <li className="text-gray-600">Always act with honesty and integrity and with no hidden agendas.</li>
                                <li className="text-gray-600">Meet obligations that are set.</li>
                            </ul>
                        </div>
                        <div className="py-3 md:py-6">
                            <h2 className="mb-2 text-xl text-gray-800">Integrity</h2>
                            <ul className="list-disc list-outside pl-7">
                                <li className="text-gray-600">Global Auto Supply staff to treat customers and suppliers alike with the utmost highest respect and treat the business that we do mutually with the same respect.</li>
                                <li className="text-gray-600">Trustworthy, consistent and reliable - Our actions should be consistent with words.</li>
                                <li className="text-gray-600">To behave in an honest, ethical and straightforward manner.</li>
                                <li className="text-gray-600">To keep commitments and to admit mistakes if we make them.</li>
                                <li className="text-gray-600">Be honest and open in our dealings with everyone around us.</li>
                                <li className="text-gray-600">Be prepared to step out of your comfort zone to help your customer and your team.</li>
                            </ul>
                        </div>
                        <div className="py-3 md:py-6">
                            <h2 className="mb-2 text-xl text-gray-800">Customer Focus</h2>
                            <ul className="list-disc list-outside pl-7">
                                <li className="text-gray-600">To understand customers, putting them first is always the number one factor when we are doing business, we are committed to giving satisfaction of the highest standards.</li>
                                <li className="text-gray-600">Strive for our customers’ success, we want to be their go to for vehicle needs.</li>
                                <li className="text-gray-600">Build lasting relationships with our customers based on Trust and Honesty.</li>
                                <li className="text-gray-600">Create value for our customers, provide the best vehicles and options for their needs.</li>
                            </ul>
                        </div>
                        <div className="py-3 md:py-6">
                            <h2 className="mb-2 text-xl text-gray-800">Quality</h2>
                            <ul className="list-disc list-outside pl-7">
                                <li className="text-gray-600">We will not sell 2nd rate goods or defective goods, Global Auto Supply is proud to consistently provide quality genuine parts and service.</li>
                            </ul>
                        </div>
                        <div className="py-3 md:py-6">
                            <h2 className="mb-2 text-xl text-gray-800">Ownership</h2>
                            <ul className="list-disc list-outside pl-7">
                                <li className="text-gray-600">We do not pass the buck, if some goes wrong somewhere in the supply chain, we take the responsibility and fix it, we are accountable for everything we do, and operate responsibly and efficiently for long-term mutual business relationships.</li>
                            </ul>
                        </div>
                        <div className="py-3 md:py-6">
                            <h2 className="mb-2 text-xl text-gray-800">Passion</h2>
                            <ul className="list-disc list-outside pl-7">
                                <li className="text-gray-600">We know motor vehicles inside and out, front to back, back to front, we are not in it just for the business side, Global Auto Supply sales staff have many years in the automotive business and have a passion for motor vehicles of all kinds, we are dedicated to supplying the right vehicles needed for your application and needs, when it comes to purchasing your vehicles please talk to us and ask some hard questions, you will see Global Auto Supply have the knowledge you expect from your vehicle supplier, we take an interest in your vehicle needs, not just an interest in your wallet.</li>
                            </ul>
                        </div>
                        <div className="py-3 md:py-6">
                            <h2 className="mb-2 text-xl text-gray-800">Excellence</h2>
                            <ul className="list-disc list-outside pl-7">
                                <li className="text-gray-600">To be excellent, learn and apply the best practices of Global Auto Supply.</li>
                                <li className="text-gray-600">Uphold Global Auto Supply standards and hold other team members to the same.</li>
                                <li className="text-gray-600">Foster learning, the sharing of knowledge with others and continuous improvement.</li>
                                <li className="text-gray-600">To set and achieve a high level of performance.</li>
                            </ul>
                        </div>
                        <div className="py-3 md:py-6">
                            <h2 className="mb-2 text-xl text-gray-800">Innovation</h2>
                            <ul className="list-disc list-outside pl-7">
                                <li className="text-gray-600">Do not prematurely judge and positively build on the ideas of others.</li>
                                <li className="text-gray-600">Work through the challenges i.e. develop the idea and learn from the process.</li>
                                <li className="text-gray-600">Seek and consider new ideas, approaches and best way to implement them.</li>
                                <li className="text-gray-600">Always improve current practices and ways of getting things done.</li>
                                <li className="text-gray-600">To anticipate and adapt to change, keep ahead of the competition.</li>
                                <li className="text-gray-600">Set Goals, meet and exceed them.</li>
                                <li className="text-gray-600">Look out for our customer’s interests as much as we do the companies.</li>
                                <li className="text-gray-600">To be open in communication with everyone.</li>
                                <li className="text-gray-600">If promises are made promises will be kept.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <Banner data={BANNER_DATA[1]}/>
            </div>
       </Guest>
    );
}
