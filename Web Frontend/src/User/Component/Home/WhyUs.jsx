import React from 'react'
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { FaMoneyBillWave ,FaHandshake ,FaLeaf } from "react-icons/fa";



const WhyUs = () => {
    return (
        <section class="sm:py-20">
            <div class="mx-auto max-w-full md:px-24 px-3 ">
                <div
                    class="rounded-2xl py-10 px-10 xl:py-16 xl:px-20 bg-gray-50 flex items-center justify-between flex-col gap-16 lg:flex-row sm:shadow-xl">
                    <div class="w-full lg:w-60">
                        <h2
                            class="font-manrope text-4xl font-bold text-gray-900 mb-4 text-center lg:text-left"
                        >
                            Why Us
                        </h2>
                        <p class="text-sm text-gray-500 leading-6 text-center lg:text-left">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        </p>
                    </div>
                    <div class="w-full lg:w-3/5">
                        <div
                            class="flex flex-col flex-1 gap-10 lg:gap-5 lg:flex-row lg:justify-between ga"
                        >
                            <div class="block">
                                <div className='flex justify-center items-center flex-col gap-2'>
                                <FaMoneyBillWave size={38} className='text-yellow-700'/>
                                <span class="text-gray-900 text-center block  font-medium text-xl">Best Rates</span>
                                <p className=' text-wrap text-center text-gray-600'> Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
                                </div>
                            </div>
                            <div class="block">
                                <div className='flex justify-center items-center flex-col gap-2'>
                                <FaHandshake size={38} className='text-[#e0ac69]' />
                                <span class="text-gray-900 text-center block  font-medium text-xl">Convenience
                                </span>
                                <p className=' text-wrap text-center text-gray-600'> Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
                                </div>
                            </div>
                            <div class="block">
                                <div className='flex justify-center items-center flex-col gap-2'>
                                <VscWorkspaceTrusted size={36} className='text-blue-400' />
                                <span class="text-gray-900 text-center block  font-medium text-xl">Trust
                                </span>
                                <p className=' text-wrap text-center text-gray-600'> Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
                                </div>
                            </div>
                            <div class="block">
                                <div className='flex justify-center items-center flex-col gap-2'>
                                <FaLeaf size={36}  className='text-green-500'/>
                                <span class="text-gray-900 text-center block  font-medium text-xl">Eco-Friendly
                                </span>
                                <p className=' text-wrap text-center text-gray-600'> Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default WhyUs
