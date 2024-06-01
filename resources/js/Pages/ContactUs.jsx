import Banner from '@/Components/Banner';
import BreadCrumb from '@/Components/Breadcrumb';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import Textarea from '@/Components/Textarea';
import Guest from '@/Layouts/GuestLayout';
import { BANNER_DATA, COUNTRIES_STEERING_DATA } from '@/Libs/Constant';
import { Head, useForm } from '@inertiajs/react';
import Select from 'react-select';
import ReCAPTCHA from 'react-google-recaptcha';
import Title from '@/Components/Title';

export default function ContactUs({}) {  
    const { data, setData, post, processing, errors } = useForm({
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        country: '',
        message: '',
        captcha: '',
    });
    const breadCrumbs = [
        {
            label: 'Home',
            url:'home',
            active:false
        },
        {
            label: 'Contact',
            url:'',
            active:true
        }
    ]  

    const countryOptions = COUNTRIES_STEERING_DATA.map((item) => ({
        value: item.country,
        label: item.country
    }));

    return (
       <Guest>
        <Head title="Contact Us" />
            <div className="w-full">
                <BreadCrumb
                    data={breadCrumbs}
                />
                <div className="container px-3 py-5 mx-auto md:px-0 md:py-10">
                    <Title className="font-bold">Contact Us</Title>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3878.410533463152!2d100.76507787583836!3d13.57171168680159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDM0JzE4LjIiTiAxMDDCsDQ2JzAzLjYiRQ!5e0!3m2!1sen!2sid!4v1715091346899!5m2!1sen!2sid"
                        className='w-full h-72 md:mb-6'
                        allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                    <div className="flex flex-col pt-6 border-t md:flex-row md:gap-6">
                        <form className="w-full pb-5 mb-5 border-b md:pr-6 md:border-r md:border-b-0 md:w-3/5 md:mb-0 md:pb-0">
                            <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2">
                                <div>
                                    <InputLabel className="after:content-['*'] after:ml-0.5 after:text-primary" htmlFor="first_name" value="First Name" />
                                    <TextInput
                                        className="w-full mt-1"
                                        placeholder="Your First Name"
                                        value={data.first_name ||''}
                                        onChange={(e) => setData('first_name', e.target.value)}
                                        />

                                    <InputError message={errors.first_name} className="mt-2" />
                                </div>
                                <div>
                                    <InputLabel className="after:content-['*'] after:ml-0.5 after:text-primary" htmlFor="last_name" value="Last Name" />
                                    <TextInput
                                        className="w-full mt-1"
                                        placeholder="Your Last Name"
                                        value={data.last_name ||''}
                                        onChange={(e) => setData('last_name', e.target.value)}
                                        />

                                    <InputError message={errors.last_name} className="mt-2" />
                                </div>
                                <div>
                                    <InputLabel className="after:content-['*'] after:ml-0.5 after:text-primary" htmlFor="email" value="Email Address" />
                                    <TextInput
                                        className="w-full mt-1"
                                        placeholder="Your Email Address"
                                        value={data.email ||''}
                                        onChange={(e) => setData('email', e.target.value)}
                                        />

                                    <InputError message={errors.email} className="mt-2" />
                                </div>
                                <div>
                                    <InputLabel className="after:content-['*'] after:ml-0.5 after:text-primary" htmlFor="phone" value="Contact Number" />
                                    <TextInput
                                        className="w-full mt-1"
                                        placeholder="Mobile Number or Land-line number"
                                        value={data.phone ||''}
                                        onChange={(e) => setData('phone', e.target.value)}
                                        />

                                    <InputError message={errors.phone} className="mt-2" />
                                </div>
                                <div>
                                    <InputLabel className="after:content-['*'] after:ml-0.5 after:text-primary" htmlFor="phone" value="Country" />
                                    <Select
                                        options={countryOptions}
                                        isClearable={true}
                                        value={countryOptions.find(option => option.value === data.country) || ''}
                                        onChange={selectedOption => setData('country', selectedOption ? selectedOption.value : '')}
                                        placeholder="Select Country"
                                        className='mt-1 text-sm'
                                    />

                                    <InputError message={errors.phone} className="mt-2" />
                                </div>
                            </div>
                            <div className='mb-3 md:mb-5'>
                                <InputLabel className="after:content-['*'] after:ml-0.5 after:text-primary" htmlFor="message" value="Message" />
                                <Textarea
                                    className="w-full h-24 mt-1 md:h-36"
                                    placeholder="Write your message here..."
                                    value={data.message ||''}
                                    onChange={(e) => setData('message', e.target.value)}
                                    />

                                <InputError message={errors.message} className="mt-2" />
                            </div>
                            <div className="w-full mb-3 md:mb-5">
                                <ReCAPTCHA
                                    className='w-full'
                                    sitekey="6Lck08opAAAAAPjFcyvRjYZZWED29lWzXxsmnWbk"
                                    onChange={(e) => setData('captcha', value)}
                                    />
                                <InputError message={errors.captcha} className="mt-2" />
                            </div>
                            <PrimaryButton className="items-center block w-full pt-[10px] pb-3 md:w-fit" disabled={processing}>
                                Submit Message
                            </PrimaryButton>
                        </form>
                        <div className="sticky w-full p-3 bg-white border rounded-lg md:p-5 md:w-2/5 h-fit drop-shadow-md top-16">
                            <h2 className="mb-3 text-2xl font-semibold text-primary">Contact Information</h2>
                            <div className="text-base text-gray-700 md:text-lg">
                                <p>Globat Auto Supply</p>
                                <p>Bangkok Free Trade Zone</p>
                                <p>No. 999/110 Moo 15</p>
                                <p>Bangsaotong District</p>
                                <p>Bangkok 10570</p>
                                <p>Thailand</p>
                                <p>Tel: +66 927939544</p>
                                <p>Mon-Fri: 8:00 until 22:00</p>
                                <p>Sat: 09:00 until 22:00</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <Banner data={BANNER_DATA[1]}/>
            </div>
       </Guest>
    );
}
