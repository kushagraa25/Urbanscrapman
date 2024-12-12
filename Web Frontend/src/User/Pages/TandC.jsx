import React from 'react'

const data = [
    {
        "text": "By using the Urban Scrapman platform, you agree to these terms and conditions."
      },
      {
        "text": "You must provide accurate and complete information during registration."
      },
      {
        "text": "Urban Scrapman reserves the right to modify or terminate services without prior notice."
      },
      {
        "text": "The platform facilitates the selling of scrap items and connects users with recycling professionals."
      },
      {
        "text": "Payments for scrap materials will be made after verification of items by authorized personnel."
      },
      {
        "text": "Urban Scrapman is not responsible for delays caused by external factors such as weather, transportation, or other unforeseen circumstances."
      },
      {
        "text": "Users must ensure that the scrap items they provide comply with environmental regulations."
      },
      {
        "text": "Any misuse of the platform may result in account suspension or termination."
      },
      {
        "text": "All disputes shall be resolved under the jurisdiction of applicable laws."
      },
      {
        "text": "Continued use of the platform after any updates to these terms implies acceptance of the changes."
      }
]



const TandC = () => {
    return (
        <div className='w-full h-fit p-4 md:p-10 mt-[15vh]'>
            <div className="w-full h-full rounded-3xl flex flex-col ">
                <div className="w-full h-[20%] flex flex-col justify-center items-center    ">
                    <h1 className="font-palyfair text-3xl md:text-4xl lg:text-5xl font-bold"><span className="text-4xl md:text-5xl lg:text-6xl underline">Terms and conditions</span></h1>
                </div>

                <ol class="relative  md:mx-20 py-3 mt-10">
                    {
                        data.map((item, i) => {
                            return <Item key={i} i={i+1} details={item.text} />
                        })
                    }
                </ol>


            </div>
        </div>
    )
}


const Item = ({ i,details }) => {
    return (
        <li class="mb-3 ms-4">
            <p class="mb-4 text-xl font-normal mt-1 text-justify  px-4">{i} . {details}</p>
        </li>
    )
}

export default TandC