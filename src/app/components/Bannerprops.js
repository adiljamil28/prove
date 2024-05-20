import Image from "next/image";
import Link from "next/link";
import React from 'react'

export const Bannerprops = (props) => {
    return (
        <div>
            <div className="main-banner container mx-auto lg:h-[100vh] h-[85vh] flex lg:py-48  lg:flex-row flex-col-reverse">

                <div className="flex-wrap lg:w-7/12 sm:w-1/2">
                    <h1 className="text-white font-bold lg:text-7xl leading-normal">{props.Banh1}</h1>
                    <h2 className="or-color font-bold lg:text-4xl leading-normal stroke">{props.Banh2}
                        <span className="text-white font-bold lg:text-4xl leading-normal"> {props.Banh3} </span></h2>
                    <p className="text-white font-semibold text-xl leading-normal pb-7 my-2 lg:w-[80%]">{props.BanP}</p>
                
                    <Link href={"/"} className="text-center text-white inline-block lg:w-2/4 p-5 my-2 font-medium rounded-lg or-bg hover:bg-black hover:text-white">
                        Lets Get Started
                    </Link>

                    <div className="flex lg:w-2/4 lg:justify-between py-5">
                        <Image src={props.pic1} alt="" width={"90"} height={"90"} />
                        <Image src={props.pic2} alt="" width={"90"} height={"90"} />
                        <Image src={props.pic3} alt="" width={"90"} height={"90"} />
                        <Image src={props.pic4} alt="" width={"90"} height={"90"} />
                    </div>

                </div>

                <div className="main-banner-image lg:w-5/12 sm:w-1/2">
                    <Image src={props.banMainPic} alt="" width={"500"} height={"500"} />
                </div>

            </div>

            {/* <div>
            <section className='footer-form md:py-20'>
                <div className='container mx-auto'>
                    <div className='flex '>
                    
                    <div className="str-1 lg:w-1/2 md:w-1/2" >
                        <h2 className="text-4xl md:text-6xl lg:text-6xl font-black py-4 text-white">
                            Let’s have a cup of coffee together.
                        </h2>

                        <h3 className="text-4xl md:text-4xl lg:text-4xl font-black font-white py-4 or-color">
                            Fill in your details to get in touch with us!
                        </h3>

                        <Image src={"/img1.png"} width={500} height={300}/>
                    </div>


                    <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                    <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
                    <p className="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
                    <div className="relative mb-4">
                        <label for="Name" className="leading-7 text-sm text-gray-600">Name</label>
                        <input type="Name" id="Name" name="Name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>

                    <div className="relative mb-4">
                        <label for="Phone" className="leading-7 text-sm text-gray-600">Phone</label>
                        <input type="Phone" id="Phone" name="Phone" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>

                    <div className="relative mb-4">
                        <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>

                    <div className="relative mb-4">
                        <label for="message" className="leading-7 text-sm text-gray-600">Message</label>
                        <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"/>
                    </div>
                    <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">submit </button>
                    <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
                    </div>


                    
                    </div>
                </div>
            </section>
            <div className='bottom-bar p-3 bg-[#f4f0ea]'>
                <p className='text-black text-center text-xl'>© 2023 Pine Digital Hub | All Rights reserved.</p>
            </div>
        </div> */}
        </div>




    )
}
