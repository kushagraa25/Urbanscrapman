import React from 'react'

const WorkFlow = () => {
    return (
        <section class="relative">
            <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                <div class="w-full flex-col justify-start items-center lg:gap-12 gap-10 inline-flex">
                    <div class="w-full flex-col justify-start items-center gap-3 flex">
                        <h2 class="w-full text-center text-4xl font-bold font-manrope leading-normal text-green-600">How It Works</h2>
                        <p class="max-w-2xl text-center text-gray-400 text-base font-normal leading-relaxed">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores repellat obcaecati dicta beatae deleniti nostrum ullam voluptatibus soluta amet? Vel!</p>
                    </div>
                    <div class="w-full justify-start items-start gap-8 grid md:grid-cols-3 grid-cols-1">
                        <div class="w-full flex-col justify-start items-start gap-2.5 inline-flex   px-4 py-3 rounded-3xl">
                            <div class="w-full flex justify-between relative ">
                                <h4 class="text-gray-900 text-xl font-semibold leading-8">Shedule A Pickup</h4>
                                <h3 class="text-green-400 text-4xl font-extrabold font-manrope leading-[100px] absolute -top-9 right-0">1</h3>
                            </div>
                            <p class="text-gray-400 text-base font-normal leading-relaxed text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi quo ratione consequuntur corporis iste dignissimos delectus maiores pariatur quaerat fugiat.</p>
                        </div>
                        <div class="w-full flex-col justify-start items-start gap-2.5 inline-flex   px-4 py-3 rounded-3xl">
                            <div class="w-full flex justify-between relative ">
                                <h4 class="text-gray-900 text-xl font-semibold leading-8">Pickup At Your Location</h4>
                                <h3 class="text-green-400 text-4xl font-extrabold font-manrope leading-[100px] absolute -top-9 right-0">2</h3>
                            </div>
                            <p class="text-gray-400 text-base font-normal leading-relaxed text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi quo ratione consequuntur corporis iste dignissimos delectus maiores pariatur quaerat fugiat.</p>
                        </div>
                        <div class="w-full flex-col justify-start items-start gap-2.5 inline-flex   px-4 py-3 rounded-3xl">
                            <div class="w-full flex justify-between relative ">
                                <h4 class="text-gray-900 text-xl font-semibold leading-8">Recive Payment</h4>
                                <h3 class="text-green-400 text-4xl font-extrabold font-manrope leading-[100px] absolute -top-9 right-0">3</h3>
                            </div>
                            <p class="text-gray-400 text-base font-normal leading-relaxed text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi quo ratione consequuntur corporis iste dignissimos delectus maiores pariatur quaerat fugiat.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default WorkFlow
