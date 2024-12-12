import React from 'react';

const Services = () => {
    return (
        <section class="py-20 bg-[#F3F6FC] my-10">
            <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                <div class="w-full flex-col justify-start items-start lg:gap-11 gap-8 inline-flex">
                    <div class="flex-col justify-start items-center gap-2.5 flex">
                        <h2 class="text-center text-green-600 text-3xl font-bold font-manrope leading-normal">
                            Our Services
                        </h2>
                        <p class="text-center text-[#64748B] text-lg font-normal leading-8">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, placeat. Harum voluptatibus nesciunt placeat laboriosam saepe ex repellat asperiores natus!
                        </p>
                    </div>
                    <div class="flex-col w-full justify-center items-start gap-8 grid lg:grid-cols-4 grid-cols-1">
                        <div class="px-6 py-8 bg-[#1E293B] rounded-2xl border border-[#64748B] justify-start items-start gap-2.5 flex shadow-2xl">
                            <div class="flex-col justify-start items-start gap-4 inline-flex">
                                <h4 class="text-green-600 text-xl font-semibold leading-8 border-b">
                                    For Individuals
                                </h4>
                                <div className='flex flex-col gap-2'>
                                    <p class="text-[#E2E8F0] text-md leading-snug font-semibold">Scrap Collection</p>
                                    <p class="text-[#E2E8F0] text-md leading-snug font-semibold">Zero Collection</p>
                                    <p class="text-[#E2E8F0] text-md leading-snug font-semibold">Vehicle Scrapping</p>
                                </div>
                            </div>
                        </div>
                        <div class="px-6 py-8 bg-[#1E293B] rounded-2xl border border-[#64748B] justify-start items-start gap-3 flex lg:col-start-2 lg:col-end-4 shadow-2xl">
                            <div class="flex-col justify-start items-start inline-flex w-full">
                                <h4 class="text-green-600 text-xl font-semibold leading-8 border-b mb-4">
                                    For Businesses
                                </h4>
                                <div className='flex sm:flex-row flex-col gap-4 w-full justify-between'>
                                    <div className='flex flex-col gap-2'>
                                        <p class="text-[#E2E8F0] text-md leading-snug font-semibold">Scrap Collection</p>
                                        <p class="text-[#E2E8F0] text-md leading-snug font-semibold">ERP Services</p>
                                        <p class="text-[#E2E8F0] text-md leading-snug font-semibold">Dismantling</p>
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <p class="text-[#E2E8F0] text-md leading-snug font-semibold">Circular Economy</p>
                                        <p class="text-[#E2E8F0] text-md leading-snug font-semibold">Zero Waste</p>
                                        <p class="text-[#E2E8F0] text-md leading-snug font-semibold">Paper Shredding</p>
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <p class="text-[#E2E8F0] text-md leading-snug font-semibold">CSR Services</p>
                                        <p class="text-[#E2E8F0] text-md leading-snug font-semibold">Zero Waste Event</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="px-6 py-8 bg-[#1E293B] rounded-2xl border border-[#64748B] justify-start items-start gap-2.5 flex shadow-2xl">
                            <div class="flex-col justify-start items-start gap-4 inline-flex">
                                <h4 class="text-green-600 text-xl font-semibold leading-8 border-b">
                                    For Governments
                                </h4>
                                <div className='flex flex-col gap-2'>
                                    <p class="text-[#E2E8F0] text-md leading-snug font-semibold">Material Recovery Facility</p>
                                    <p class="text-[#E2E8F0] text-md leading-snug font-semibold">IEC</p>
                                    <p class="text-[#E2E8F0] text-md leading-snug font-semibold">Deposit Refund System (DRS)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
