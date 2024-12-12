import React from 'react'

const About = () => {
    return (
        <section class="py-24 relative bg-gradient-to-b from-white via-white via-[20%] to-[#E3F2F5]" id='about'>
            <div class="mb-14 text-center">
                <span
                    class="py-1 px-4 bg-green-100 rounded-full text-xs font-medium text-green-600 text-center">About Us</span>
                <h2 class="text-4xl text-center font-bold text-green-600 py-5">
                    Revolutionary Features
                </h2>
                <p class="text-lg font-normal text-gray-500 max-w-md md:max-w-2xl mx-auto">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptates iure eligendi esse dolor, repudiandae temporibus!
                </p>
            </div>
            <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto ">
                <div class="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
                    <div
                        class="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
                        <div class="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                            <img class=" rounded-xl object-cover" src="https://cdn.prod.website-files.com/65467003a51e4018902d0c44/65467003a51e4018902d0ed5_Recycling%20facility.jpg" alt="about Us image" />
                        </div>
                        <img class="sm:ml-0 ml-auto rounded-xl object-cover" src="https://img.freepik.com/premium-photo/asian-worker-collecting-garbage-urban-municipal-are-collecting-trash-removal-garbage-collector_61243-1444.jpg"
                            alt="about Us image" />
                    </div>
                    <div class="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                        <div class="w-full flex-col justify-center items-start gap-8 flex">
                            <div class="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                <h2
                                    class="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                                    Cleaning the Environment one step at a time.</h2>
                                <p class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                                    Every project we've undertaken has been a collaborative effort, where every person
                                    involved has left their mark. Together, we've not only recycled scrap, reduced waste, conserved resources, and benefited the environment, economy, and community.</p>
                            </div>
                            <div class="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                                <div class="flex-col justify-start items-start inline-flex">
                                    <h3 class="text-gray-900 text-4xl font-bold font-manrope leading-normal">3+</h3>
                                    <h6 class="text-gray-500 text-base font-normal leading-relaxed">Months of Experience</h6>
                                </div>
                                <div class="flex-col justify-start items-start inline-flex">
                                    <h4 class="text-gray-900 text-4xl font-bold font-manrope leading-normal">125+</h4>
                                    <h6 class="text-gray-500 text-base font-normal leading-relaxed">Successful Recycles</h6>
                                </div>
                                <div class="flex-col justify-start items-start inline-flex">
                                    <h4 class="text-gray-900 text-4xl font-bold font-manrope leading-normal">52+</h4>
                                    <h6 class="text-gray-500 text-base font-normal leading-relaxed">Happy Clients</h6>
                                </div>
                            </div>
                        </div>
                        {/* <button
                            // class="sm:w-fit w-full px-3.5 py-2 bg-green-600 hover:bg-green-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                            // <span class="px-1.5 text-white text-sm font-medium leading-6">Read More</span>
                        </button> */}
                    </div>
                </div>
            </div>
            
        </section>

    )
}

export default About
