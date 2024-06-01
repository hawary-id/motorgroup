import Banner from '@/Components/Banner';
import BreadCrumb from '@/Components/Breadcrumb';
import Loading from '@/Components/Loading';
import NewsCard from '@/Components/NewsCard';
import NotFound from '@/Components/NotFound';
import TextInput from '@/Components/TextInput';
import Title from '@/Components/Title';
import Guest from '@/Layouts/GuestLayout';
import { BANNER_DATA, NEWS_CATEGORY, NEWS_DATA } from '@/Libs/Constant';
import { Head, useForm } from '@inertiajs/react';
import { useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';
import { MdOutlineClose } from "react-icons/md";
import Select from 'react-select';

export default function News({}) {  
    const { data, setData } = useForm({
        category: "",
        search: "",
        loading: false,
        filteredData: [],
    });  
    const breadCrumbs = [
        {
            label: 'Home',
            url:'home',
            active:false
        },
        {
            label: 'News',
            url:'news',
            active:true
        }
    ]

    const categoryOptions = NEWS_CATEGORY.map((item) => ({
        value: item.label,
        label: item.label
    }));

    useEffect(() => {
        if(data.category || data.search){
            setData(prevState => ({ ...prevState, loading: true }));
            const delay = setTimeout(() => {
                const filteredData = NEWS_DATA.filter((row) => {
                    const searchCondition = row.title.toLowerCase().includes(data.search.toLowerCase());
                    const categoryCondition = !data.category || row.category.toLowerCase() === data.category.toLowerCase();
                    return searchCondition && categoryCondition;
                });                
                setData(prevState => ({ ...prevState, filteredData: filteredData, loading: false }));
            }, 750);
            return () => clearTimeout(delay);
        } else {
            setData(prevState => ({ ...prevState, filteredData: NEWS_DATA }));
        }
    }, [data.category, data.search]);

    return (
       <Guest>
        <Head title="News" />
            <div className="w-full">
                <div className="w-full h-44 md:h-96 bg-[url('/illustration/news.jpg')] bg-cover bg-center brightness-75"></div>
                <BreadCrumb
                    data={breadCrumbs}
                />
                <div className="container px-3 py-5 mx-auto md:px-0 md:py-10">
                    <Title className="font-bold text-center">{data.category ? data.category : 'All News & Vehicle Offers'}</Title>
                    <div className="grid grid-cols-1 gap-3 mb-4 md:gap-8 md:grid-cols-2 md:mb-6">
                        <Select
                            options={categoryOptions}
                            value={categoryOptions.find(option => option.value === data.category) || ''}
                            onChange={selectedOption => setData('category', selectedOption ? selectedOption.value : '')}
                            placeholder="Select by Category"
                            isClearable
                            className='text-sm'
                        />
                        <div className="relative">
                            <TextInput
                                className="w-full "
                                placeholder="Search..."
                                value={data.search ||''}
                                onChange={(e) => setData('search', e.target.value)}
                                />
                                <div className="absolute top-0 right-0 h-[38px] w-[37px] rounded-r inline-flex items-center justify-center  text-primary">
                                    {data.search ? (
                                        <button onClick={() => setData('search','')}>
                                            <MdOutlineClose className='text-lg hover:text-gray-500'/>
                                        </button>
                                    ):(
                                        <BsSearch/>
                                    )}
                                </div>
                        </div>
                    </div>

                    {data.loading ? (
                        <Loading/>
                    ):(
                        <div className="">
                            {data.filteredData.length > 0 ? (
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
                                    {data.filteredData.map((item,i) => (
                                        <NewsCard
                                            image={item.image}
                                            badge={item.badge}
                                            title={item.title}
                                            author={item.author}
                                            postDate={item.post_date}
                                            view={item.view}
                                            description={item.description}
                                            slug={item.slug}
                                            key={i+1}
                                        />
                                    ))}
                                </div>
                            ):(
                                <NotFound title="No results found for your search."/>
                            )}
                        </div>
                    )}
                </div> 
                <Banner data={BANNER_DATA[0]}/>
            </div>
       </Guest>
    );
}
