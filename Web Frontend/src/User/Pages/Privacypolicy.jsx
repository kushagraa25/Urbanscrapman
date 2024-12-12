import React from 'react'

const data = [
    {
        "text": "Urban Scrapman is committed to protecting your privacy and ensuring the security of your personal information."
      },
      {
        "text": "We collect user data such as name, address, contact details, and payment information to facilitate scrap pickups and payments."
      },
      {
        "text": "Your data will not be shared with third parties without your consent, except for essential service delivery purposes."
      },
      {
        "text": "The platform may use cookies to improve the user experience."
      },
      {
        "text": "Users have the right to access, modify, or delete their personal data stored on the platform."
      },
      {
        "text": "Urban Scrapman follows industry standards to secure user data from unauthorized access or breaches."
      },
      {
        "text": "We may update the privacy policy from time to time. Users are encouraged to review it periodically."
      },
      {
        "text": "By using the platform, you agree to the terms of this privacy policy."
      }
]



const Privacy = () => {
    return (
        <div className='w-full h-fit p-4 md:p-10 mt-[15vh]'>
            <div className="w-full h-full rounded-3xl flex flex-col ">
                <div className="w-full h-[20%] flex flex-col justify-center items-center    ">
                    <h1 className="font-palyfair text-3xl md:text-4xl lg:text-5xl font-bold"><span className="text-4xl md:text-5xl lg:text-6xl underline">Privacy policy</span></h1>
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

export default Privacy