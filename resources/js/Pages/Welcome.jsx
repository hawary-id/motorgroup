import Banner from '@/Components/Banner';
import BrandCard from '@/Components/BrandCard';
import BrandType from '@/Components/BrandType';
import HeaderSection from '@/Components/HeaderSection';
import NewsCard from '@/Components/NewsCard';
import PartCard from '@/Components/PartCard';
import ProductDetailCard from '@/Components/ProductDetailCard';
import ValueCard from '@/Components/ValueCard';
import Guest from '@/Layouts/GuestLayout';
import { BANNER_DATA, BIKE_DATA, MOTORCYCLE_DATA, NEWS_DATA, PART_DATA, QUOTE, SLIDER_DATA, VALUES_DATA, VEHICLE_BRAND_DATA, VEHICLE_DATA, VEHICLE_TYPE_DATA } from '@/Libs/Constant';
import { Head } from '@inertiajs/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Welcome({}) {
    const firstFourData = VEHICLE_DATA.slice(0, 4);
    
    return (
       <Guest>
        <Head title="Home" />
            <div className="w-full">
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    loop={true}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {SLIDER_DATA.map((item,i) => (
                        <SwiperSlide key={item.label+i}>
                            <img src={item.image_large} className='w-full object-cover hidden md:block h-[720px]' alt={item.label} />
                            <img src={item.image_small} className='block object-cover w-full md:hidden' alt={item.label} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                    
            </div>
            <div className="w-full p-3 text-sm font-semibold text-center text-white bg-primary md:text-lg">
                {QUOTE}
            </div>
            <div className="w-full">
                <div className="container grid grid-cols-3 gap-3 px-3 py-3 mx-auto md:gap-5 md:py-5 md:mb-5 md:px-0 md:grid-cols-9">
                    {VEHICLE_BRAND_DATA.map((item,i) => (
                        <BrandCard image={item.image} label={item.name} slug={item.slug} key={item.name+i}/>
                    ))}
                </div>
                <div className="container grid grid-cols-3 gap-3 px-3 py-3 mx-auto md:gap-5 md:py-5 md:mb-5 md:px-0 md:grid-cols-9">
                    {VEHICLE_TYPE_DATA.map((item,i) => (
                        <BrandType url="" image={item.image} label={item.name} key={item.name+i}/>
                    ))}
                    <BrandType url="" image="" label=""/>
                </div>
                <HeaderSection title="New Vehicles" longTitle="Left Hand Drive and Right Hand Drive Vehicles" subtitle="New Vehicles"/>
                <div className="container grid grid-cols-1 gap-3 p-3 mx-auto md:px-0 md:grid-cols-4 md:gap-5">
                    {VEHICLE_DATA.slice(0,8).map((item,i) => (
                       <ProductDetailCard
                            title={item.name}
                            price={item.price}
                            discount={item.discount}
                            image={item.image[0].url}
                            url={route('vehicle.detail',[item.brand?.slug,item.slug])}
                            label="View Vehicle"
                            key={item.name+i}/>
                    ))}
                </div>

                <HeaderSection title="New Electric Vehicles" longTitle="Left Hand Drive and Right Hand Drive - New Generation Power" subtitle="New Vehicles"/>
                <div className="container grid grid-cols-1 gap-3 p-3 mx-auto mb-3 md:px-0 md:grid-cols-4 md:gap-5 md:mb-5">
                    {firstFourData.map((item,i) => (
                        <ProductDetailCard
                            title={item.name}
                            price={item.price}
                            discount={item.discount}
                            image={item.image[0].url}
                            label="View Vehicle"
                            url={route('vehicle.detail',[item.brand?.slug,item.slug])}
                            key={item.name+i}/>
                    ))}
                </div>

                
                <Banner data={BANNER_DATA[0]}/>
                <HeaderSection title="Used Vehicles" longTitle="Left Hand Drive and Right Hand Drive Quality Inspected Vehicles" subtitle="New Vehicles"/>
                <div className="container grid grid-cols-1 gap-3 p-3 mx-auto mb-3 md:px-0 md:grid-cols-4 md:gap-5 md:mb-5">
                    {firstFourData.map((item,i) => (
                        <ProductDetailCard
                            title={item.name}
                            price={item.price}
                            discount={item.discount}
                            image={item.image[0].url}
                            label="View Vehicle"
                            url={route('vehicle.detail',[item.brand?.slug,item.slug])}
                            key={item.name+i}/>
                    ))}
                </div>
                
                <Banner data={BANNER_DATA[1]}/>
                <HeaderSection title="Motorcycles" longTitle="Our Collection of Rare and Collectable Motorcycles are for Export Sale" subtitle="Motorcycles"/>
                <div className="container grid grid-cols-1 gap-3 p-3 mx-auto md:px-0 md:grid-cols-4 md:gap-5">
                    {BIKE_DATA.slice(0,4).map((item,i) => (
                        <ProductDetailCard
                            title={item.name}
                            price={item.price}
                            discount={item.discount}
                            image={item.image[0].url}
                            label="View Moto"
                            key={item.name+i}
                            target={true}
                            url='https://motoauc.42web.io/'
                        />
                    ))}
                </div>
                
                <HeaderSection title="Part and Accessories" longTitle="for All Makes and Models"/>
                <div className="container grid grid-cols-1 gap-3 p-3 mx-auto md:px-0 md:grid-cols-3 md:gap-5">
                    {PART_DATA.map((item,i) => (
                        <PartCard image={item.image} key={i}/>
                    ))}
            
                </div>

                <HeaderSection title="Latest News" longTitle="and Vehincle Releases" subtitle="News and Vehincle Releases"/>
                <div className="container grid grid-cols-1 gap-3 p-3 mx-auto md:px-0 md:grid-cols-3 md:gap-5">
                    {NEWS_DATA.slice(0,3).map((item,i) => (
                        <NewsCard
                            image={item.image}
                            badge={item.badge}
                            title={item.title}
                            author={item.author}
                            postDate={item.post_date}
                            view={item.view}
                            description={item.description}
                            slug={item.slug}
                            key={item.title+i}/>
                    ))}
                </div>
                <div className="container grid grid-cols-1 gap-5 px-3 py-5 mx-auto md:py-10 md:grid-cols-4 md:px-10">
                    {VALUES_DATA.map((item,i) => (
                        <ValueCard icon={item.icon} title={item.title} subtitle={item.subtitle} key={item.title+i}/>
                    ))}
                </div>
            </div>
       </Guest>
    );
}
