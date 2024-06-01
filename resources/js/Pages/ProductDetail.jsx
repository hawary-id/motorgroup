import Banner from '@/Components/Banner';
import BreadCrumb from '@/Components/Breadcrumb';
import FormContactUs from '@/Components/FormContactUs';
import Modal from '@/Components/Modal';
import Guest from '@/Layouts/GuestLayout';
import { BANNER_DATA, COUNTRIES_STEERING_DATA, VEHICLE_DATA } from '@/Libs/Constant';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import { FaRegFilePdf } from "react-icons/fa";
import { FaCheck } from 'react-icons/fa6';
import { IoInformationCircleOutline } from "react-icons/io5";

export default function ProductDetail({slug}) { 
    const product = VEHICLE_DATA.find(item => item.slug === slug);

    const [allImageShow, setAllImageShow] = useState(false);
    const [modalImage,setModalImage] = useState(false);
    const [UrlImage,setUrlImage] = useState(false);
    const [activeImage,setActiveImage] = useState(product.image[0].url);

    const imageCount = product.image.length;

    const handleShowModal = (image) => {
        setModalImage(true);
        setUrlImage(image);
    }

    const countryOptions = COUNTRIES_STEERING_DATA.map((item) => ({
        value: item.country,
        label: item.country
    }));

    function calculateDynamicLength(originalLength, divisor) {
        const remainder = originalLength % divisor;
        if (remainder === 0) {
          return parseInt(originalLength);
        } else {
          const additionalLength = divisor - remainder;
          return parseInt(originalLength + additionalLength);
        }
    }

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
            label: product.name,
            url:'vehicle.index',
            active:true
        }
    ]  

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };


    return (
       <Guest>
        <Head title={product.name} />
            <div className="w-full">
                <BreadCrumb data={breadCrumbs}/>
                <div className="container px-3 py-3 mx-auto md:py-7 md:px-0">
                    {!allImageShow ? (
                        <>
                            <div className="hidden w-full gap-[7px] overflow-hidden h-[521px] md:flex items-center">
                                {product.image[0] && (
                                    <div className="w-[56%] cursor-pointer" onClick={() => handleShowModal(product.image[0].url)}>
                                        <img src={product.image[0].url} className='object-cover w-full' alt="" />
                                    </div>
                                )}
                                <div className="w-[44%] h-[520px]">
                                    <div className="grid grid-flow-col grid-rows-3 grid-cols-3 gap-[7px]">
                                        {[...Array(9)].map((_, i) => {
                                            const index = i + 1;
                                            const imageIndex = index < product.image.length ? index : null;
                                            const image = imageIndex !== null ? product.image[imageIndex] : null;
                                            const additionalClass = index === 9 && product.image.length > 8 ? 'brightness-50  ' : '';

                                            return (
                                                image ? (
                                                    <div className={`relative w-full overflow-hidden ${image && 'cursor-pointer'}`} key={index} onClick={() => handleShowModal(image?.url)}>
                                                        <img src={image.url} alt="" className={`w-full h-full object-cover ${additionalClass}`} />
                                                        {additionalClass && (
                                                            <div className="absolute top-0 left-0 flex justify-center w-full h-full bg-gray-800/50">
                                                                <div className="flex items-center justify-center w-full h-full text-lg text-center text-white md:text-3xl">+ {product.image.length - 8}</div>
                                                            </div>
                                                        )}
                                                    </div>
                                                ):(
                                                    <div className="relative w-full overflow-hidden" key={index}>
                                                        <img src="/vehicle-data/not-available.png" alt="" className="object-cover w-full h-full"/>
                                                    </div>
                                                )
                                            )
                                        })}
                                    </div>
                                </div>
                                
                            </div>
                            <div className="w-full md:hidden">
                                <div className="relative w-full h-full mb-2 overflow-hidden group">
                                    <img src={activeImage} alt="" className='w-full'/>
                                </div>
                          
                                <div className="flex gap-2 overflow-x-auto">
                                    {product.image.map((item,i) => (
                                        <img src={item.url} alt="" className={`w-32 transition-all ease-in-out ${activeImage === item.url ? 'brightness-100': 'brightness-[30%]'}`} onClick={() => setActiveImage(item.url)} key={i+1}/>
                                    ))}    
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="grid grid-cols-3 gap-2 md:grid-cols-10">
                            {product.image.map((item, i) => (
                                <button className="relative w-full h-full overflow-hidden group" key={i + 1} onClick={() => handleShowModal(item.url)}>
                                    <img src={item.url} alt="" className='object-cover w-full h-full'/>
                                </button>
                            ))}
                        </div>
                    )}
                    <div className="flex justify-between mt-2 mb-5">
                        <div className="flex items-center font-light text-gray-600">
                            <span className="mr-1">
                                Click on image to enlarge
                            </span>
                            <IoInformationCircleOutline className='text-lg text-blue-500' />
                        </div>

                        {imageCount > 10 && (
                            <button onClick={() => setAllImageShow(!allImageShow)}  className='font-semibold text-red-600 hover:text-red-700'>
                                {allImageShow ? 'View Less Image': 'View All Image'}
                            </button>
                        )}
                   </div>

                    <div className="flex flex-col pb-3 mb-3 border-b md:items-center md:flex-row md:justify-between md:mb-5">
                        <div className="">
                            <h1 className="w-full text-2xl text-primary">{product.name}</h1>
                            <h5 className='text-base text-red-600'>$ {product.price} USD</h5>
                        </div>
                        <button className="inline-flex items-center justify-center w-full py-2 mt-2 text-sm text-center uppercase border rounded-md border-primary md:w-fit md:mt-0 md:px-4 hover:bg-primary active:bg-primary focus:bg-primary hover:text-white focus:text-white active:text-white">
                            Download PDF
                            <FaRegFilePdf className='ml-1'/>
                        </button>
                    </div>
                    <div className="grid grid-cols-1 mb-3 md:grid-cols-5 md:gap-8 md:mb-5">
                        <div className="col-span-1 mb-3 md:col-span-3 md:mb-0">
                            <h2 className="mb-2 text-xl font-semibold text-primary">Model Description</h2>
                            <div className="col-span-2 p-3 mb-5 border rounded-md md:border-l md:rounded-l-md md:border-y md:p-5">
                                <table className="w-full text-sm table-fixed md:text-base">
                                    <tr className='w-full border-y'>
                                        <td className='px-3 py-2 text-gray-500'>Steering</td>
                                        <td className='font-semibold text-gray-600'colSpan={2}><span className="font-bold text-gray-900">{product.steering?.name}</span> (Steering Wheel on the Left side of Cabin)</td>
                                    </tr>
                                    <tr className='w-full border-y'>
                                        <td className='px-3 py-2 text-gray-500'>Model Description</td>
                                        <td className='font-semibold text-gray-600' colSpan={2}>{product.description}</td>
                                    </tr>
                                    <tr className='w-full border-y'>
                                        <td className='px-3 py-2 text-gray-500'>Car Code</td>
                                        <td className='font-semibold text-gray-600' colSpan={2}>{product.code}</td>
                                    </tr>
                                    <tr className='w-full border-y'>
                                        <td className='px-3 py-2 text-gray-500'>Year</td>
                                        <td className='font-semibold text-gray-600' colSpan={2}>{product.year}</td>
                                    </tr>
                                    <tr className='w-full'>
                                        <td className='px-3 py-2 text-gray-500'>Colours Available</td>
                                        <td className='font-semibold text-gray-600' colSpan={2}>{product.colours}</td>
                                    </tr>
                                </table>
                            </div>

                            <h2 className="mb-2 text-xl font-semibold text-primary">Engine & Drive</h2>
                            <div className="col-span-2 p-3 border rounded-md md:border-l md:rounded-l-md md:border-y md:p-5">
                                <table className="w-full text-sm table-fixed md:text-base">
                                    <tr className='w-full border-y'>
                                        <td className='px-3 py-2 text-gray-500'>Engine</td>
                                        <td className='font-semibold text-gray-600' colSpan={2}>{product.engine}</td>
                                    </tr>
                                    <tr className='w-full border-y'>
                                        <td className='px-3 py-2 text-gray-500'>Fuel Type</td>
                                        <td className='font-semibold text-gray-600' colSpan={2}>{product.fuel_type}</td>
                                    </tr>
                                    <tr className='w-full border-y'>
                                        <td className='px-3 py-2 text-gray-500'>Emissions</td>
                                        <td className='font-semibold text-gray-600' colSpan={2}>{product.emission}</td>
                                    </tr>
                                    <tr className='w-full border-y'>
                                        <td className='px-3 py-2 text-gray-500'>Output (hp/rpm)</td>
                                        <td className='font-semibold text-gray-600' colSpan={2}>{product.output}</td>
                                    </tr>
                                    <tr className='w-full border-y'>
                                        <td className='px-3 py-2 text-gray-500'>Torque (kg-m/rpm)</td>
                                        <td className='font-semibold text-gray-600'>{product.torque}</td>
                                    </tr>
                                    <tr className='w-full border-y'>
                                        <td className='px-3 py-2 text-gray-500'>Transmission</td>
                                        <td className='font-semibold text-gray-600' colSpan={2}>{product.transmission}</td>
                                    </tr>
                                    <tr className='w-full'>
                                        <td className='px-3 py-2 text-gray-500'>Drive Type</td>
                                        <td className='font-semibold text-gray-600' colSpan={2}>{product.drive_type}</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div className='md:col-span-2'>
                            <FormContactUs/>
                        </div>
                    </div>
                    <h2 className="mb-2 text-xl font-semibold text-primary">Dimension and Weight</h2>
                    <div className="p-3 mb-3 border rounded-md md:mb-5 border-y md:p-5">
                        <table className="w-full text-sm table-fixed md:text-base">
                            <tr className='w-full border-y'>
                                <td className='px-3 py-2 text-gray-500'>Wheele Size and Type</td>
                                <td className='font-semibold text-gray-600' colSpan={2}>{product.wheele_size_type}</td>
                            </tr>
                            <tr className='w-full border-y'>
                                <td className='px-3 py-2 text-gray-500'>Tire Size</td>
                                <td className='font-semibold text-gray-600' colSpan={2}>{product.tire_size}</td>
                            </tr>
                            <tr className='w-full border-y'>
                                <td className='px-3 py-2 text-gray-500'>Dimension (mm)</td>
                                <td className='font-semibold text-gray-600' colSpan={2}>{product.dimensions}</td>
                            </tr>
                            <tr className='w-full border-y'>
                                <td className='px-3 py-2 text-gray-500'>Fuel Tank Capacity</td>
                                <td className='font-semibold text-gray-600' colSpan={2}>{product.tank_capacity} L</td>
                            </tr>
                            <tr className='w-full border-y'>
                                <td className='px-3 py-2 text-gray-500'>Number of Doors</td>
                                <td className='font-semibold text-gray-600'>{product.number_door} Doors</td>
                            </tr>
                            <tr className='w-full'>
                                <td className='px-3 py-2 text-gray-500'>Seating Capacity</td>
                                <td className='font-semibold text-gray-600' colSpan={2}>{product.seating_capacity} Seats</td>
                            </tr>
                        </table>
                    </div>

                    <h2 className="mb-2 text-xl font-semibold text-primary">Safety and Features</h2>
                    <div className={`grid grid-cols-1 md:grid-flow-col md:grid-rows-6 md:grid-cols-3 p-3 mb-3 border rounded-md md:mb-5 border-y md:p-5`}>
                        {product.safeties.map((item,i) => (
                            <div className="inline-flex items-center w-full gap-1 px-3 py-2 text-sm text-gray-500 border-t" key={i+1}>
                                <FaCheck className='text-lg font-bold text-emerald-500'/>
                                {item.name}
                            </div>
                        ))}
                    </div>

                    <h2 className="mb-2 text-xl font-semibold text-primary">Interior Features</h2>
                    <div className={`grid grid-cols-1 md:grid-flow-col md:grid-rows-5 md:grid-cols-3 p-3 mb-3 border rounded-md md:mb-5 border-y md:p-5`}>
                        {product.interiors.map((item,i) => (
                            <div className="inline-flex items-center w-full gap-1 px-3 py-2 text-sm text-gray-500 border-t" key={i+1}>
                                <FaCheck className='text-lg font-bold text-emerald-500'/>
                                {item.name}
                            </div>
                        ))}
                    </div>

                    <h2 className="mb-2 text-xl font-semibold text-primary">Exterior Features</h2>
                    <div className={`grid grid-cols-1 md:grid-flow-col md:grid-rows-4 md:grid-cols-3 p-3 mb-3 border rounded-md md:mb-5 border-y md:p-5`}>
                        {product.exteriors.map((item,i) => (
                            <div className="inline-flex items-center w-full gap-1 px-3 py-2 text-sm text-gray-500 border-t" key={i+1}>
                                <FaCheck className='text-lg font-bold text-emerald-500'/>
                                {item.name}
                            </div>
                        ))}
                    </div>
                </div>
                <Banner data={BANNER_DATA[0]}/>
            </div>

            <Modal show={modalImage} onClose={() => setModalImage(!modalImage)} maxWidth="3xl">
                {UrlImage && (
                    <img src={UrlImage} alt="" className="w-full" />
                )}
            </Modal>
       </Guest>
    );
}
