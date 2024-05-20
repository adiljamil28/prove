"use client"
import { FaMinus, FaPlus } from "react-icons/fa";
import React, { useState } from 'react';
export const Faqs = () => {
    const [isToggled, setIsToggled] = useState("");

    const toggleFAQ = (index) => {
        if (isToggled === index) {
            setIsToggled(null); 
        } else {
            setIsToggled(index); 
        }
      };

    // const handleChange = () => { setIsToggled(!isToggled); };
    return (
        <div className='main'>




            <section className='faqs-section py-20'>
                <div className='container mx-auto'>
                    <h2 class="text-4xl md:text-8xl lg:text-8xl font-black py-4 text-white text-center">Frequently
                        <span class="stroke"> Asked </span>
                        Questions</h2>

                    {[...Array(6)].map((_, index) => (
                        <div className="questions mt-10 " onClick={() => toggleFAQ(index)} key={index}>
                            <div className='ques border p-5 rounded-xl'>

                                <div className="question flex items-center justify-between">

                                    <p className='text-gray-500 text-lg title-font font-bold'>
                                        <span className='or-color md:text-2xl  title-font font-black md:leading-loose mr-2'>QUESTION :</span>
                                        {index + 1}. {["How do I self-publish my book?",
                                            "Is publishing a book difficult?",
                                            "What is an ISBN and do I need one?",
                                            "Will I need to have my book copyrighted?",
                                            "Do you offer design services?",
                                            "How do you handle distribution and marketing of books?"][index]}
                                    </p>
                                    {isToggled === index ? <FaMinus className='or-color' height={50} width={50} /> : <FaPlus className='or-color' height={50} width={50} />}
                                </div>



                                <div className="answer">
                                
                                    <p className={`mt-3 text-gray-500 text-lg transition-max-height mb-1 font-bold duration-500 ease-in-out ${isToggled === index ? 'max-h-60' : 'max-h-0 overflow-hidden'}`}>
                                    <span className='or-color md:text-2xl title-font font-black md:leading-loose mr-2'>ANSWER :</span>
                                        {["Details about self-publishing...",
                                         "Details about book publishing difficulty...",
                                          "Details about ISBN...",
                                           "Copyright details...",
                                            "Design services details...",
                                             "Distribution and marketing details..."][index]}
                                             
                                    </p>

                                </div>



                            </div>
                        </div>
                    ))}





{/* 
                    {[...Array(6)].map((_, index) => (
                        <button
                            key={index}
                            className="w-full border-b-2 border-gray-300 p-6 text-left group mt-0 focus:outline-none bg-slate-200 mb-4"
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="text-lg font-semibold flex justify-between">
                                {index + 1}. {["How do I self-publish my book?",
                                    "Is publishing a book difficult?",
                                    "What is an ISBN and do I need one?",
                                    "Will I need to have my book copyrighted?",
                                    "Do you offer design services?",
                                    "How do you handle distribution and marketing of books?"][index]}
                                <FontAwesomeIcon icon={openFAQ === index ? faMinusCircle : faPlusCircle} color="#2c9384" />
                            </div>
                            <div className={`mt-3 text-gray-700 transition-max-height duration-500 ease-in-out ${openFAQ === index ? 'max-h-40' : 'max-h-0 overflow-hidden'}`}>
                                {["Details about self-publishing...", "Details about book publishing difficulty...", "Details about ISBN...", "Copyright details...", "Design services details...", "Distribution and marketing details..."][index]}
                            </div>
                        </button>
                    ))} */}







                </div>
            </section>
        </div>
    )
}



