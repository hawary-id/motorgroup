import AuctionSchedule from '@/Components/AuctionSchedule';
import Banner from '@/Components/Banner';
import BreadCrumb from '@/Components/Breadcrumb';
import Title from '@/Components/Title';
import Guest from '@/Layouts/GuestLayout';
import { AUCTIONS_SCHEDULE, BANNER_DATA } from '@/Libs/Constant';
import { Head } from '@inertiajs/react';

export default function JapanAuction({}) {  
    const breadCrumbs = [
        {
            label: 'Home',
            url:'home',
            active:false
        },
        {
            label: 'Japan Vehicle Auctions',
            url:'',
            active:true
        }
    ]  
    return (
       <Guest>
        <Head title="Japan Vehicle Auctions" />
            <div className="w-full">
                <div className="w-full h-44 md:h-96 bg-[url('/illustration/about-us.jpg')] bg-cover bg-center brightness-75"></div>
                <BreadCrumb
                    data={breadCrumbs}
                />
                <div className="container px-3 py-5 mx-auto md:px-0 md:py-10">
                    <Title>Japan Vehicle Auctions</Title>
                    <p className="mb-2 text-gray-700">Global Auto Supply has buyers at vehicle auctions in both Japan and Thailand, where you can bid on vehicles coming up for auction, with over 150,000 vehicles per week there is plenty to choose from.</p>
                    <p className="mb-2 text-gray-700">For further information on purchasing vehicles directly from auction please contact us.</p>
                    <p className="mb-2 text-gray-700">How auctions operate in Japan:</p>
                    <p className="mb-2 text-gray-700">Vehicles to be auctioned are transported to auction sites by the morning of the day before the auction, vehicles are usually delivered around the clock, at the largest Auction there can be up to 20,000 vehicles auctioned in one day.</p>
                    <p className="mb-2 text-gray-700">Auction vehicle inspectors impartially grade vehicles in line with auction grade evaluation standards.</p>
                    <p className="mb-2 text-gray-700">Vehicles are photographed and uploaded to the database along with the results of the inspection, which is generally refered to as the “Auction Sheet”.</p>
                    <p className="mb-2 text-gray-700">Vehicles are then parked in the auction yard or parking buildings which are numbered (most of the time) in numerical order, these vehicles are open to inspection by auction members. You as the customer can also preview the vehicles using our auction website on the Internet from any where in the world as long as you have an internet connection.</p>
                    <p className="mb-2 text-gray-700">Members must display their ID cards when they enter or leave auction sites, if a customer would like to come to an auction we can arrange a visitor pass for the day.</p>
                    <p className="mb-2 text-gray-700">While at the auction you can search for the vehicles you have in mind on our online auction website or you can search the information on the terminals installed in the auction sites.</p>
                    <p className="mb-2 text-gray-700">SAL avoids potential problems that might occur after successfully bidding for a vehicle, by physically inspecting the vehicles at auction.</p>
                    <p className="mb-2 text-gray-700">Cars are arranged in different corners (sections) of auction sites, auctions are simultaneously held for between two and twelve vehicles. It takes about 20 seconds to complete a contract for one vehicle.</p>
                    <p className="mb-5 text-gray-700">This is the weekly Auction Schedule that we attend auctions in Japan.</p>
                    <div className="grid grid-cols-2 gap-3 mb-5 md:grid-cols-7">
                        {AUCTIONS_SCHEDULE.map((item,i) => (
                            <AuctionSchedule day={item.day} auctions={item.auctions} key={i+1}/>
                        ))}
                    </div>
                    <p className="mb-2 text-gray-700">Register as a member for free access to Japan Car Auctions. Up to 150,000 vehicles are auctioned in Japan every week with over 1.5 Million vehicles in the Sold Statistics to search through.</p>
                    <p className="mb-2 text-gray-700">Japanese Car Auctions have something for everyone!</p>
                    <p className="mb-2 text-gray-700">Pay Pal or Telegraphic Transfer your deposit for bidding and you are ready to bid on vehicles through Global Auto Supply buyers at the auction houses. The bidding deposit is deducted from the final invoice once a successful bid has been won.</p>
                    <p className="mb-2 text-gray-700">This deposit is refundable for any reason prior to purchasing from the Japanese car auctions. (please refer to our Terms and Conditions).</p>
                    <p className="mb-2 text-gray-700">Every vehicle going through the Japanese car auctions has a detailed report prepared by the professional vehicle inspectors from the auction.Global Auto Supply Buyers can translate the auction sheet for you so you know all aspects good and bad about the vehicle.</p>
                    <p className="mb-2 text-gray-700">Once we purchase the vehicle from auction, your final payment via T.T. (Telegraphic Transfer, Bank Transfer) is requiredwithin 7 days, then once payment is received the car is processed for shipping and shipped on the next available ship!</p>
                    <p className="mb-2 text-gray-700">We do not charge a per bid fee, so you can bid on as many vehicles as needed to secure the vehicle you are wanting.</p>
                </div>
                
                <Banner data={BANNER_DATA[1]}/>
            </div>
       </Guest>
    );
}
