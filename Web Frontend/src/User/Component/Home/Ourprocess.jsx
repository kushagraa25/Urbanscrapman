import React from 'react'

const Ourprocess = () => {
    return (
        <section class="py-12 bg-white">
            <div class="container mx-auto px-4">
                <div class="grid lg:grid-cols-12 gap-8 items-center">

                    <div class="lg:col-span-5 flex items-center">
                        <div>
                            <p class="text-lg font-semibold text-green-700">OUR MISSION IS TO HELP EARTH BREATHE AGAIN</p>
                            <p class="text-3xl font-bold text-gray-800 mt-2">OUR PROCESS</p>
                        </div>
                    </div>


                    <div class="lg:col-span-2 flex justify-center items-center">
                        <img class="w-32 h-32 object-contain" src="https://www.scrapbuddy.in/public/frontend/img/gg.png" alt="Earth logo" />
                    </div>


                    <div class="lg:col-span-5 flex items-center">
                        <p class="text-gray-600 text-lg">
                            A simple, five -step process to circulate your waste back into the economy as a completely new product.
                        </p>
                    </div>
                </div>


                <div class="grid lg:grid-cols-12 gap-8 mt-12 items-center">

                    <div class="lg:col-span-3 space-y-6">
                        <div class="bg-green-100 p-6 rounded-lg shadow-lg">
                            <h3 class="text-xl font-semibold text-green-800">01. COLLECTION</h3>
                            <p class="text-gray-600 mt-2">
                                We collect the waste and transport it to a material recovery facility.
                            </p>
                        </div>
                        <div class="bg-green-100 p-6 rounded-lg shadow-lg">
                            <h3 class="text-xl font-semibold text-green-800">02. SEPARATION</h3>
                            <p class="text-gray-600 mt-2">
                                Keeping wet and dry wastes separately so that dry can be recycled and wet waste can be composted.
                            </p>
                        </div>
                        <div class="bg-green-100 p-6 rounded-lg shadow-lg">
                            <h3 class="text-xl font-semibold text-green-800">03. TREATMENT</h3>
                            <p class="text-gray-600 mt-2">
                                Processing the waste to prepare it for recycling or composting.
                            </p>
                        </div>
                    </div>


                    <div class="lg:col-span-6 flex justify-center">
                        <img class="w-full max-w-md" src="https://www.scrapbuddy.in/public/frontend/img/green.png" alt="Recycling process" />
                    </div>


                    <div class="lg:col-span-3 space-y-6">
                        <div class="bg-green-100 p-6 rounded-lg shadow-lg">
                            <h3 class="text-xl font-semibold text-green-800">04. RECYCLE</h3>
                            <p class="text-gray-600 mt-2">
                                The segregated items are further processed to be used as raw material for recycling.
                            </p>
                        </div>
                        <div class="bg-green-100 p-6 rounded-lg shadow-lg">
                            <h3 class="text-xl font-semibold text-green-800">05. REINTRODUCE TO ECONOMY</h3>
                            <p class="text-gray-600 mt-2">
                                The new recycled items are then produced and re-introduced into the economy.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Ourprocess
