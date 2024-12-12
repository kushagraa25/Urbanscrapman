import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import phone from '../../../assets/phone.jpg'

const SchedulePickupForm = () => {
  const navigate = useNavigate()
  // const [formData, setFormData] = useState({
  //   date: "",
  //   time: "",
  //   address: "",
  //   weight: "",
  //   remarks: "",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Form Data Submitted:", formData);
  //   alert("Pickup Scheduled!");
  // };

  return (
    <section class="pt-24 relative xl:mr-0 lg:mr-5 mr-0">
      <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div class="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
          <div class="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
            <div class="w-full flex-col justify-center items-start gap-8 flex">
              <div class="flex-col justify-start lg:items-start items-center gap-4 flex">
                <h6 class="text-gray-400 text-base font-normal leading-relaxed">Schedule a Pickup</h6>
                <div class="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                  <h2
                    class="text-green-700 text-4xl font-bold font-manrope leading-normal lg:text-start text-center capitalize">
                    get the best price for you trash</h2>
                  <p
                    class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                    Our achievement story is a testament to teamwork and perseverance. Together, we've
                    overcome challenges, celebrated victories, and created a narrative of progress and
                    success.</p>
                </div>
              </div>
              <div class="w-full flex-col justify-center items-start gap-6 flex">
                <div class="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out  px-10 bor p-4  mx-auto w-64">
                    <div className="flex items-center justify-center">
                      <img
                        src="https://ikc.edgekit.net/h1rxzpffx/scrapuncle/assets/papers_rorTDynz7.png?updatedAt=1710451407122"
                        alt="Double Door Fridge"
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <div className="text-center mt-4">
                      <p className="text-xl font-semibold text-gray-700">RS 14/kg</p>
                    </div>
                    <div className="text-center mt-2">
                      <p className="text-lg font-medium text-gray-900">Office Paper (A3/A4)</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out  px-10 bor p-4  mx-auto w-64">
                    <div className="flex items-center justify-center">
                      <img
                        src="https://ikp.edgekit.net/h1rxzpffx/swapecox/Books.webp"
                        alt="Double Door Fridge"
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <div className="text-center mt-4">
                      <p className="text-xl font-semibold text-gray-700">RS 12/Kg</p>
                    </div>
                    <div className="text-center mt-2">
                      <p className="text-lg font-medium text-gray-900">Copies/Books</p>
                    </div>
                  </div>
                </div>
                <div class="w-full  h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out  px-10 bor p-4  mx-auto w-64">
                    <div className="flex items-center justify-center">
                      <img
                        src="https://ikp.edgekit.net/h1rxzpffx/swapeco/img/scrap-item/brass-nuckle.png"
                        alt="Double Door Fridge"
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <div className="text-center mt-4">
                      <p className="text-xl font-semibold text-gray-700">RS 305/piece</p>
                    </div>
                    <div className="text-center mt-2">
                      <p className="text-lg font-medium text-gray-900">BRASS</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out  px-10 bor p-4  mx-auto w-64">
                    <div className="flex items-center justify-center">
                      <img
                        src="https://ikp.edgekit.net/h1rxzpffx/swapeco/img/scrap-item/water-heater.png"
                        alt="Double Door Fridge"
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <div className="text-center mt-4">
                      <p className="text-xl font-semibold text-gray-700">RS 20/Kg</p>
                    </div>
                    <div className="text-center mt-2">
                      <p className="text-lg font-medium text-gray-900">Geyser</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              class="sm:w-fit w-full group px-3.5 py-2 bg-green-600 hover:bg-green-700 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out justify-center items-center flex cursor-pointer">

              <a href="https://play.google.com/store/apps/details?id=com.urbanscrapman" class="px-1.5 text-white text-sm font-medium leading-6 group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out flex justify-center items-center gap-1">
                Get The App Now
                <svg class="group-hover:translate-x-0.5 transition-all duration-700 ease-in-out translate-y-[1px]"
                  xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M6.75265 4.49658L11.2528 8.99677L6.75 13.4996" stroke="#ffffff" stroke-width="1.6"
                    stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </a>
            </button>
          </div>
          <div className="min-h-fit md:min-h-screen flex flex-col items-center justify-center ">
            <img src={phone} alt="" className="md:scale-110 " />
            {/* <form
              onSubmit={handleSubmit}
              className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
            >
              <h2 className="text-2xl font-semibold mb-4">Schedule a Pickup</h2>

              
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Enter Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full mb-4 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-400"
              />

              
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Enter Time
              </label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full mb-4 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-400"
              />

              
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Select an Address
              </label>
              <select
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full mb-4 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-400"
              >
                <option value="">Choose Address</option>
                <option value="Home">Home</option>
                <option value="Office">Office</option>
              </select>


              <label className="block text-sm font-medium text-gray-700 mb-1">
                Estimated Weight
              </label>
              <select
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                className="w-full mb-4 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-400"
              >
                <option value="">Select Weight</option>
                <option value="1-5kg">1-5kg</option>
                <option value="5-10kg">5-10kg</option>
                <option value="10kg+">10kg+</option>
              </select>

              
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Remarks (Optional)
              </label>
              <textarea
                name="remarks"
                value={formData.remarks}
                onChange={handleChange}
                className="w-full mb-4 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-400"
                placeholder="Add any remarks..."
              />


              <button
                type="submit"
                className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
              >
                Schedule a Pickup
              </button>
            </form> */}
          </div>
        </div>
      </div>
    </section>


  );
};

export default SchedulePickupForm;
