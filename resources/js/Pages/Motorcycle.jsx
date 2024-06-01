import Banner from '@/Components/Banner';
import Checkbox from '@/Components/Checkbox';
import Loading from '@/Components/Loading';
import NotFound from '@/Components/NotFound';
import ProductDetailCard from '@/Components/ProductDetailCard';
import ProductDetailCardList from '@/Components/ProductDetailCardList';
import TextInput from '@/Components/TextInput';
import Title from '@/Components/Title';
import Guest from '@/Layouts/GuestLayout';
import { BANNER_DATA, BIKE_BODY_TYPE, BIKE_BRAND_DATA, BIKE_DATA, BODY_TYPE, MODEL_BIKE_DATA, MODEL_DATA, STEERING_TYPE, VEHICLE_BRAND_DATA, VEHICLE_DATA } from '@/Libs/Constant';
import { Head, Link, useForm } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { BsGrid3X3GapFill, BsSearch } from 'react-icons/bs';
import { FaList } from 'react-icons/fa6';
import { MdOutlineClose } from 'react-icons/md';
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import Select from 'react-select';

export default function Motorcycle({}) {  
    const [loading, setLoading] = useState(true);
    const [filteredData, setFilteredData] = useState([]);
    const { data, setData, post, processing, errors, reset } = useForm({
        brand: "",
        model: "",
        body: "",
        search: "",
        minYear: 1970,
        maxYear: new Date().getFullYear(),
        yearRange: [1974, new Date().getFullYear()],
    });

    const brandOptions = BIKE_BRAND_DATA.map((item) => ({
        value:item.slug,
        label: (
            <div className='flex items-center gap-2'>
                <img src={item.image} alt={item.name} className='inline-block w-8' />
                {item.name}
            </div>
        ),
    }))

    const modelOptions = MODEL_BIKE_DATA.filter((item) => item.brand.slug === data.brand).map((item) => ({
        value: item.slug,
        label: item.name
    }))

    const bodyOptions = BIKE_BODY_TYPE.map((item) => ({
            value: item.name,
            label: item.name
    }));

    const handleChange = (newValue) => {
        setData('yearRange',newValue);
    };
    
    useEffect(() => {
        if(data.type || data.search || data.driveType || data.brand || data.model || data.yearRange || data.body){
            setLoading(true);

            const delay = setTimeout(() => {
                const filteredData = BIKE_DATA.filter((row) => {
                    const searchCondition = row.name.toLowerCase().includes(data.search.toLowerCase()) ||
                        row.brand?.slug.toLowerCase().includes(data.search.toLowerCase());
                    const brandCondition = !data.brand || row.brand?.slug.toLowerCase() === data.brand.toLowerCase();
                    const modelCondition = !data.model || row.model?.slug.toLowerCase() === data.model.toLowerCase();
                    const yearCondition = (!data.yearRange[0] || row.year >= data.yearRange[0]) && row.year <= data.yearRange[1];
                    const bodyCondition = !data.body || row.body_type.toLowerCase() === data.body.toLowerCase();
                    return searchCondition && brandCondition && modelCondition && yearCondition && bodyCondition;
                });
                
                
                setFilteredData(filteredData);
                
                setLoading(false);
            }, 750);

            return () => clearTimeout(delay);
        }else{
            setFilteredData(BIKE_DATA)
        }
    }, [data.type,data.search,data.brand,data.model,data.yearRange,data.body]);
      
    return (
       <Guest>
        <Head title="Motorcycle" />
            <div className="w-full py-5">
                <div className="container px-3 mx-auto md:px-0">
                    <div className="relative">
                        <TextInput
                            className="w-full mb-3 md:mb-5"
                            placeholder="Search by keyword"
                            value={data.search ||''}
                            onChange={(e) => setData('search', e.target.value)}
                        />
                        <div className="absolute top-0 right-0 h-[38px] w-[37px] rounded-r inline-flex items-center justify-center  text-gray-600">
                            {data.search ? (
                                <button onClick={() => setData('search','')}>
                                    <MdOutlineClose className='text-lg hover:text-red-600'/>
                                </button>
                            ):(
                                <BsSearch/>
                            )}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-3 mb-5 md:gap-5 md:grid-cols-4">
                        <Select
                            options={brandOptions}
                            isClearable={true}
                            value={brandOptions.find(option => option.value === data.brand) || ''}
                            onChange={selectedOption => setData('brand', selectedOption ? selectedOption.value : '')}
                            placeholder="Select by Make"
                            className='text-sm'
                        />
                        <Select
                            options={modelOptions}
                            isClearable={true}
                            value={modelOptions.find(option => option.value === data.model) || ''}
                            onChange={selectedOption => setData('model', selectedOption ? selectedOption.value : '')}
                            placeholder="Select by Model"
                            className='text-sm'
                        />
                        <Select
                            options={bodyOptions}
                            isClearable={true}
                            value={bodyOptions.find(option => option.value === data.body) || ''}
                            onChange={selectedOption => setData('body', selectedOption ? selectedOption.value : '')}
                            placeholder="Select by Body Type"
                            className='text-sm'
                        />
                        <div className="flex items-start gap-5">
                            <div className="relative w-full">
                                <TextInput className="w-full mb-3 cursor-not-allowed disabled:bg-gray-100" value={`${data.yearRange[0]} - ${data.yearRange[1]}`} disabled/>
                                <RangeSlider
                                    min={data.minYear}
                                    max={data.maxYear}
                                    defaultValue={[data.minYear, data.maxYear]}
                                    onInput={handleChange}
                                    className="z-0"
                                    id="range-slider-primary"
                                />
                            </div>
                        </div>
                    </div>
                    <span className='block font-semibold text-blue-600 md:hidden'>{filteredData.length} Grades Available</span>
                    <div className="flex items-center justify-between mt-1">
                        <div className="flex items-center gap-3">
                            <Link href={route('motorcycle.index')} className='px-5 pt-[10px] pb-3 text-sm text-white border rounded bg-primary hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-700'>Reset Filter</Link>
                            <span className='hidden font-semibold text-blue-600 md:block'>{filteredData.length} Grades Available</span>
                        </div>
                    </div>
                </div>     
                {loading ? (
                    <Loading/>
                ):(
                    <div className="container px-3 py-5 mx-auto md:px-0 md:mb-5 ">
                        <Title>{data.body === '' ? 'All Body Type': data.body}</Title>
                        {filteredData.length > 0 ? (
                            <div className="grid grid-cols-1 gap-3 md:gap-5 md:grid-cols-4">
                                {filteredData.map((item,i) => 
                                    <ProductDetailCard
                                        title={item.name}
                                        price={item.price}
                                        discount={item.discount}
                                        image={item.image[0].url}
                                        label="View Details"
                                        key={item.name+i}
                                        url={route('motorcycle.detail',[item.brand?.slug,item.slug])}
                                    />
                                )}
                            </div>
                        ):(
                            <NotFound title="No Product Found" subtitle="Your search did not match any products"/>  
                        )}
                    </div>
                )}
                <Banner data={BANNER_DATA[0]}/>
            </div>
       </Guest>
    );
}
