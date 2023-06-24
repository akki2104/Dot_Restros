import React from "react";
import Header from "./Header"
import Footer from "./Footer";

function Guest(){
    return(
        <>
        <style>
            {`
                .maindiv{
                    margin:6rem 8rem;
                    font-size:20px;
                    text-align:justify;
                }
                .headings,.coctxt,.sdatxt{
                    margin-bottom:1rem;
                }
                .gbptxt,.pctxt,.coc,.stptxt,.bof{
                    margin-top:1rem;
                }
                .gpinnertxt{
                    display:inline-block;
                    margin-top:2rem;
                }
            `}
        </style>
        <Header />
        <div className="maindiv">
                <h3 className="headings">General Booking Policy:</h3>
                <ol className="gbp">
                    <li className="gbptxt">Certain Restaurants may have different guidelines for their customers. Please abide by all laws and guidelines as applicable.</li>
                    <li className="gbptxt">Reference to DoT Restros includes its affiliates, employees and officers. “Restaurant” refers to the Restaurant or premises in which you have made a valid booking through DoT Restros.</li>
                </ol>
                <h3 className="headings">Guest Policy:</h3>
                At DoT Restros, we strive to provide a pleasant and enjoyable experience for all our guests. To ensure the comfort and safety of everyone, we have established the following guest policy for our Website (www.dotrestros.com):
                <ol className="gp">
                    <li className="gptxt">
                        <h5 className="gpinnertxt">
                        Registration and Account Creation: &nbsp;
                        </h5>
                        To access certain features and services on our Website, guests may be required to register and create an account. When creating an account, guests must provide accurate and current information. It is the responsibility of guests to maintain the confidentiality of their account credentials and to promptly notify us of any unauthorised use or security breaches.
                        </li>
                    <li className="gptxt">
                        <h5 className="gpinnertxt">
                        Age Restrictions: &nbsp;
                        </h5>
                        Our services are intended for individuals who are 18. Guests must meet the minimum age requirement to use our Website and make reservations or pre-order food. If you are under the specified age, you must obtain the consent of a parent or legal guardian before using our services.
                        </li>
                    <li className="gptxt">
                        <h5 className="gpinnertxt">
                        Compliance with Laws and Regulations: &nbsp;
                        </h5>
                        Guests must comply with all applicable laws, regulations, and policies while using our Website. This includes, but is not limited to, respecting intellectual property rights, refraining from engaging in fraudulent activities, and adhering to any restrictions or guidelines imposed by partner Restaurants.
                        </li>
                    <li className="gptxt">
                        <h5 className="gpinnertxt">
                        Prohibited Conduct: &nbsp;
                        </h5>
                        Guests are expected to behave in a respectful and courteous manner when using our services. The following conduct is strictly prohibited:
                        <ul className="pc">
                            <li className="pctxt">Engaging in any form of harassment, discrimination, or offensive behaviour towards other users or our staff.</li>
                            <li className="pctxt">Misusing or attempting to misuse our Website, including any attempts to gain unauthorised access, interfere with the system's functionality, or transmit malicious software or content.</li>
                            <li className="pctxt">Engaging in any activity that may compromise the security, integrity, or availability of our Website or the data stored within.</li>
                            <li className="pctxt">Using our services for any unlawful purposes or engaging in any activity that violates the rights of others.</li>
                        </ul>
                        </li>
                    <li className="gptxt">
                        <h5 className="gpinnertxt">
                        Reservation and Food Pre-Ordering Policies: &nbsp;
                        </h5>
                        When making reservations or pre-ordering food through our Website, guests are required to provide accurate and up-to-date information. Guests are responsible for ensuring the accuracy of the reservation details, including the date, time, and party size. In case of late arrival of the customer the food quality may not be appropriate. Any modifications or cancellations should be made in accordance with the policies of the respective partner Restaurants.
                        </li>
                    <li className="gptxt">
                        <h5 className="gpinnertxt">
                        Intellectual Property: &nbsp;
                        </h5>
                        All intellectual property rights associated with our Website, including trademarks, logos, and content, are the property of DoT Restros or its licensors. Guests must not use, reproduce, distribute, or modify any of these intellectual property assets without obtaining prior written consent.
                        </li>
                    <li className="gptxt">
                        <h5 className="gpinnertxt">
                        Third-Party Services and Links: &nbsp;
                        </h5>
                        Our Website may contain links to third-party websites or services. While we strive to partner with reputable businesses, we are not responsible for the content, privacy practices, or services provided by these third parties. Guests are encouraged to review the terms and privacy policies of any external websites they visit through our Website.
                        </li>
                </ol>
                By using our Website, guests acknowledge and agree to comply with this guest policy. Failure to adhere to the policy may result in the suspension or termination of access to our services. If you have any questions or concerns about our guest policy, please contact us using the provided contact information.
                <h3 className="headings coc">Code of Conduct:</h3>
                <ol className="coc">
                    <li className="coctxt">Illegal activities are not permitted in any partner Restaurant or premises.</li>
                    <li className="coctxt">You should be aware that the Restaurant may refuse service or evict you
                    <br />a. For refusal or failure to pay for services availed,
                    <br />b. If you act in a disorderly fashion as to disturb the peace of other guests,
                    <br />c. If you destroy, damage, deface or threaten harm to Restaurant’s property or guests,
                    <br />d. Any of your actions are deemed inappropriate by the Restaurant.</li>
                    <li className="coctxt">Please keep the Restaurant space in a good condition and maintain hygiene and cleanliness. You may be held liable for any damage to assets (except normal wear and tear).</li>
                </ol>
                <h3 className="headings sda">Smoking, Drugs and Alcohol:</h3>
                <ol className="sda">
                    <li className="sdatxt">Smoking is prohibited in partner Restaurants. Some Restaurants may prohibit smoking in their guest rooms so it is prudent to check with the Restaurant Front Desk.</li>
                    <li className="sdatxt">Anyone found using or under the influence of illegal drugs or substances classified under the <strong><u>Narcotic Drugs and Psychotropic Substances Act, 1985</u></strong> will be reported to the police and asked to leave the Restaurant. Any evidence or suspicion of drug use at the Restaurant will also be reported immediately to the police.</li>
                    <li className="sdatxt">Drinking alcohol is prohibited in all public areas including; in the Restaurant’s lobby, hallways, and parking areas of partner Restaurant. Please contact the Restaurant Front Desk regarding consumption of alcoholic beverages at your table, without disturbing the discipline of the Restaurant or other guests.</li>
                </ol>
                <h3 className="headings">Contact Policy:</h3>
                <ol className="cp">
                    <li className="cptxt">You may be contacted any time by DoT Restros or partner Restaurant before your arrival to confirm your arrival status/arrival time through calls or messages. If DoT Restros or partner Restaurant does not receive a response from you after multiple attempts, your booking may be put on hold or cancelled. We will reinstate your booking when you contact us back or make a payment through our secure payment options, subject to availability.</li>
                    <li className="cptxt">Customers are supposed to call the partner Restaurant they have made a booking with around 10 minutes before their arrival. This is done to confirm your order and tell the Restaurant your exact arrival time. If not done then the partner Restaurant has all the rights to delay your booking.</li>
                </ol>
                <h3 className="headings">Service Time Policy:</h3>
                We are committed to provide best services to our customers without any delay but the booking time can be delayed by partner Restaurant accordingly under certain circumstances:
                <ol className="stp">
                    <li className="stptxt">If the customer’s actual arrival time is not the same as provided while placing the order then the partner Restaurant can take time to arrange services depending on the availability of service.</li>
                    <li className="stptxt">If the table for the booking made is not available at the time of arrival of customer(due to unavailability of table or any other thing) then partner Restaurant can take 15 minutes buffer time to prepare for the service.</li>
                </ol>
                We always work to provide the best services to our customers in every condition. DoT Restros is not responsible for the delay or cancellation of any order due to natural calamity or traffic jams.
                <h3 className="headings bof">Beware of Fraud:</h3>
                <ol className="bof">
                    <li className="boftxt">DoT Restros does not authorise any of its employees, consultants, third-party vendors, associates to collect payment in any other form other than payments from secure gateway on our website ( www.dotrestros.com ) and its affiliated OTA payment gateway links.</li>
                    <li className="boftxt">Any instances where collection of payment is attempted from any unauthorised payment gateways other than the ones mentioned above are acts of fraud. Encountering and acting on the same is solely on your own accord and discretion. DoT Restros will not be responsible for any loss/liability arising out of such an event.</li>
                </ol>
                <h3 className="headings bof">Changes to the Guest Policy:</h3>
                We reserve the right to update or modify our guest policy at any time. Any changes will be effective upon posting the revised policy on our Website. It is the responsibility of guests to review the guest policy periodically to stay informed about any updates.
        </div>
        <Footer />
        </>
    )
}

export default Guest