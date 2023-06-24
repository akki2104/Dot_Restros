import React from "react";
import Header from "./Header"
import Footer from "./Footer";

function Terms() {
    return (
        <>
            <style>
                {`
                .maindiv{
                    margin:6rem 8rem;
                    font-size:20px;
                    text-align:justify;
                }
                .tcheading{
                    margin-bottom:1rem;
                }
                .tclist{
                    margin-top:1rem;
                }
                .tc{
                    margin-bottom:2rem;
                }
                .innertcitem{
                    margin-top:1rem;
                }
            `}
            </style>
            <Header />
            <div className="maindiv">
                <h3 className="tcheading">Terms and Conditions:</h3>

                <p className="tctxt">
                    Please read these terms and conditions carefully before using the DoT Restrso website ( www.dotrestros.com ). These terms and conditions govern your use of the Website and any products or services provided by DoT Restros. <br />
                    <ol className="tclist">
                        <li className="tc">
                            <h5 className="tcitem">Acceptance of Terms: </h5>
                            By accessing or using the Website, you agree to be bound by these terms and conditions, as well as any additional terms and conditions and policies referenced herein. If you do not agree to these terms, please refrain from using the Website.
                        </li>

                        <li className="tc">
                            <h5 className="tcitem">Use of the Website: </h5>
                            <h5 className="innertcitem">2.1 Eligibility: </h5>You must be of legal age and have the legal capacity to enter into these terms and conditions and use the Website in accordance with all applicable laws and regulations.
                            <br /><h5 className="innertcitem">2.2 License:  </h5>Subject to these terms and conditions, DoT Restros grants you a limited, non-exclusive, non-transferable, revocable license to access and use the Website for personal, non-commercial purposes. You agree not to reproduce, modify, distribute, sell, or exploit any portion of the Website without prior written consent from DoT Restros.
                            <br /><h5 className="innertcitem">2.3 User Account: </h5>In order to access certain features or services on the Website, you may need to create a user account. You are responsible for maintaining the confidentiality of your account credentials and for any activities that occur under your account. You agree to provide accurate and current information during the registration process and to promptly update any changes to your account information.
                            <br /><h5 className="innertcitem">2.4 Prohibited Conduct: </h5>When using the Website, you agree to:
                            <br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; a. Comply with all applicable laws, regulations, and policies.
                            <br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; b. Refrain from engaging in any activity that may interfere with or disrupt the functionality of the Website.
                            <br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; c. Not use the Website for any unlawful or unauthorised purposes.
                            <br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; d. Respect the intellectual property rights of DoT Restros and third parties.
                        </li>
                        <li className="tc">
                            <h5 className="tcitem">Intellectual Property: </h5>
                            All content, trademarks, logos, and intellectual property rights associated with the Website are the property of DoT Restros or its licensors. You acknowledge and agree that the Website and its contents are protected by copyright, trademark, and other laws. You are prohibited from using, reproducing, distributing, or modifying any part of the Website without the prior written consent of DoT Restros or the respective rights holder.
                        </li>
                        <li className="tc">
                            <h5 className="tcitem">
                                Third-Party Links and Content:
                            </h5>
                            The Website may contain links to third-party websites, advertisements, or content that are not owned or controlled by DoT Restros. We do not endorse or assume any responsibility for the content, privacy policies, or practices of these third-party websites or services. Your interactions with any third-party website or service are solely between you and the third party, and you should review their terms and policies before engaging in any transactions or activities.
                        </li>
                        <li className="tc">
                            <h5 className="tcitem">
                                Limitation of Liability:
                            </h5>
                            To the maximum extent permitted by law, DoT Restros shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of or related to your use or inability to use the Website, even if DoT Restros has been advised of the possibility of such damages. This includes damages for loss of profits, data, or other intangible losses.
                        </li>
                        <li className="tc">
                            <h5 className="tcitem">
                                Indemnification:
                            </h5>
                            You agree to indemnify and hold harmless DoT Restros and its affiliates, officers, directors, employees, and agents from any claims, actions, damages, liabilities, and expenses (including reasonable attorneys' fees) arising out of or related to your use of the Website, violation of these terms and conditions, or infringement of any intellectual property or other rights of any person or entity.
                        </li>
                        <li className="tc">
                            <h5 className="tcitem">
                                Modification and Termination:
                            </h5>
                            DoT Restros reserves the right to modify or discontinue the Website, or any portion thereof, at any time without prior notice. We may also modify these terms and conditions from time to time, and the updated version will be effective upon posting on the Website. Your continued use of the Website after any modifications indicates your acceptance of the modified terms.
                        </li>
                        <li className="tc">
                            <h5 className="tcitem">
                                Governing Law and Jurisdiction:
                            </h5>
                            These terms and conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or related to these terms and conditions or your use of the Website shall be subject to the exclusive jurisdiction of the courts located in New Delhi.
                        </li>
                        <li className="tc">
                            <h5 className="tcitem">
                                Severability:
                            </h5>
                            If any provision of these terms and conditions is found to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect.
                        </li>
                        <li className="tc">
                            <h5 className="tcitem">
                                Entire Agreement:
                            </h5>
                            These terms and conditions constitute the entire agreement between you and DoT Restros regarding the use of the Website, superseding any prior agreements or understandings.
                        </li>
                    </ol>



                    If you have any questions or concerns regarding these terms and conditions, please contact us using the provided contact information.
                </p>


            </div>
            <Footer />
        </>
    )
}

export default Terms