import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import { PHONE_COUNTRY_CODE } from '@/Libs/Constant';
import Select from 'react-select';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        first_name: '',
        last_name: '',
        email: '',
        phone_code: '',
        phone: '',
        password: '',
        password_confirmation: '',
    });

    const phoneCodeOptions = PHONE_COUNTRY_CODE.map((item) => ({
        value: item.code,
        label: `${item.name} (${item.code})`
    }));

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <div className="flex items-center justify-center w-full px-3 py-10 md:px-0">
                <div className="w-full border border-t-8 rounded-md md:w-1/3 border-t-primary">
                    <div className="w-full px-5 py-3 bg-gray-100 border-b md:px-8">
                        <h1 className='uppercase text-primary'>Register</h1>
                    </div>
                    <form onSubmit={submit} className='p-5 md:p-8'>
                        <div className="grid grid-cols-1 gap-4 mb-3 md:grid-cols-2 md:gap-6 md:mb-5">
                            <div>
                                <InputLabel htmlFor="first_name" value="First Name" className="after:content-['*'] after:ml-0.5 after:text-primary"/>

                                <TextInput
                                    id="first_name"
                                    name="first_name"
                                    value={data.first_name}
                                    className="block w-full mt-1"
                                    autoComplete="first_name"
                                    placeholder="First Name"
                                    isFocused={true}
                                    onChange={(e) => setData('first_name', e.target.value)}
                                    required
                                />

                                <InputError message={errors.first_name} className="mt-2" />
                            </div>
                            <div>
                                <InputLabel htmlFor="last_name" value="Last Name" className="after:content-['*'] after:ml-0.5 after:text-primary"/>

                                <TextInput
                                    id="last_name"
                                    name="last_name"
                                    value={data.last_name}
                                    className="block w-full mt-1"
                                    autoComplete="last_name"
                                    placeholder="Last Name"
                                    onChange={(e) => setData('last_name', e.target.value)}
                                    required
                                />

                                <InputError message={errors.last_name} className="mt-2" />
                            </div>
                        </div>

                        <div className="mb-3 md:mb-5">
                            <InputLabel htmlFor="email" value="Email Address" className="after:content-['*'] after:ml-0.5 after:text-primary"/>

                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="block w-full mt-1"
                                autoComplete="email"
                                placeholder="Email Address"
                                onChange={(e) => setData('email', e.target.value)}
                                required
                            />

                            <InputError message={errors.email} className="mt-2" />
                        </div>

                        <div className="">
                            <InputLabel htmlFor="phone" value="Phone Number" className="after:content-['*'] after:ml-0.5 after:text-primary"/>

                            <Select
                                options={phoneCodeOptions}
                                isClearable={true}
                                value={phoneCodeOptions.find(option => option.value === data.phone_code) || ''}
                                onChange={selectedOption => setData('phone_code', selectedOption ? selectedOption.value : '')}
                                placeholder="Country Code"
                                className='mt-1 text-sm'
                            />
                            <small className="text-sm font-light text-gray-500">Your phone number must be entered correctly to confirm by an SMS code sent to your phone</small>

                            <InputError message={errors.phone_code} className="mt-2" />
                        </div>
                        <div className="mb-3 md:mb-5">
                            <div className="relative">
                                <TextInput
                                    id="phone"
                                    name="phone"
                                    value={data.phone}
                                    className="block w-full pl-[70px] mt-1"
                                    autoComplete="phone"
                                    placeholder="Phone Number"
                                    onChange={(e) => setData('phone', e.target.value)}
                                    required
                                />
                                <div className="absolute top-0 left-0 rounded-l flex items-center pl-3 w-16 pr-1 text-sm font-light text-gray-400 bg-gray-50 border border-r border-gray-300 h-[38px]">
                                    <div className="">({data.phone_code || '+000'})</div>
                                </div>
                            </div>

                            <InputError message={errors.phone} className="mt-2" />
                        </div>

                        <div className="mb-3 md:mb-5">
                            <InputLabel htmlFor="password" value="Password" className="after:content-['*'] after:ml-0.5 after:text-primary"/>

                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="block w-full mt-1"
                                autoComplete="new-password"
                                placeholder="Password"
                                onChange={(e) => setData('password', e.target.value)}
                                required
                            />

                            <InputError message={errors.password} className="mt-2" />
                        </div>

                        <div className="mb-3 md:mb-5">
                            <InputLabel htmlFor="password_confirmation" value="Confirm Password" className="after:content-['*'] after:ml-0.5 after:text-primary"/>

                            <TextInput
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                className="block w-full mt-1"
                                autoComplete="new-password"
                                placeholder="Password Confirmation"
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                                required
                            />

                            <InputError message={errors.password_confirmation} className="mt-2" />
                        </div>

                        <div className="flex items-center justify-end mt-4">
                            <Link
                                href={route('login')}
                                className="text-sm text-gray-600 underline rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Already registered?
                            </Link>

                            <PrimaryButton className="ms-4" disabled={processing}>
                                Register
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </GuestLayout>
    );
}
