import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import useIsLoggedIn from '../../Hooks/useIsLoggedIn';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import URL from '../../Url';
import { toast, Bounce } from 'react-toastify';

const SchedulePickup = () => {
  const isloggedIn = useIsLoggedIn();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    weight: '',
    date: '',
    timeSlot: '',
    address: '',
    pincode: '',
    landmark: '',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.weight) newErrors.weight = 'Please select weight';
    if (!formData.date) newErrors.date = 'Please select a date';
    if (!formData.timeSlot) newErrors.timeSlot = 'Please select a time slot';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.pincode || !/^[0-9]{6}$/.test(formData.pincode)) newErrors.pincode = 'Enter a valid 6-digit pincode';
    if (!formData.landmark) newErrors.landmark = 'Landmark is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const id = JSON.parse(Cookies.get('user'))?.id;
      try {
        const response = await axios.post(`${URL}/api/v1/urbanscrapman/shedule/sheduleapickup`, {
          weight: formData.weight,
          pickUpDate: formData.date,
          timeSlot: formData.timeSlot,
          pinCode: formData.pincode,
          landMark: formData.landmark,
          address: formData.address,
          createdBy: id,
        });
        if (response.status === 201) {
          toast.success('Pickup Scheduled Successfully', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
            transition: Bounce,
          });
          setFormData({ weight: '', date: '', timeSlot: '', address: '', pincode: '', landmark: '' });
        } else {
          toast.error('Failed to schedule pickup. Try again', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
            transition: Bounce,
          });
        }
      } catch (error) {
        toast.error('Failed to schedule pickup. Try again', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
          transition: Bounce,
        });
      }
    }
  };

  return (
    <div className="md:h-[80vh] lg:h-fit flex justify-center items-center p-4 mb-5" id="shedules">
      <div className="bg-white rounded-3xl p-8 flex flex-col md:flex-row w-full md:w-[90%] gap-6 shadow-card ">
        <div className="w-full">
          <h2 className="text-3xl font-semibold text-green-600 mb-6 text-center md:text-left">Schedule a Pickup</h2>
          <form onSubmit={handleSubmit} className="space-y-6 md:space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-1">Select Weight</label>
                <select
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                  className={`w-full border p-3 rounded-lg ${errors.weight ? 'border-red-500' : 'border-gray-300'}`}
                >
                  <option value="">Select Weight</option>
                  <option value="0-50kg">0-50kg</option>
                  <option value="50-100kg">50-100kg</option>
                  <option value="100-200kg">100-200kg</option>
                </select>
                {errors.weight && <p className="text-red-500 text-sm">{errors.weight}</p>}
              </div>

              <div>
                <label className="block text-gray-700 mb-1">Select Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className={`w-full border p-3 rounded-lg ${errors.date ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
              </div>

              <div>
                <label className="block text-gray-700 mb-1">Select Time Slot</label>
                <select
                  name="timeSlot"
                  value={formData.timeSlot}
                  onChange={handleChange}
                  className={`w-full border p-3 rounded-lg ${errors.timeSlot ? 'border-red-500' : 'border-gray-300'}`}
                >
                  <option value="">Select Time Slot</option>
                  <option value="9am-12pm">9am-12pm</option>
                  <option value="12pm-3pm">12pm-3pm</option>
                  <option value="3pm-6pm">3pm-6pm</option>
                </select>
                {errors.timeSlot && <p className="text-red-500 text-sm">{errors.timeSlot}</p>}
              </div>

              <div>
                <label className="block text-gray-700 mb-1">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className={`w-full border p-3 rounded-lg ${errors.address ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
              </div>

              <div>
                <label className="block text-gray-700 mb-1">Pincode</label>
                <input
                  type="text"
                  name="pincode"
                  maxLength="6"
                  value={formData.pincode}
                  onChange={handleChange}
                  className={`w-full border p-3 rounded-lg ${errors.pincode ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.pincode && <p className="text-red-500 text-sm">{errors.pincode}</p>}
              </div>

              <div>
                <label className="block text-gray-700 mb-1">Landmark</label>
                <input
                  type="text"
                  name="landmark"
                  value={formData.landmark}
                  onChange={handleChange}
                  className={`w-full border p-3 rounded-lg ${errors.landmark ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.landmark && <p className="text-red-500 text-sm">{errors.landmark}</p>}
              </div>
            </div>

            {
              isloggedIn ?
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition duration-300 font-bold"
                >
                  Schedule Pickup
                </button>
                :
                <button
                  onClick={()=> navigate('/login')}
                  className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition duration-300 font-bold"
                >
                  Login To Schedule
                </button>
            }
          </form>
        </div>
      </div>
    </div>
  );
};

export default SchedulePickup;
