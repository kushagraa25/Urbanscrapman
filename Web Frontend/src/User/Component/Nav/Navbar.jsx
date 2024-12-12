import React, { useState } from 'react';
import logo from '../../../assets/navlogo.png';
import { NavLink, useNavigate } from 'react-router-dom';
import useIsLoggedIn from '../../../Hooks/useIsLoggedIn';
import Cookies from 'js-cookie';
import { FaRegUser, FaHistory } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown, MdLogout, MdOutlineDashboardCustomize } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
import useIsAdmin from '../../../Hooks/useIsAdmin'
import { HashLink } from 'react-router-hash-link';
import { FaChartSimple } from "react-icons/fa6";
import { GrContact } from "react-icons/gr";
import { toast, Bounce } from 'react-toastify';

const Navbar = () => {
    const isloggedIn = useIsLoggedIn()
    const [isAdmin, admindata] = useIsAdmin()
    const navigate = useNavigate()
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isOptionsOpen, setIsOptionsOpen] = useState(false)

    const handleLogout = () => {
        Cookies.remove('user');
        Cookies.set('isloggedIn', false);
        navigate('/')
        return toast.success('Logout Sucessfully', {
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
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleBoth = () =>{
        setIsMenuOpen(!isMenuOpen);
        setIsOptionsOpen(!isOptionsOpen)
    }
    return (
        <nav className="py-1 transition-all duration-500 w-[90%] mx-auto fixed top-5 left-[50%] bg-[#FFFFFFDD] border-2 border-gray-300 translate-x-[-50%] rounded-2xl z-50">
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex justify-between lg:flex-row">
                        <NavLink to={'/'} className="flex items-center">
                            <img src={logo} alt="Logo" className="w-48 mt-2 mb-2" />
                        </NavLink>
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                            aria-controls="navbar-default"
                            aria-expanded={isMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-6 h-6"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <div
                        className={`lg:flex lg:pl-11 w-full ${isMenuOpen ? 'block pb-10' : 'hidden'
                            }`}
                        id="navbar-default"
                    >
                        <ul className="lg:flex items-center flex-col mt-4 lg:mt-0 lg:flex-row lg:ml-auto gap-4">
                            <li>
                                <NavLink
                                    to={'/'}
                                    className="nav-link my-3 block lg:mr-6 md:my-0 lg:text-left text-center font-medium"
                                    onClick={() => isMenuOpen ? toggleMenu() : ""}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={'/rates'}
                                    className="nav-link my-3 block lg:mr-6 md:my-0 lg:text-left text-center font-medium"
                                    onClick={() => isMenuOpen ? toggleMenu() : ""}
                                >
                                    Rates
                                </NavLink>
                            </li>
                            <li>
                                <a href='https://play.google.com/store/apps/details?id=com.urbanscrapman' className={`flex justify-center items-center border border-green-100 p-2 rounded-3xl cursor-pointer relative bg-green-100 mb-2 md:mb-0 font-medium px-3 text-sm`}>
                                    Get App
                                </a>
                            </li>
                            <li>

                                {
                                    isloggedIn ?
                                        (
                                            <div className={`flex justify-center items-center border border-green-100 p-2 rounded-3xl cursor-pointer relative bg-green-100`} onClick={() => setIsOptionsOpen(!isOptionsOpen)}>
                                                <div className=''>
                                                    <FaRegUser size={18} className='text-green-600' />
                                                </div>
                                                <div>
                                                    <MdOutlineKeyboardArrowDown size={18} className={`${isOptionsOpen ? '-rotate-180' : 'rotate-0'} duration-300 text-green-600`} />
                                                </div>
                                                {
                                                    isOptionsOpen ?
                                                        <ul className={`flex flex-col absolute top-[130%] right-0 bg-white p-3 z-50 rounded-lg px-5 justify-start items-start border  border-gray-300 w-${isMenuOpen ? 'full' : 'fit'}`}>
                                                            {
                                                                isAdmin ?
                                                                    <li className='mb-2'>
                                                                        <NavLink
                                                                            to={'/admin/shedule'}
                                                                            className="nav-link  lg:mr-6 my-3 md:my-0 lg:text-left text-center font-medium flex justify-center items-center gap-2 w-fit"
                                                                            onClick={() => isMenuOpen ? toggleBoth() : ""}
                                                                        >
                                                                            <div className='h-[100%] translate-y-[1px]'>
                                                                                <MdOutlineDashboardCustomize size={18} />
                                                                            </div>
                                                                            <div className='capitalize' >
                                                                                Dashboard
                                                                            </div>
                                                                        </NavLink>
                                                                    </li>
                                                                    :
                                                                    ""
                                                            }
                                                            <li className='mb-2'>
                                                                <HashLink
                                                                    to={'/#about'}
                                                                    className="nav-link  lg:mr-6 my-3 md:my-0 lg:text-left text-center font-medium flex justify-center items-center gap-2 w-fit"
                                                                    onClick={() => isMenuOpen ? toggleBoth() : ""}

                                                                >
                                                                    <div className='h-[100%] translate-y-[1px]'>
                                                                        <FaChartSimple size={18} />
                                                                    </div>
                                                                    <div className='capitalize text-nowrap' >
                                                                        About Us
                                                                    </div>
                                                                </HashLink>
                                                            </li>
                                                            <li className='mb-2'>
                                                                <HashLink
                                                                    to={'/#contact'}
                                                                    className="nav-link  lg:mr-6 my-3 md:my-0 lg:text-left text-center font-medium flex justify-center items-center gap-2 w-fit"
                                                                    onClick={() => isMenuOpen ? toggleBoth() : ""}

                                                                >
                                                                    <div className='h-[100%] translate-y-[1px]'>
                                                                        <GrContact size={18} />
                                                                    </div>
                                                                    <div className=' capitalize text-nowrap' >
                                                                        Contact Us
                                                                    </div>
                                                                </HashLink>
                                                            </li>
                                                            <li className=''>
                                                                <HashLink
                                                                    to={'/#shedules'}
                                                                    className="nav-link  lg:mr-6 my-3 md:my-0 lg:text-left text-center font-medium flex justify-center items-center gap-2  w-fit"
                                                                    onClick={() => isMenuOpen ? toggleBoth() : ""}
                                                                >
                                                                    <div className='h-[100%] translate-y-[1px]'>
                                                                        <CiDeliveryTruck size={18} />
                                                                    </div>
                                                                    <div className='capitalize text-nowrap' >
                                                                        Shedule
                                                                    </div>
                                                                </HashLink>
                                                            </li>
                                                            <li className=''>
                                                                <p
                                                                    className="nav-link  lg:mr-6 my-3 md:my-0 lg:text-left text-center font-medium flex justify-center items-center gap-2"
                                                                    onClick={() => handleLogout()}
                                                                >
                                                                    <div className='h-[100%] translate-y-[1px]'>
                                                                        <MdLogout size={18} />
                                                                    </div>
                                                                    <div className=' capitalize text-nowrap' >
                                                                        Logout
                                                                    </div>
                                                                </p>
                                                            </li>

                                                        </ul> :
                                                        ""
                                                }
                                            </div>
                                        )
                                        :
                                        (
                                            isMenuOpen ?
                                                <NavLink
                                                    to={'/login'}
                                                    className="nav-link  block lg:mr-6 my-3 lg:text-left text-center font-medium"
                                                    onClick={() => isMenuOpen ? isMenuOpen : ""}
                                                >
                                                    Get Started
                                                </NavLink>
                                                :
                                                <NavLink to={'/login'} className="bg-green-100  rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-3 px-6 text-sm hover:bg-green-100">
                                                    Get Started
                                                </NavLink>
                                        )
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
