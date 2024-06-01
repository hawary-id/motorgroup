import Banner from '@/Components/Banner';
import BreadCrumb from '@/Components/Breadcrumb';
import Title from '@/Components/Title';
import Guest from '@/Layouts/GuestLayout';
import { BANNER_DATA } from '@/Libs/Constant';
import { Head } from '@inertiajs/react';

export default function TermOfTrade({}) {  
    const breadCrumbs = [
        {
            label: 'Home',
            url:'home',
            active:false
        },
        {
            label: 'Terms of Trade',
            url:'',
            active:true
        }
    ]  
    return (
       <Guest>
        <Head title="Terms of Trade" />
            <div className="w-full">
                <div className="w-full h-44 md:h-96 bg-[url('/illustration/about-us.jpg')] bg-cover bg-center brightness-75"></div>
                <BreadCrumb
                    data={breadCrumbs}
                />
                <div className="container px-3 py-5 mx-auto md:px-0 md:py-10">
                    <Title>Terms of Trade</Title>
                    <Title>Terms and Conditions</Title>
                    <ul className='list-disc list-outside'>
                        <p className="mb-2 text-gray-700">For all intents and purposes of the following terms of trade;</p>
                        <li className="mb-2 ml-8 text-gray-700">Motor Grupo Co., Ltd and or Eastern Auto Services Co., Ltd are hereinafter referred to as the “Seller”</li>
                        <li className="mb-2 ml-8 text-gray-700">The Purchaser and or Consignee is hereinafter referred to as the “User”</li>
                        <li className="mb-2 ml-8 text-gray-700">The “Service” hereinafter refers to the sales and supply of new and used motor vehicles and other items hereinafter referred to as “goods” between the Seller and the User.</li>

                        <ul className="mt-5 list-decimal">
                            <li className="mt-6 mb-2 ml-8 font-semibold text-primary">Scope of and Changes to the Terms of trade</li>
                            <p className="mb-2 text-gray-700">The Terms of Trade applies to all transactions between the Seller and the User relating to the service.</p>
                            <p className="mb-2 text-gray-700">The Seller reserves the right to modify the Terms of Trade from time to time.</p>
                            
                            <li className="mt-6 mb-2 ml-8 font-semibold text-primary">User Notification</li>
                            <p className="mb-2 text-gray-700">Except as otherwise stipulated in the Terms of Trade, the User shall receive notifications from the seller via email, via general postings on the service website, or by other means deemed appropriate by the Seller.</p>
                            <p className="mb-2 text-gray-700">Where a notification is given by email, said notification is deemed complete when the email is sent to the User at the last known email address as provided to the seller at the time of application or subsequently.</p>
                            <p className="mb-2 text-gray-700">Where the notification is carried out via general postings to the service website, notification is deemed complete once it has been posted to the website for general access by the User.</p>
                            <p className="mb-2 text-gray-700">The User is responsible for perusing notifications from the Seller made be email or via website posting without delay. The Seller will not be liable for the User failure to do so.</p>

                            <li className="mt-6 mb-2 ml-8 font-semibold text-primary">Applicable Laws</li>
                            <p className="mb-2 text-gray-700">The Terms of Trade are governed by the laws of the Kingdom of Thailand.</p>
                            <p className="mb-2 text-gray-700">Only the English version of the Terms of Trade shall have legal effect.</p>

                            <li className="mt-6 mb-2 ml-8 font-semibold text-primary">Court Holding Jurisdiction</li>
                            <p className="mb-2 text-gray-700">Should any dispute between the User and the Seller occur with regard to the Service and/or any contracts concluded through the service, the parties agree to attempt to settle any such dispute in a sincere manner through discussion.</p>
                            <p className="mb-2 text-gray-700">If the dispute cannot be resolved through discussion between the parties, either the Bangkok District Court or the Bangkok Summary Court shall have original, non-exclusive jurisdiction over the dispute.</p>

                            <li className="mt-6 mb-2 ml-8 font-semibold text-primary">Prerequisites for Utilizing the Service</li>
                            <p className="mb-2 text-gray-700">The User is solely responsible for obtaining and operating the equipment necessary to utilize the service.</p>

                            <li className="mt-6 mb-2 ml-8 font-semibold text-primary">Making Changes to Registration Information</li>
                            <p className="mb-2 text-gray-700">Should the User be registered on the Sellers Website application changes that occur in the User information such as name, address, telephone number, and other information provided to the Seller, the User must report any such changes to the Seller immediately and update the User profile associated with the User.</p>
                            <p className="mb-2 text-gray-700">The Seller shall not be liable to the User or any third party by reason of the failure to inform the Seller of changes in User information.</p>

                            <li className="mt-6 mb-2 ml-8 font-semibold text-primary">Restrictions</li>
                            <p className="mb-2 text-gray-700">The Service is available to the User or prospective User acting in good faith for the purpose of legitimate business transactions. Any actions of the User which do not meet such requirement shall entitle the Seller in its sole discretion to withdraw the Service to that User and to recover damages for any wrongful act of the User.</p>

                            <li className="mt-6 mb-2 ml-8 font-semibold text-primary">Proprietary Information</li>
                            <p className="mb-2 text-gray-700">The User may not utilize any information or records available via the service by any means whatsoever without the permission of the Seller for any purpose other than business transactions with the Seller.</p>
                            <p className="mb-2 text-gray-700">The User who wishes to obtain an estimate for Goods sold through the service can request the estimate via the service according to the procedure specified by the Seller on the Website.</p>

                            <li className="mt-6 mb-2 ml-8 font-semibold text-primary">Conclusion of Contract and Costs</li>
                            <p className="mb-2 text-gray-700">The User wishing to purchase goods from the Seller through the service should remit the amount indicated on the invoice by the due date specified on the invoice by electronic wire transfer to the specified account indicated on the invoice or by other means of settlement as stipulated by the Seller in the currency specified by the Seller. The User is responsible for all local, international and receiving bank fees incurred in the remittance of funds.</p>
                            <p className="mb-2 text-gray-700">The contract is concluded when payment in full is credited to the Seller’s specified account or where payment is made by some other method specified by the Seller with said payment has been confirmed being paid in full.</p>
                            <p className="mb-2 text-gray-700">Once full payment has been made by the User and confirmed by the Seller the User will be notified by email, or other means deemed appropriate by the Seller, that the contract has been concluded.</p>
                            <p className="mb-2 text-gray-700">Once full payment has been received the Seller will make the arrangements for the goods to be exported and shipped to the users destination port.</p>
                            <p className="mb-2 text-gray-700">It is the sole responsibility of the User to comply with all and any import regulations in their own country, and for the payment of all duties and taxes assessed in their own country.</p>
                            <p className="mb-2 text-gray-700">All amendments to shipping instructions, Bill of lading, Sea Waybill or Airway Bill will incur a cost of 4,500 THB per amendment instruction.</p>
                            <p className="mb-2 text-gray-700">Any Late payments for sea freight will incur a late fee on the due date and every 7 days over the due date of 7500 THB until the sea freight is settled.</p>
                            <p className="mb-2 text-gray-700">Failure to make payment of any outstanding accounts for any outstanding amount will result in the vehicle/s being returned to the point of Origin at the users expense, the User will then be required to pay all outstanding costs including the return freight, the User will then be required to pay the further charges for export and freight of the vehicle to the User’s destination.</p>

                            <li className="mt-6 mb-2 ml-8 font-semibold text-primary">Termination of Contract</li>
                            <p className="mb-2 text-gray-700">Even after the contract has been concluded as described in the “Conclusion of Contract” section above, the Seller reserves the right to terminate the contract if the goods cannot be delivered for reasons related to import restrictions, guidance or instructions, etc, from the relevant authorities, where the User has made false statements or has engaged in any unlawful activity, where it is recognized that the contract is rendered impossible to execute due to actions of the User or for any other cause beyond the control of the Seller.</p>

                            <li className="mt-6 mb-2 ml-8 font-semibold text-primary">Deposit for Goods order</li>
                            <p className="mb-2 text-gray-700">Deposits for goods are non refundable and will be forfeited if payment for the vehicles specified on the invoice issued from the Seller to the User is not paid in full by the due date specified on the invoice, no exceptions.</p>
                            <p className="mb-2 text-gray-700">If goods are not paid for by the due date the invoice the sale will be considered in default, if the time exceeds the due date of payment the sale is void, deposits are non refundable, no exceptions</p>
                            <p className="mb-2 text-gray-700">Where a deposit is made by the User to the Seller for goods that need to be ordered from the manufacturer or its distributors the deposit is non refundable, no exceptions.</p>
                            <p className="mb-2 text-gray-700">All orders are final, where goods ordered by the User to the Seller with a deposit given for the order, the order can not be canceled by the User.</p>
                            <p className="mb-2 text-gray-700">Order time exceeding expectations, when the expected time frame for delivery from the Seller to the User is exceeded, the Seller will at the best of its ability inform the User that the delivery time frame will exceed the expected delivery time frame, under no circumstances is the exceeded time of delivery cause for the User to cancel the order  the order can not canceled.</p>
                            <p className="mb-2 text-gray-700"> The Seller will endeavor to deliver the ordered goods in the least amount of time, the Seller at its discretion is able to cancel an order if it considers there is no possibility of delivery the goods, how ever there is no time limit to deliver the goods to the user.</p>
                            <p className="mb-2 text-gray-700">At the discretion of the Seller If for any reason a refund is granted from the Seller to the User any funds remitted or payments made to the Seller will be returned to the User without interest, less any bank charges or other costs incurred by the Seller and will be considered full and final.</p>
                            <p className="mb-2 text-gray-700">Where a sales contract by way of acceptance of an invoice without payment made, the Seller will hold the goods for a period of no more than 3 days.</p>

                            <li className="mt-6 mb-2 ml-8 font-semibold text-primary">Forwarding and Shipping</li>
                            <p className="mb-2 text-gray-700">Once the contract has been concluded and the appropriate paperwork, Export, Customs, Administration, Shipping arrangements, etc will be completed, the User will be promptly notified of shipping details.</p>

                            <li className="mt-6 mb-2 ml-8 font-semibold text-primary">Transfer of Property Rights on Goods</li>
                            <p className="mb-2 text-gray-700">The transfer of property rights between the Seller and the User is governed by the International Commercial Terms  (InCoTerms) issued by the International Chamber of Commerce (ICC), as noted on the Quote or Invoice at the time the contract is concluded.</p>
                            <p className="mb-2 text-gray-700">Where the Seller and the User agree to conditions other than the above the agreement must be written and signed by both parties, their post contractual agreement takes precedence.</p>

                            <li className="mt-6 mb-2 ml-8 font-semibold text-primary">Transfer of Risk</li>
                            <p className="mb-2 text-gray-700">The ICC’s InCoTerms apply to the timing of transfer of risk on goods between the Seller and the User, as noted on the quote or Invoice at the time the contract is concluded.</p>

                            <li className="mt-6 mb-2 ml-8 font-semibold text-primary">User Notification</li>
                            <p className="mb-2 text-gray-700">Product sales are based on as-is condition at the time of sale. The Seller bears no liability whatsoever for problems, including failure and/or accidents, which arise from breakdown, defects etc. that are the responsibility of the manufacturer (hereinafter referred to as “the manufacturer”). </p>
                            <p className="mb-2 text-gray-700">Further, the Seller will have no liability for loss or damage incurred by the User or any third parties.</p>

                            <li className="mt-6 mb-2 ml-8 font-semibold text-primary">Defect Liability</li>
                            <p className="mb-2 text-gray-700">Once property rights have been transferred, the Seller is in no way liable for damages incurred by the User or any third party, including those arising from manufacturing defects.</p>
                            <p className="mb-2 text-gray-700">Where the Seller and the User agree to conditions other than the above the agreement must be written and signed by both parties, their post contractual agreement takes precedence</p>

                            <li className="mt-6 mb-2 ml-8 font-semibold text-primary">Returns</li>
                            <p className="mb-2 text-gray-700">Where a contract is concluded as stipulated above, the Seller will not allow for any returns once the property rights on such goods have been transferred.</p>

                            <li className="mt-6 mb-2 ml-8 font-semibold text-primary">Termination and Suspension of Service</li>
                            <p className="mb-2 text-gray-700">The Seller may terminate or suspend operation of the service under the following circumstances:</p>
                            <p className="mb-2 text-gray-700">For regular or emergency system maintenance or work on the service, or under unavoidable conditions such as a Seller website system failure.</p>
                            <p className="mb-2 text-gray-700">Where due to war, civil unrest, rioting, labor disputes, earthquake, volcanic eruption, floods, tsunami, fire, blackout, system failure due to hacking or a computer virus, or other emergency conditions, the Sellers service cannot be operated as usual.</p>
                            <p className="mb-2 text-gray-700">Where so restricted or ordered by a government agency, or where the services of other electronic communications companies have been terminated or suspended.</p>
                            <p className="mb-2 text-gray-700">Under any other circumstances where the Seller deems temporary suspension necessary to the operation of the service.</p>
                            <p className="mb-2 text-gray-700">The Seller will endeavor to inform the User in advance when operation of the service is to be terminated or suspended as per the above. This may not be possible in emergency situations.</p>
                            <p className="mb-2 text-gray-700">The Seller is in no way liable for damages incurred by the User or third parties resulting from termination or suspension of the service.</p>

                            <li className="mt-6 mb-2 ml-8 font-semibold text-primary">Exclusions</li>
                            <p className="mb-2 text-gray-700">Except where otherwise specified in the terms of trade, the Seller is in no way liable for damages incurred by the User or third parties through the provision of or delays/changes in, suspension, termination, discontinuance, or cancellation of the service, leakage or loss of information provided through registration with the service or other means, or damage otherwise incurred related to the service.</p>
                            <p className="mb-2 text-gray-700">The Seller makes no guarantees whatsoever in terms of the completeness, accuracy, usability, etc., of the description of the service, or of information obtained by the User through the service.</p>
                            <p className="mb-2 text-gray-700">The Seller is in no way liable for any disputes between the User and third parties that may arise through use of the service.</p>
                            <p className="mb-2 text-gray-700">In addition to the above, the User is liable for compensation of any damages incurred by the Seller as a result of User’s violation of the Terms of Trade, wilful default, or gross negligence</p>
                        </ul>
                    </ul>
                </div>
                
                <Banner data={BANNER_DATA[1]}/>
            </div>
       </Guest>
    );
}
