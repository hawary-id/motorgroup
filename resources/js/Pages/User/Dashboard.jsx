import Checkbox from '@/Components/Checkbox';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { BIKE_BRAND_DATA, BIKE_DATA, STEERING_TYPE } from '@/Libs/Constant';
import { Head, useForm } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import Select from 'react-select';
import { format, addDays } from 'date-fns';

export default function Dashboard(second) {
    const { data, setData} = useForm({
        driveType: false,
        brand: "",
        model: "",
        year_from: "",
        year_to: "",
        mileage_from:'',
        mileage_to:'',
        date:[],
        display: 'grid'
    });
    const [modelOptions, setModelOptions] = useState([]);
    const currentYear = new Date().getFullYear();
    const startYear = 1971; 
    const yearOptions = [];

    for (let year = startYear; year <= currentYear; year++) {
        yearOptions.push({ value: year, label: year.toString() });
    }

    yearOptions.sort((a, b) => {
        if (a.label < b.label) return 1;
        if (a.label > b.label) return -1;
        return 0;
      });

      const today = new Date();
      const dateData = [];
      
    for (let i = 0; i < 7; i++) {
        const date = addDays(today, i); 
        const formattedValue = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        const formattedDate = format(date, 'M/d (EEE)');
        dateData.push({ value: formattedValue, label: formattedDate });
    }
    
    useEffect(() => {
        const filteredModelOptions = BIKE_DATA.filter(item => item.brand?.slug === data.brand).map((item) => ({
            value: item.slug,
            label: item.name,
        }));
        setModelOptions(filteredModelOptions);
    }, [data.brand]);

    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />

            <div className="w-full py-8">
                <div className="p-5 bg-gray-100 border border-gray-200 rounded-md">
                    <div className="flex w-full text-sm font-light text-gray-600">
                        <button className="px-4 py-3 text-gray-500 bg-white border border-b-0 rounded-t">Model, Chassis and etc</button>
                        <button className="px-4 py-3 border-b">ID</button>
                        <div className="py-3 border-b grow"></div>
                    </div>
                    <div className="flex w-full gap-3 py-4 md:gap-6">
                        <select
                            onChange={(event) => setData('brand', event.target.value)}
                            value={data.brand}
                            size="6"
                            className='w-1/2 rounded'>
                            <option value="" className='text-sm text-gray-600' selected>Select Make</option>
                            {BIKE_BRAND_DATA.map((item,i) => (
                                <option value={item.slug} className='text-sm text-gray-600' key={i+1}>{item.name}</option>
                            ))}
                        </select>

                        <select
                            onChange={(event) => setData('model', event.target.value)}
                            size="6"
                            className='w-1/2 rounded'>
                            <option value="" className='text-sm text-gray-600' selected>Select Model</option>
                            {modelOptions.map((item,i) => (
                                <option value={item.value} className='text-sm text-gray-600' key={i+1}>{item.label}</option>
                            ))}
                        </select>
                        <div className="w-full">
                            <div className="flex items-center gap-5 mb-6">
                                <InputLabel value="Year" className='w-20'/>
                                <div className="grid grid-cols-2 gap-5 grow">
                                    <Select
                                        options={yearOptions}
                                        isClearable={true}
                                        value={yearOptions.find(option => option.value === data.year_from) || ''}
                                        onChange={selectedOption => setData('year_from', selectedOption ? selectedOption.value : '')}
                                        placeholder="Select From Year"
                                        className='w-full text-sm'
                                    />
                                    <Select
                                        options={yearOptions}
                                        isClearable={true}
                                        value={yearOptions.find(option => option.value === data.year_to) || ''}
                                        onChange={selectedOption => setData('year_to', selectedOption ? selectedOption.value : '')}
                                        placeholder="Select Max Year"
                                        className='w-full text-sm'
                                    />
                                </div>
                            </div>
                            <div className="flex items-center gap-5 mb-6">
                                <InputLabel value="Mileage" className='w-20'/>
                                <div className="grid grid-cols-2 gap-5 grow">
                                    <Select
                                        options={yearOptions}
                                        isClearable={true}
                                        value={yearOptions.find(option => option.value === data.mileage_from) || ''}
                                        onChange={selectedOption => setData('mileage_from', selectedOption ? selectedOption.value : '')}
                                        placeholder="Select From Year"
                                        className='w-full text-sm'
                                    />
                                    <Select
                                        options={yearOptions}
                                        isClearable={true}
                                        value={yearOptions.find(option => option.value === data.mileage_to) || ''}
                                        onChange={selectedOption => setData('mileage_to', selectedOption ? selectedOption.value : '')}
                                        placeholder="Select Max Year"
                                        className='w-full text-sm'
                                    />
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {dateData.map((item, i) => (
                                    <label className="flex items-center" key={i}>
                                        <Checkbox
                                            name="date"
                                            checked={data.date.includes(item.value)}
                                            onChange={(e) => {
                                                const isChecked = e.target.checked;
                                                const value = item.value; // Menggunakan nilai tanggal dari item
                                                let newData;
                                        
                                                if (isChecked) {
                                                    // Tambahkan nilai tanggal jika checkbox dicentang
                                                    newData = [...data.date, value];
                                                } else {
                                                    // Hapus nilai tanggal jika checkbox tidak dicentang
                                                    newData = data.date.filter(date => date !== value);
                                                }
                                        
                                                setData('date', newData); // Perbarui nilai date dengan nilai yang diperbarui
                                            }}
                                        />
                                        <span className="text-sm font-light text-gray-600 ms-2">{item.label}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col items-center w-1/2">
                            <PrimaryButton className='inline-flex items-center justify-center w-full'><BiSearch className='mr-1 text-xl'/>Search</PrimaryButton>
                            <button className='mt-2 text-sm font-light text-gray-700 hover:text-gray-900 hover:underline'>Save Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}