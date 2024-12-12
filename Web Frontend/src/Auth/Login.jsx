import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { CiPhone, CiLock , CiUser } from "react-icons/ci";
import { Link, useNavigate } from 'react-router-dom';
import image from '../assets/Contact.webp'
import { Authcontext } from './Authcontext';
import { toast, Bounce } from 'react-toastify';
import Cookies from 'js-cookie';
import useIsLoggedIn from '../Hooks/useIsLoggedIn';
import URL from '../Url';

const Login = () => {
  const[  step , setStep ] = useState(1)
  const { isLogedIn, setIsLogedIn } = useContext(Authcontext)
  const [isLoading, setIsLoading] = useState(false);
  const [phoneNumber , setPhoneNumber] = useState('');
  const [otp , setOtp] = useState('')
  const [name , setName] = useState('')
  const [sessionId , setSessionId] = useState('')
  const navigate = useNavigate()
  const loogedIn = useIsLoggedIn()

  // useEffect(()=>{
  //   console.log(sessionId)
  // },[sessionId])

  useEffect(() => {
    if (loogedIn) return navigate('/')
  }, [])


  const checkPhone = (number) => {
    return /^[0-9]{10}$/.test(number);
  }

  const handlGetOpt = async ()=>{
    setIsLoading(true)
    if (!phoneNumber || !checkPhone(phoneNumber) ) {
      setIsLoading(false);
      return toast.error('Enter A valid Phone number', {
        position: "top-right",
        autoClose: 1000,
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
      const res = await axios.post(`${URL}/api/v1/urbanscrapman/otp/getotp`, {
        phoneNumber: phoneNumber,
      });

      if (res.status === 200) {
        setIsLoading(false);
        setStep(2)
        setSessionId(res.data.sessionId);
        return toast.success('OTP sent sucessfully', {
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
    } catch (error) {
      setIsLoading(false)
      return toast.error('Unable to Sent Otp', {
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
  }

  const handlelogin = async (e) => {
    setIsLoading(true)

    if (!otp || !sessionId) {
      setIsLoading(false)
      return toast.error('Try again Something Wrong', {
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
      const res = await axios.post(`${URL}/api/v1/urbanscrapman/user/login`, {
        phoneNumber : phoneNumber,
        otp : otp,
        sessionId : sessionId
      })

      if (res.status === 200) {
        setIsLoading(false)
        setIsLogedIn(true)
        setOtp('')
        Cookies.set('isloggedIn', true, { path: '/', expires: 30 });
        Cookies.set('user', JSON.stringify(res.data), { path: '/', expires: 30 });
        navigate('/')
        return toast.success('Loggedin SucessFully', {
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
        return toast.error('Invalid OTP', {
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
    } catch (e) {
      if(e.status == 404){
        setIsLoading(false)
        setOtp('')
        return setStep(3);
      }
      setIsLoading(false)
      return toast.error('Invalid OTP', {
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
  }


  const handleSingup = async (e)=>{
    if (!name) {
      return toast.error('Please Enter Your Name', {
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
      const res = await axios.post(`${URL}/api/v1/urbanscrapman/user/createaccount`, {
        phoneNumber: phoneNumber,
        name: name,
      });

      if (res.status === 201) {
        setIsLoading(false)
        setIsLogedIn(true)
        Cookies.set('isloggedIn', true, { path: '/', expires: 30 });
        Cookies.set('user', JSON.stringify(res.data), { path: '/', expires: 30 });
        navigate('/')
        setStep(0)
        return toast.success('Loggedin SucessFully', {
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
      } else {
        return toast.error('Something went wrong', {
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
    } catch (error) {
      return toast.error('Something went wrong', {
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
    <div className='w-full h-[100vh]  flex flex-col md:flex-row justify-between items-center'>
      <div className='md:w-[40%] lg:w-[50%] md:h-[100%] h-[50%] w-[100%]'>
        <img src={image} alt="" className='w-full h-full object-cover' />
      </div>
      <div className='md:w-[60%] lg:w-[50%] md:h-[100%] h-[50%] w-[100%] bg-white flex justify-center items-center flex-col p-5'>
        <div className='h-fit w-fit p-5 bg-white  md:shadow-card  rounded-2xl'>
        <h1 className='md:text-3xl text-2xl font-bold  capitalize mb-8 text-center'>Get Started</h1>
          {
            step === 1 ?
            <>
            <div className='flex  justify-center items-center border border-gray-500 rounded-2xl gap-4 px-2 mb-6'>
                <CiPhone size={20} />
                <input value={phoneNumber} type="tel" name='phoneNumber' className='h-12 outline-none rounded-2xl w-64 sm:w-80' placeholder='Phone Number' minLength={10} maxLength={10} onChange={(e) => setPhoneNumber(e.target.value)} />
            </div>
            <button className='h-12 outline-none rounded-2xl w-80 sm:w-96 bg-green-600 text-white font-bold mb-4 hover:bg-green-700 cursor-pointer duration-300' onClick={handlGetOpt}>Get Otp</button>
            </>
            :
            step == 2 ? 
            <>
            <div className='flex  justify-center items-center border border-gray-500 rounded-2xl gap-4 px-2 mb-6'>
                <CiLock size={20} />
                <input value={otp} type="tel" name='OTP' className='h-12 outline-none rounded-2xl w-64 sm:w-80' placeholder='OTP' minLength={6} maxLength={6} onChange={(e) => setOtp(e.target.value)} />
            </div>
            <button className='h-12 outline-none rounded-2xl w-80 sm:w-96 bg-green-600 text-white font-bold mb-4 hover:bg-green-700 cursor-pointer duration-300' onClick={handlelogin}>Login</button>
            </>
            :
            <>
            <div className='flex  justify-center items-center border border-gray-500 rounded-2xl gap-4 px-2 mb-6'>
                <CiUser size={20} />
                <input value={name} type="text" name='Name' className='h-12 outline-none rounded-2xl w-64 sm:w-80' placeholder='Name' onChange={(e) => setName(e.target.value)} />
            </div>
            <button className='h-12 outline-none rounded-2xl w-80 sm:w-96 bg-green-600 text-white font-bold mb-4 hover:bg-green-700 cursor-pointer duration-300' onClick={handleSingup}>Continue</button>
            </>
          }
        </div>
      </div>
    </div>
  )
}

export default Login