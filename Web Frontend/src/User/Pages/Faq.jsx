import React from 'react'

const data = [
    {
        "question": "1. What is Urban Scrapman designed for?",
        "answer": "Urban Scrapman is designed to simplify the process of selling scrap items by enabling users to schedule pickups online through the website or app. It also provides transparent pricing based on the type and weight of scrap materials."
    },
    {
        "question": "2. Can I schedule a scrap pickup online?",
        "answer": "Yes, you can easily schedule a scrap pickup using Urban Scrapman’s website or mobile app at your convenience."
    },
    {
        "question": "3. How does Urban Scrapman determine the price for scrap items?",
        "answer": "The price is determined based on the type and weight of scrap materials. Users can view the rates on the app or website before scheduling a pickup."
    },
    {
        "question": "4. Is the doorstep pickup service free?",
        "answer": "Yes, Urban Scrapman offers a free doorstep pickup service for collecting scrap materials from your location."
    },
    {
        "question": "5. What types of scrap items does Urban Scrapman collect?",
        "answer": "Urban Scrapman collects a variety of scrap items, including paper, plastics, metals, e-waste, and other recyclable materials."
    },
    {
        "question": "6. How can I track my scheduled pickup?",
        "answer": "You can track your pickup request and status directly through the Urban Scrapman app or website in real-time."
    },
    {
        "question": "7. Is there an option for receiving payment online?",
        "answer": "Yes, Urban Scrapman offers secure online payment options, ensuring hassle-free and formal payments for your scrap."
    },
    {
        "question": "8. Does Urban Scrapman provide an invoice for scrap collection?",
        "answer": "Yes, once your scrap is collected, Urban Scrapman generates an invoice for complete transparency and record-keeping."
    },
    {
        "question": "9. How can I contact Urban Scrapman for inquiries or support?",
        "answer": "You can contact our support team through the app, website, or WhatsApp for quick assistance regarding your queries or services."
    },
    {
        "question": "10. Does Urban Scrapman offer notifications for pickups and updates?",
        "answer": "Yes, Urban Scrapman sends notifications via SMS, email, and WhatsApp to keep you updated about pickup schedules, payments, and other important information."
    }
]



const Faq = () => {
    return (
        <div className='w-full h-fit p-4 md:p-10 mt-[15vh]'>
            <div className="w-full h-full rounded-3xl flex flex-col ">
                <div className="w-full h-[20%] flex flex-col justify-center items-center    ">
                    <h1 className="font-palyfair text-3xl md:text-4xl lg:text-5xl font-bold"><span className="text-4xl md:text-5xl lg:text-6xl underline">FAQ's</span></h1>
                </div>

                <ol class="relative  md:mx-20 py-3 mt-10">
                    {
                        data.map((item, i) => {
                            return <Item key={i} heading={item.question} details={item.answer} />
                        })
                    }
                </ol>


            </div>
        </div>
    )
}


const Item = ({ heading, details }) => {
    return (
        <li class="mb-10 ms-4">
            <h3 class="text-xl font-semibold">{heading}</h3>
            <p class="mb-4 text-base font-normal mt-2 text-justify  px-4">{details}</p>
        </li>
    )
}

export default Faq