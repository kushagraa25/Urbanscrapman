import React, { useEffect } from 'react'
import { CiUser, CiPhone, CiLock } from "react-icons/ci";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import image from '../assets/Contact.webp'
import { toast, Bounce } from 'react-toastify';
import useIsLoggedIn from '../Hooks/useIsLoggedIn';
import URL from '../Url';
import { useState } from 'react';
const Singup = () => {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const loogedIn = useIsLoggedIn()

  useEffect(() => {
    if (loogedIn) return navigate('/')
  }, [])

  const checkPhone = (number) => {
    return /^[0-9]{10}$/.test(number);
  }

  const handlelogin = async (e) => {
    setIsLoading(true)
    e.preventDefault();
    const details = {
      phoneNumber: e.target.phoneNumber.value,
      password: e.target.password.value,
      name: e.target.name.value
    }

    if (!details.phoneNumber || !details.password || !details.name) {
      setIsLoading(false)
      return toast.error('All Fields Are Required', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }

    if (!checkPhone(details.phoneNumber)) {
      setIsLoading(false)
      return toast.error('Enter A valid Phone number', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }

    try {
      const res = await axios.post(`${URL}/api/v1/urbanscrapman/user/singup`, details)

      if (res.status == 201) {
        setIsLoading(false)
        navigate('/login')
        return toast.success('Account Created SucessFully', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        })
      }
      else {
        setIsLoading(false)
        return toast.error('Something Went Wrong', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        })
      }
    } catch (e) {
      setIsLoading(false)
      console.log(e)
      toast.error(e.response.data.error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      })
    }
  }


  return (
    <div className='w-full h-[100vh]   flex flex-col md:flex-row justify-between items-center'>
      <div className='md:w-[40%] lg:w-[50%] md:h-[100%] h-[50%] w-[100%]'>
        <img src={image} alt="" className='w-full h-full object-cover' />
      </div>
      <form className='md:w-[60%] lg:w-[50%] md:h-[100%] h-fit w-[100%] bg-white flex justify-center items-center flex-col p-5' onSubmit={(e) => handlelogin(e)}>
        <h1 className='md:text-4xl text-2xl font-bold  capitalize mb-12'>Create Account</h1>
        <div className='flex  justify-center items-center border border-gray-500 rounded-2xl gap-4 px-2 mb-6'>
          <CiUser size={20} />
          <input type="text" name='name' className='h-12 outline-none rounded-2xl w-64 sm:w-80' placeholder='Name' />
        </div>
        <div className='flex  justify-center items-center border border-gray-500 rounded-2xl gap-4 px-2 mb-6'>
          <CiPhone size={20} />
          <input type="tel" name='phoneNumber' className='h-12 outline-none rounded-2xl w-64 sm:w-80' placeholder='Phone Number' minLength={10} maxLength={10} />
        </div>
        <div className='flex  justify-center items-center border border-gray-500 rounded-2xl gap-4 px-2 mb-6'>
          <CiLock size={20} />
          <input type="password" name='password' className='h-12 outline-none rounded-2xl w-64 sm:w-80' placeholder='Password' />
        </div>

        {
          isLoading ?
            <button className='h-12 outline-none rounded-2xl w-80 sm:w-96 bg-green-600 text-white font-bold mb-4 hover:bg-green-700 cursor-pointer duration-300 flex items-center justify-center'>
              <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </button>

            :
            <input className='h-12 outline-none rounded-2xl w-80 sm:w-96 bg-green-600 text-white font-bold mb-4 hover:bg-green-700 cursor-pointer duration-300' type='submit' value={'Create Account'} />
        }

        <p className='text-center w-96 mr-4 text-green-600 mb-6'>Already Have Account? <Link to={'/login'} className='hover:text-green-700'>Login</Link></p>
      </form>
    </div>
  )
}

export default Singup
