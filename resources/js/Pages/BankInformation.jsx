import Banner from '@/Components/Banner';
import BreadCrumb from '@/Components/Breadcrumb';
import Title from '@/Components/Title';
import Guest from '@/Layouts/GuestLayout';
import { BANK_INFORMATION_DATA, BANNER_DATA } from '@/Libs/Constant';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function BankInformation({}) {  
    const breadCrumbs = [
        {
            label: 'Home',
            url:'home',
            active:false
        },
        {
            label: 'Bank Information',
            url:'',
            active:true
        }
    ] 
    
    const [bankActive, setBankActive] = useState(0);
    return (
       <Guest>
        <Head title="Bank Information" />
            <div className="w-full">
                <div className="w-full h-44 md:h-96 bg-[url('/illustration/about-us.jpg')] bg-cover bg-center brightness-75"></div>
                <BreadCrumb
                    data={breadCrumbs}
                />
                <div className="container px-3 py-5 mx-auto md:px-0 md:py-10">
                    <Title>Bank Information Global Auto Supply</Title>
                    <p className="mb-2 text-gray-700"><span className="font-bold">Global Auto Supply</span> prides itself on its relationships with major banking institutions, shipping, warehousing, and freight forwarding organizations. Through these relationships, we are able to offer our customers a comprehensive set of financial, logistics and clearing services including letters of credit, port and customs documentation legalization of documents with Consulates and Chamber of Commerce as well as professional, speedy and reliable cargo handling and delivery – all at great affordable prices.</p>
                    <p className="mb-2 text-gray-700">Payments for vehicle accepted by;</p>
                    <p className="mb-2 text-gray-700">Bank Transfer – Payment made by Telegraphic Transfer (T.T.)</p>
                    <p className="mb-2 text-gray-700">Letter of Credit – Subject to specific conditions we are able to offer letter of credit from 1st Tier Banking Institutions, the letter of credit will be payable on the sight of delivery document.</p>
                    <p className="mb-2 text-gray-700">Unless specifically agreed all vehicles must be paid 100% before shipment, we do not offer extended credit terms.</p>
                    <p className="mb-5 text-gray-700"><span className='font-bold text-red-600'>Please note:</span> when you making a payment please ensure to make the account details are exactly the same as follows, Global Auto Supply will not be responsible for payments made to accounts other than the Bank accounts listed.</p>
                    <div className="flex flex-col gap-3 md:flex-row md:gap-8">
                        <div className="flex flex-row gap-3 border md:gap-0 md:border-r-0 w-fit md:w-64 md:border-y h-fit md:flex-col">
                            {BANK_INFORMATION_DATA.map((item,index) => (
                                <button
                                    onClick={() => setBankActive(index)} 
                                    className={`w-full p-3 cursor-pointer ${bankActive === index ? 'border rounded-md border-blue-400 md:border-r-0 md:rounded-r-none':'md:border-r hover:rounded-md hover:border hover:border-blue-400 hover:md:border-r-0 hover:md:rounded-r-none'}`} key={index+1}>
                                    <img src={item.image} alt={item.name} className="w-16 md:w-full" />
                                </button>
                            ))}
                        </div>
                        {bankActive !== null && (
                            <div className="w-full">
                                <div className="inline-block w-full p-3 mb-5 border rounded-md md:p-5 md:hidden">
                                <table className="w-full p-3 table-auto">
                                    <thead>
                                        <tr>
                                            <th className='px-2 pb-3 text-left md:px-4 md:pb-4'>
                                                <img src={BANK_INFORMATION_DATA[bankActive].image} alt={BANK_INFORMATION_DATA[bankActive].name} className="w-20 md:w-full" />
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className='p-3 text-gray-700 md:p-4 border-y'>Bank Name</td>
                                            <td className='p-3 text-gray-700 md:p-4 border-y'>{BANK_INFORMATION_DATA[bankActive].name}</td>
                                        </tr>
                                        <tr>
                                            <td className='p-3 text-gray-700 md:p-4 border-y'>Website</td>
                                            <td className='p-3 text-gray-700 md:p-4 border-y'>{BANK_INFORMATION_DATA[bankActive].website}</td>
                                        </tr>
                                        <tr>
                                            <td className='p-3 text-gray-700 md:p-4 border-y'>Swift Code</td>
                                            <td className='p-3 text-gray-700 md:p-4 border-y'>{BANK_INFORMATION_DATA[bankActive].swiftCode}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                </div>
                                <table className='hidden w-full mb-5 bg-gray-100 table-fixed md:inline-table md:mb-8'>
                                    <thead className='text-lg font-bold text-white bg-gray-800'>
                                        <tr>
                                            <th className='p-5 text-left'></th>
                                            <th className='p-5 text-left'>Bank Name</th>
                                            <th className='p-5 text-left'>Website</th>
                                            <th className='p-5 text-left'>Swift Code</th>
                                        </tr>
                                    </thead>
                                    <tbody className='text-lg font-bold text-gray-800'>
                                        <tr>
                                            <td className='p-5'><img src={BANK_INFORMATION_DATA[bankActive].image} alt={BANK_INFORMATION_DATA[bankActive].name} className="w-44" /></td>
                                            <td className='p-5'>{BANK_INFORMATION_DATA[bankActive].name}</td>
                                            <td className='p-5'>{BANK_INFORMATION_DATA[bankActive].website}</td>
                                            <td className='p-5'>{BANK_INFORMATION_DATA[bankActive].swiftCode}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="p-3 border rounded-md md:p-5">
                                    <table className="w-full">
                                        <thead>
                                            <tr>
                                                <th className='px-3 pb-3 text-left md:px-4 md:pb-4' colSpan={2}>{BANK_INFORMATION_DATA[bankActive].name}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className='p-3 text-gray-700 md:p-4 border-y'>Branch Name</td>
                                                <td className='p-3 text-gray-700 md:p-4 border-y'>{BANK_INFORMATION_DATA[bankActive].branchName}</td>
                                            </tr>
                                            <tr>
                                                <td className='p-3 text-gray-700 md:p-4 border-y'>Branch Address</td>
                                                <td className='p-3 text-gray-700 md:p-4 border-y'>{BANK_INFORMATION_DATA[bankActive].branchAddress}</td>
                                            </tr>
                                            <tr>
                                                <td className='p-3 text-gray-700 md:p-4 border-y'>Account Name</td>
                                                <td className='p-3 text-gray-700 md:p-4 border-y'>{BANK_INFORMATION_DATA[bankActive].accountName}</td>
                                            </tr>
                                            <tr>
                                                <td className='p-3 text-gray-700 md:p-4 border-y'>Account Number</td>
                                                <td className='p-3 text-gray-700 md:p-4 border-y'>{BANK_INFORMATION_DATA[bankActive].accountNumber}</td>
                                            </tr>
                                            <tr>
                                                <td className='p-3 text-gray-700 md:p-4 border-y'>Account Currecny</td>
                                                <td className='p-3 text-gray-700 md:p-4 border-y'>{BANK_INFORMATION_DATA[bankActive].accountCurrency}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                
                <Banner data={BANNER_DATA[1]}/>
            </div>
       </Guest>
    );
}
