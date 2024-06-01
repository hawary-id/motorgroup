import InputError from "./InputError";
import InputLabel from "./InputLabel";
import TextInput from "./TextInput";
import Textarea from "./Textarea";
import ReCAPTCHA from "react-google-recaptcha";
import PrimaryButton from "./PrimaryButton";
import { useForm } from "@inertiajs/react";
import { COUNTRIES_STEERING_DATA } from "@/Libs/Constant";
import Select from 'react-select';

export default function FormContactUs(second) {
    const { data, setData, post, processing, errors } = useForm({
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        country: '',
        message: '',
        captcha: '',
    });

    const countryOptions = COUNTRIES_STEERING_DATA.map((item) => ({
        value: item.country,
        label: item.country
    }));

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    
    return (
        <>
            <h2 className="mb-2 text-xl font-semibold text-primary">Have Questions about this vehicle?</h2>
            <form onSubmit={submit} className="p-3 border rounded-md md:p-5">
                <div className="grid grid-cols-1 gap-5 mb-3 md:grid-cols-2 md:mb-5">
                    <div>
                        <InputLabel className="after:content-['*'] after:ml-0.5 after:text-primary" htmlFor="first_name" value="First Name" />
                        <TextInput
                            className="w-full mt-1"
                            placeholder="First Name"
                            value={data.first_name ||''}
                            onChange={(e) => setData('first_name', e.target.value)}
                            />

                        <InputError message={errors.first_name} className="mt-2" />
                    </div>
                    <div>
                        <InputLabel className="after:content-['*'] after:ml-0.5 after:text-primary" htmlFor="last_name" value="Last Name" />
                        <TextInput
                            className="w-full mt-1"
                            placeholder="Last Name"
                            value={data.last_name ||''}
                            onChange={(e) => setData('last_name', e.target.value)}
                            />

                        <InputError message={errors.last_name} className="mt-2" />
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-5 mb-3 md:grid-cols-2 md:mb-5">
                    <div>
                        <InputLabel className="after:content-['*'] after:ml-0.5 after:text-primary" htmlFor="email" value="Email" />
                        <TextInput
                            className="w-full mt-1"
                            placeholder="Email"
                            value={data.email ||''}
                            onChange={(e) => setData('email', e.target.value)}
                            />

                        <InputError message={errors.email} className="mt-2" />
                    </div>
                    <div>
                        <InputLabel htmlFor="phone" value="Phone Number" />
                        <TextInput
                            className="w-full mt-1"
                            placeholder="Phone Number"
                            value={data.phone ||''}
                            onChange={(e) => setData('phone', e.target.value)}
                            />

                        <InputError message={errors.phone} className="mt-2" />
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-5 mb-3 md:grid-cols-2 md:mb-5">
                    <div className="">
                    <InputLabel className="after:content-['*'] after:ml-0.5 after:text-primary" htmlFor="country" value="Country" />
                    <Select
                        options={countryOptions}
                        isClearable={true}
                        value={countryOptions.find(option => option.value === data.country) || ''}
                        onChange={selectedOption => setData('country', selectedOption ? selectedOption.value : '')}
                        placeholder="Select Country"
                        className='mt-1 text-sm'
                    />
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
                </div>

                <PrimaryButton className="items-center block w-full py-3 md:mt-[30px] md:mb-[8px]" disabled={processing}>
                    Send Message
                </PrimaryButton>
            </form>
        </>
    )
}