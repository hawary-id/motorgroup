import Banner from '@/Components/Banner';
import BreadCrumb from '@/Components/Breadcrumb';
import Title from '@/Components/Title';
import Guest from '@/Layouts/GuestLayout';
import { BANNER_DATA, NEWS_DATA } from '@/Libs/Constant';
import { Head, useForm } from '@inertiajs/react';

export default function NewsDetail({slug}) {  
    const { data, setData } = useForm({
        category: "",
        search: "",
        loading: false,
    });  

    const news = NEWS_DATA.find(item => item.slug === slug);
    
    console.log(news);
    const breadCrumbs = [
        {
            label: 'Home',
            url:'home',
            active:false
        },
        {
            label: 'News',
            url:'news.index',
            active:false
        },
        {
            label: news.title,
            url:'',
            active:true
        }
    ]

    return (
       <Guest>
        <Head title={news.title} />
            <div className="w-full">
                <BreadCrumb
                    data={breadCrumbs}
                    className="md:px-[72px]"
                />
                <div className="container p-5 px-3 mx-auto text-gray-600 md:px-[72px]">
                    <img src={news.image} alt="" className="w-full mb-3 md:mb-5" />
                    <Title>{news.title}</Title>
                    <flex className="flex items-center gap-5 pb-5 mb-3 text-sm border-b md:mb-6 ">
                        <div className="font-light text-primary">Publisher : <span className='text-gray-600'>{news.post_date}</span></div>
                        <div className="font-light text-primary">Category : <span className='p-1 text-xs text-white rounded bg-sky-500'>{news.category}</span></div>
                    </flex>
                    <ul className="mb-3 ml-8 list-disc list-outside">
                        <li>Since its launch in 1951, the Land Cruiser has supported the safety and security of its owners and passengers, and allowed people to go anywhere and everywhere and come back alive and safe. In order to continue living up to its reputation, the new Land Cruiser has evolved, and now boasts improved reliability, durability, and off-road performance.</li>
                        <li>The identity of the new Land Cruiser 300 Series has been reshaped by merging cutting-edge technologies with technologies accumulated over many years, enabling the driver to drive on any type of road in the world without tiring. The new Land Cruiser will launch today.</li>
                    </ul>
                    <p className='mb-3'>Toyota City, Japan, August 2, 2021―Toyota Motor Corporation (Toyota) announced that it has launched its new Land Cruiser today, August 2.</p>
                    <img src="/news/news-detail-1.jpg" alt="" className='w-4/6'/>
                    <p className='mb-3'>ZX (Gasoline engine) (options shown)</p>
                    <img src="/news/news-detail-2.jpg" alt="" className='w-4/6'/>
                    <p className='mb-3'>GR SPORT (Gasoline engine) (options shown)</p>
                    <h2 className="mb-3 text-lg font-semibold text-primary md:text-xl">Supporting lives, livelihoods, and more fulfilling lifestyles all over the world</h2>
                    <p className="mb-3">Launched in August 1951, the Land Cruiser was originally known as the "Toyota BJ," a four-wheel-drive vehicle equipped with a powerful engine. In the 70 years since, it has sought to deliver safety and security to diverse customers and other people involved with the vehicle.</p>
                    <p className="mb-3">All over the world, the Land Cruiser has supported lives, livelihoods, and more fulfilling lifestyles, and promised to take people anywhere and everywhere, and come back alive and safe. Now, the Land Cruiser's essence of "reliability, durability, and off-road performance" has further evolved, based on the actual usage situations of its global customers. A cumulative total of approximately 10.6 million units―and more than 300,000 units*1 a year―are being cherished by customers in 170 countries and regions all over the world.</p>
                    <p className="mb-1">*1	As of end of June 2021. Both the cumulative and annual numbers include the Lexus LX and GX.</p>
                    <h2 className="mb-3 text-lg font-semibold text-primary md:text-xl">Completely redesigned: Inheritance and evolution, easy to drive and difficult to tire</h2>
                    <p className="mb-3">The new Land Cruiser 300 Series is a complete redesign of the outgoing 200 Series, which launched in 2007. Its development objectives are outlined below</p>
                    <ul className="mb-3 ml-8 list-disc list-outside">
                        <li>Inheriting and evolving the Land Cruiser's essence of "reliability, durability, and off-road performance"</li>
                        <li>Creating a riding experience that enables the driver to drive with ease on any type of road around the world without tiring easily</li>
                    </ul>
                    <p className="mb-3">With these objectives in mind, Toyota retained the same frame structure, and allied it with the new GA-F platform, which is based on the TNGA philosophy. The vehicle's identity has also been reshaped by merging cutting-edge technologies with technologies accumulated over many years.</p>
                    <p className="mb-3">The new Land Cruiser's twin development themes of "inheritance and evolution" and "easy to drive and difficult to tire" are reflected in every aspect of the vehicle. An overview is provided below.</p>
                    <h2 className="mb-3 text-lg font-semibold text-primary md:text-xl">Vehicle Outline</h2>
                    <ul className="mb-3 ml-8 list-disc list-outside">
                        <li>The GA-F Platforma refined ride and improved environmental performance</li>
                        <li>Body and framehigh rigidity with a significant 200-kilogram weight reduction</li>
                    </ul>
                    <img src="/news/news-detail-3.jpg" alt="" className='w-4/6'/>
                    <p className="mb-3">The new Land Cruiser adopts an updated version of the traditional ladder frame. By utilizing the latest welding technologies, the high-rigidity (20% more rigid than the 200 Series) lightweight frame boasts improved collision safety performance, quietness, and ride quality.</p>
                    <p className="mb-3">The body combines an increased number of high-tensile steel plates with an aluminum bonnet, roof, and door panels; the power train has been moved 70 mm rearward and 28 mm downward.</p>
                    <p className="mb-3">These improvements have led to a significant reduction in body weight of approximately 200 kg, a lower center of gravity, and superior front-rear weight distribution. Together with an enhanced driving position, the new Land Cruiser delivers a ride more in tune with its driver's intentions. The reduction in body weight contributes to improving Land Cruiser's environmental performance.</p>
                    <ul className="mb-3 ml-8 list-disc list-outside">
                        <li>Newly developed suspensionRefined on-road steering stability and outstanding off-road performance</li>
                    </ul>
                    <img src="/news/news-detail-4.jpg" alt="" className='w-4/6'/>
                    <p className="mb-3">In line with its updated platform, the new Land Cruiser features a newly developed high-mount double-wishbone front and trailing-link rigid-axle rear suspension system. The position of the rear shock absorbers has been optimized for improved ride comfort and steering stability.</p>
                    <p className="mb-3">Modifying the location of the suspension arms has resulted in a stable body posture even when braking, while also improving wheel articulation―the ability of its tires to stay on the ground. These have led to superior off-road performance.</p>
                    <p className="mb-5">The vehicle uses a new Linear Solenoid Adaptive Variable Suspension (AVS) system, which controls shock absorbers' damping force independently for each wheel in response to road conditions and driver operation, for improved steering stability and ride comfort. (Equipped as standard on the ZX and GR Sport grades)</p>
                    <ul className="mb-3 ml-8 list-disc list-outside">
                        <li>A new structure for the Land CruiserOff-road durability and the needs of the times</li>
                    </ul>
                    <h3 className="mb-3 text-lg text-primary md:text-xl">Hydraulic power steering with steering actuator</h3>
                    <p className="mb-3">The new Land Cruiser combines a hydraulic power steering system capable of withstanding use in harsh environments with an electric steering actuator. This not only enables the addition of steering support functions such as Lane Tracing Assist, but also delivers outstanding maneuverability at low speeds, reduced kickback while driving off-road, and a crisper steering feel. (Equipped as standard on the ZX, GR Sport, and VX grades)</p>
                    <h3 className="mb-3 text-lg text-primary md:text-xl">Electronic Control Brake</h3>
                    <p className="mb-5">The new Land Cruiser is fitted with an electronic control brake system that detects brake pedal input to generate optimal braking force via its hydraulic brakes and achieve more linear braking. (Equipped as standard on the ZX, GR Sport, and VX grades)</p>
                    <ul className="mb-3 ml-8 list-disc list-outside">
                        <li>Other functions designed to improve steering stability and maneuverability</li>
                    </ul>
                    <h3 className="mb-3 text-lg text-primary md:text-xl">Rear Torsen® LSD</h3>
                    <p className="mb-3">The new Land Cruiser is equipped with Torsen® Limited Slip Differential (LSD)*2 to guarantee outstanding rear wheel traction. When turning and accelerating, the system optimally distributes drive torque according to the load experienced by the rear-left and rear-right wheels, so providing superb levels of control.</p>
                    <p className="mb-3">When driving straight, the system responds quickly to changes in road conditions for improved stability. (Equipped as standard on the ZX grade)</p>
                    <p className="">*2	Torsen® is a trademark of JTEKT CORPORATION</p>
                    <h2 className="mb-3 text-lg font-semibold text-primary md:text-xl">Support for off-road driving</h2>
                    <ol className="mb-3 ml-8 list-decimal list-outside">
                        <li>
                            <p className="">Multi Terrain Select</p>
                            <p className="mb-3">When driving off road, Multi Terrain Select provides support in road conditions in which it is easy to get stuck due to wheel spin, or it is easy to lose speed due to a lack of drive torque. Drivers can select one of six modes―Auto, Dirt, Sand, Mud, Deep Snow, and Rock―and the system delivers guaranteed off-road performance through the automatic and integrated control of drive torque, suspension, and brake hydraulics.</p>
                            <p className="mb-3">The operational range of Multi Terrain Select has also been expanded to the high-range H4 mode, enabling it to be engaged in a wider range of off-road situations. In Auto mode, which assesses prevailing road conditions via a variety of sensor data and optimizes drive torque accordingly, the system delivers the appropriate off-road performance in line with the prevailing driving conditions, without the driver having to manually switch modes.</p>
                        </li>
                        <li>
                            <p className="">Multi Terrain Monitor</p>
                            <p className="mb-3">Multi Terrain Monitor is a system that uses four cameras―positioned to the front, rear, and both sides of the vehicle―to help the driver check conditions around the vehicle. The driver can switch between images captured by each of the four cameras, and so check road conditions in blind spots.</p>
                            <p className="mb-3">If the vehicle is stopped while the screen is displaying images from the front-facing camera, the driver can press an on-screen button to switch to Underfloor View. This uses past images taken by the front-facing camera before the vehicle was in its current position, to show what is currently beneath the vehicle. By superimposing the current car and tire position over this image, the driver can check underfloor conditions and front wheel position. A new view is also available: the car is made transparent, and an image showing the area around the rear wheels is magnified. This enables the driver to ascertain conditions around the rear wheels, and estimate distances to obstacles―invaluable when trying to free the vehicle from a stuck position, or exit a dead end. (Available as a manufacturer's option, together as a set with the T-Connect SD Navigation System, on all grades except the GX grade)</p>
                        </li>
                        <li>
                            <p className="">12.3-inch display (a manufacturer's option) with off-road display function</p>
                            <p className="mb-3">The new Land Cruiser comes with a dedicated off-road information display screen. By displaying inclinometer data, locking differential engagement, accelerator and brake work, and other information on a large screen, the driver can intuitively grasp the vehicle's situation.</p>
                        </li>
                        <li>
                            <p className="mb-5">A new power traindelivering the power and the environmental performance appropriate to the new Land Cruiser</p>
                            
                        </li>
                        
                    </ol>
                    <ul className="mb-3 ml-8 list-disc list-outside">
                        <li>3.5-liter V6 twin-turbo gasoline engine</li>
                    </ul>
                    <img src="/news/news-detail-5.jpg" alt="" className='w-4/6 mb-3'/>
                    <p className="mb-3">The new Land Cruiser is available with a newly developed 3.5-liter V6 twin-turbo gasoline engine, with a maximum output of 305 kW (415 PS) and a maximum torque of 650 Nm. It combines the TNGA philosophy with the traditional reliability of the Land Cruiser.</p>
                    <p className="mb-5">The direct-injection 4-stroke gasoline engine superior version with turbo (D-4ST) has a multi-hole direct injector, a longer stroke, and optimized valve angle positioning for high-speed combustion, and the high-efficiency twin-turbo delivers powerful torque at low speeds and outstanding supercharger response.</p>
                    <ul className="mb-3 ml-8 list-disc list-outside">
                        <li>3.3-liter V6 twin-turbo diesel engine</li>
                    </ul>
                    <img src="/news/news-detail-6.jpg" alt="" className='w-4/6 mb-3'/>
                    <p className="mb-3">The new Land Cruiser is available with a newly developed 3.5-liter V6 twin-turbo gasoline engine, with a maximum output of 305 kW (415 PS) and a maximum torque of 650 Nm. It combines the TNGA philosophy with the traditional reliability of the Land Cruiser.</p>
                    <p className="mb-5">The direct-injection 4-stroke gasoline engine superior version with turbo (D-4ST) has a multi-hole direct injector, a longer stroke, and optimized valve angle positioning for high-speed combustion, and the high-efficiency twin-turbo delivers powerful torque at low speeds and outstanding supercharger response.</p>
                    <ul className="mb-3 ml-8 list-disc list-outside">
                        <li>3.3-liter V6 twin-turbo diesel engine</li>
                    </ul>
                    <img src="/news/news-detail-7.jpg" alt="" className='w-4/6 mb-3'/>
                    <p className="mb-3">The 3.3-liter V6 twin-turbo diesel engine features various optimizations, such as to its piston combustion chambers, intake ports, and injectors. It combines a maximum output of 227 kW (309 PS) and a maximum torque of 700 Nm with outstanding fuel efficiency. From a driving perspective, the supercharger performance of the newly adopted variable-nozzle two-way twin-turbo promises thrilling acceleration in all manner of scenarios. The superb responsiveness of the single-turbo offers powerful acceleration at low speeds; at high speeds, the large intake volume of the twin-turbo contributes to smooth acceleration.</p>
                </div>
                <Banner data={BANNER_DATA[0]}/>
            </div>
       </Guest>
    );
}
