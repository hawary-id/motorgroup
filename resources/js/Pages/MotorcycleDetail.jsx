import Banner from '@/Components/Banner';
import BreadCrumb from '@/Components/Breadcrumb';
import FormContactUs from '@/Components/FormContactUs';
import Modal from '@/Components/Modal';
import MotorcycleEquipment from '@/Components/MotorcycleEquipment';
import Guest from '@/Layouts/GuestLayout';
import { BANNER_DATA, BIKE_DATA } from '@/Libs/Constant';
import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';
import { AiOutlineDashboard } from 'react-icons/ai';
import { IoCheckmarkDone, IoChevronDown, IoChevronUp, IoInformationCircleOutline } from "react-icons/io5";
import { BiSolidColorFill } from "react-icons/bi";
import { FaWhatsapp } from 'react-icons/fa6';
import { FaRegUserCircle, FaUserCircle } from 'react-icons/fa';

export default function MotorcycleDetail({slug}) { 
    const product = BIKE_DATA.find(item => item.slug === slug);
    const [allImageShow, setAllImageShow] = useState(false);
    const [modalImage,setModalImage] = useState(false);
    const [UrlImage,setUrlImage] = useState(false);
    const [activeImage,setActiveImage] = useState(product.image[0].url);

    const exteriorCount = product.exteriors.length;
    const interiorCount = product.interiors.length;
    const mechanicalCount = product.mechanicals.length;

    const [showExterior, setShowExterior] = useState(exteriorCount > 7 ? 8 : exteriorCount);
    const [showInterior, setShowInterior] = useState(interiorCount > 7 ? 8 : interiorCount);
    const [showMechanical, setShowMechanical] = useState(mechanicalCount > 7 ? 8 : mechanicalCount);
    

    const imageCount = product.image.length;

    const handleShowModal = (image) => {
        setModalImage(true);
        setUrlImage(image);
    }

    const breadCrumbs = [
        {
            label: 'Home',
            url:'home',
            active:false
        },
        {
            label: 'Motorcycle',
            url:'motorcycle.index',
            active:false
        },
        {
            label: product.name,
            url:'',
            active:true
        }
    ]  

    return (
       <Guest>
        <Head title={product.name} />
            <div className="w-full">
                <BreadCrumb data={breadCrumbs}/>
                <div className="container px-3 py-2 mx-auto md:px-0">
                    {!allImageShow ? (
                        <>
                            <div className="hidden w-full gap-[7px] overflow-hidden h-[485px] md:flex items-center">
                                {product.image[0] && (
                                    <div className="w-[56%] cursor-pointer" onClick={() => handleShowModal(product.image[0].url)}>
                                        <img src={product.image[0].url} className='object-cover w-full' alt="" />
                                    </div>
                                )}
                                <div className="w-[44%] h-[530px]">
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

                    
                    <div className="grid grid-cols-1 mb-3 md:grid-cols-6 md:gap-8 md:mb-5">
                        <div className="md:col-span-4">
                            <div className="mb-3 md:mb-5">
                                <h1 className="w-full text-2xl font-bold text-primary">{product.name}</h1>
                                <h5 className='text-base text-red-600'>$ {product.price} USD</h5>
                            </div>
                            <div className="mb-3 md:mb-5">
                                <h2 className="mb-2 text-xl font-semibold text-primary">Key Facts</h2>
                                <ul className="ml-6 text-gray-600 list-disc list-outside list-bullet">
                                    {product.key_facts.map((item,i) => (
                                        <li key={i+1}>{item.key}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mb-3 md:mb-5">
                                <h2 className="mb-2 text-xl font-semibold text-primary">Equipment and Features</h2>
                                <MotorcycleEquipment title="Fairing Material" subtitle={product.fairing_material} />
                                <MotorcycleEquipment title="Front Forks" subtitle={product.front_forks} />
                                <MotorcycleEquipment title="Rear Shock" subtitle={product.rear_shock} />
                                <MotorcycleEquipment title="Front Wheel" subtitle={product.front_wheel} />
                                <MotorcycleEquipment title="Front Tire" subtitle={product.front_tire} />
                                <MotorcycleEquipment title="Rear Wheel" subtitle={product.rear_wheel} />
                                <MotorcycleEquipment title="Rear Tire" subtitle={product.rear_tire} />
                                <MotorcycleEquipment title="Rear Hugger" subtitle={product.rear_hugger} />
                                <MotorcycleEquipment title="Swing Arm" subtitle={product.swing_arm} />
                                <MotorcycleEquipment title="Steering Dumper" subtitle={product.steering_damper} />
                                <MotorcycleEquipment title="Rear Sets" subtitle={product.rear_sets} />
                                <MotorcycleEquipment title="Front Brakes" subtitle={product.front_brakes} />
                                <MotorcycleEquipment title="Front Caliper" subtitle={product.front_caliper} />
                                <MotorcycleEquipment title="Front Discs" subtitle={product.front_discs} />
                                <MotorcycleEquipment title="Rear Brake" subtitle={product.rear_brake} />
                                <MotorcycleEquipment title="Rear Caliper" subtitle={product.rear_caliper} />
                                <MotorcycleEquipment title="Engine" subtitle={product.engine} />
                                <MotorcycleEquipment title="Throttle Body" subtitle={product.throttle_bodies} />
                                <MotorcycleEquipment title="Airbox" subtitle={product.airbox} />
                                <MotorcycleEquipment title="Exhaust System" subtitle={product.exhaust_system} />
                                <MotorcycleEquipment title="Non Factory Items" subtitle={product.non_factory_items} />
                            </div>
                            <div className="mb-3 md:mb-5">
                                <h2 className="mb-2 text-xl font-semibold text-primary">Overal Conditions</h2>
                                <p className="text-gray-700">{product.overal_condition}</p>
                            </div>
                            <div className="mb-3 md:mb-5">
                                <h2 className="mb-2 text-xl font-semibold text-primary">Service History</h2>
                                <p className="text-gray-700">{product.service_history}</p>
                            </div>
                            <div className="mb-3 md:mb-5">
                                <h2 className="mb-2 text-xl font-semibold text-primary">Summary</h2>
                                <p className="text-gray-700">{product.summary}</p>
                            </div>
                            <div className="mb-3 md:mb-5">
                                <h2 className="mb-2 text-xl font-semibold text-primary">Exterior <span className='font-light text-gray-600'>({exteriorCount})</span></h2>
                                <div className="flex items-center gap-2 mb-2 overflow-x-auto md:gap-3 md:grid md:grid-cols-4">
                                    {product.exteriors.slice(0,showExterior).map((item,i) => (
                                        <img src={item.url} alt={item.url} className='object-cover w-full h-24 cursor-pointer md:h-32' key={i+1} onClick={() => handleShowModal(item.url)}/>
                                    ))}
                                </div>
                                {exteriorCount > 8 && (
                                    <>
                                        {showExterior === 8 ? (
                                            <button
                                                onClick={() => setShowExterior(exteriorCount)}
                                                className="text-sm inline-flex items-center gap-1 font-semibold uppercase text-[#17A398]"
                                                >SHOW ALL <IoChevronDown className='text-xl'/>
                                            </button>
                                        ):(
                                            <button
                                                onClick={() => setShowExterior(8)}
                                                className="text-sm inline-flex items-center gap-1 font-semibold uppercase text-[#17A398]"
                                                >SHOW LESS <IoChevronUp className='text-xl'/>
                                            </button>
                                        )}
                                    </>
                                )}
                            </div>
                            <div className="mb-3 md:mb-5">
                                <h2 className="mb-2 text-xl font-semibold text-primary">Interior <span className='font-light text-gray-600'>({interiorCount})</span></h2>
                                <div className="flex items-center gap-2 mb-2 overflow-x-auto md:gap-3 md:grid md:grid-cols-4">
                                    {product.interiors.slice(0,showInterior).map((item,i) => (
                                        <img src={item.url} alt={item.url} className='object-cover w-full h-24 cursor-pointer md:h-32' key={i+1} onClick={() => handleShowModal(item.url)}/>
                                    ))}
                                </div>
                                {interiorCount > 8 && (
                                    <>
                                        {showInterior === 8 ? (
                                            <button
                                                onClick={() => setShowInterior(interiorCount)}
                                                className="text-sm inline-flex items-center gap-1 font-semibold uppercase text-[#17A398]"
                                                >SHOW ALL <IoChevronDown className='text-xl'/>
                                            </button>
                                        ):(
                                            <button
                                                onClick={() => setShowInterior(8)}
                                                className="text-sm inline-flex items-center gap-1 font-semibold uppercase text-[#17A398]"
                                                >SHOW LESS <IoChevronUp className='text-xl'/>
                                            </button>
                                        )
                                        }
                                    </>
                                )}
                            </div>
                            <div className="mb-3 md:mb-5">
                                <h2 className="mb-2 text-xl font-semibold text-primary">Mechanical <span className='font-light text-gray-600'>({mechanicalCount})</span></h2>
                                <div className="flex items-center gap-2 mb-2 overflow-x-auto md:gap-3 md:grid md:grid-cols-4">
                                    {product.mechanicals.slice(0,showMechanical).map((item,i) => (
                                        <img src={item.url} alt={item.url} className='object-cover w-full h-24 cursor-pointer md:h-32' key={i+1} onClick={() => handleShowModal(item.url)}/>
                                    ))}
                                </div>
                                {mechanicalCount > 8 && (
                                    <>
                                        {showMechanical === 8 ? (
                                            <button
                                                onClick={() => setShowMechanical(mechanicalCount)}
                                                className="text-sm inline-flex items-center gap-1 font-semibold uppercase text-[#17A398]"
                                                >SHOW ALL <IoChevronDown className='text-xl'/>
                                            </button>
                                        ):(
                                            <button
                                                onClick={() => setShowMechanical(8)}
                                                className="text-sm inline-flex items-center gap-1 font-semibold uppercase text-[#17A398]"
                                                >SHOW LESS <IoChevronUp className='text-xl'/>
                                            </button>
                                        )
                                        }
                                    </>
                                )
                                }
                            </div>
                        </div>
                        <div className='md:col-span-2'>
                            <FormContactUs/>
                            <div className="w-full p-5 mt-5 bg-gray-200 divide-y divide-gray-300 rounded-md">
                                <div className="">
                                    <h2 className='mb-3 text-2xl font-semibold uppercase text-primary'>Bike Overview</h2>
                                    <div className="flex items-center gap-2 mb-1 text-gray-800">
                                        <AiOutlineDashboard className='text-xl'/>
                                        <div className="pb-[3px]">{parseInt(product.odometer.toLocaleString())} Km</div>
                                    </div>
                                    <div className="flex items-center gap-2 mb-1 text-gray-800">
                                        <img src='/illustration/icon-transmission.png' className='h-[18px]'/>
                                        <div className="pb-[3px]">{product.transmission}</div>
                                    </div>
                                    <div className="flex items-center gap-2 pb-3 mb-1 text-lg text-gray-800">
                                        <BiSolidColorFill/>
                                        <div className="pb-[3px]">{product.colours}</div>
                                    </div>
                                </div>
                                <div className="py-3">
                                    <h2 className='mb-3 text-2xl font-semibold uppercase text-primary'>Any Questions?</h2>
                                    <Link href="" className='flex mb-3 items-center justify-center w-full gap-1 pt-[10px] pb-3 text-xl text-center text-white uppercase bg-emerald-600 hover:bg-emerald-700'>
                                        <FaWhatsapp className='text-xl'/>
                                        Whatshapp Us
                                    </Link>
                                    <Link href={route('contact.index')} className='text-[#17A398] font-semibold underline hover:text-cyan-700'>Contact Us</Link>
                                </div>
                                <div className="py-3">
                                    <h2 className='mb-3 text-2xl font-semibold uppercase text-primary'>Overview</h2>
                                    <div className="flex items-center gap-2 mb-1 text-gray-800">
                                        <IoCheckmarkDone className='text-xl'/>
                                        <div className="pb-[3px]">Stock #15,147</div>
                                    </div>
                                    <div className="flex items-center gap-2 mb-1 text-gray-800">
                                        <FaRegUserCircle className='text-xl'/>
                                        <div className="pb-[3px]">Available for Export to all Countries</div>
                                    </div>
                                    <div className="flex items-center gap-2 mb-1 mb-5 text-gray-800">
                                        <img src='/illustration/icon-flag-new-zealand.png' className='h-[18px]'/>
                                        <div className="pb-[3px]">Location : New Zealand</div>
                                    </div>

                                    <div className="text-lg font-semibold text-center">Contact Us for all Shipping Rate Inquire</div>
                                </div>
                            </div>
                        </div>
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
