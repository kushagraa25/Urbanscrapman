import React, { useState } from 'react';
import logo from '../assets/navlogo.png';
import { BiMenuAltRight } from 'react-icons/bi';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { toast , Bounce } from 'react-toastify';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        Cookies.remove('user');
        Cookies.set('isloggedIn', false);
        navigate('/');
        return toast.success('Sucessfully Logout', {
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
    };

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Toggle Button for Mobile */}
            <div className="fixed top-4 left-0 z-50 md:hidden">
                <BiMenuAltRight
                    size={36}
                    className={`cursor-pointer bg-gray-100 rounded-r-xl  text-gray-700 ${isOpen ? 'hidden' : 'flex'}` }
                    onClick={toggleSidebar}
                />
            </div>
            <div
                className={`fixed top-0 left-0 h-[100vh] w-64 bg-white shadow-lg p-4 flex-col z-40 transition-transform duration-300 
                ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
            >
                <div className="w-full flex justify-between items-center gap-2 mb-6">
                    <NavLink to={'/'}>
                        <img src={logo} alt="Pagedone logo" className='w-28' />
                    </NavLink>
                    <BiMenuAltRight
                        size={24}
                        className={`cursor-pointer md:hidden ${isOpen ? 'flex' : 'hidden'}  z-50`}
                        onClick={toggleSidebar}
                    />
                </div>

                <div className="w-full">
                    <div className="w-full h-8 px-3 flex items-center">
                        <h6 className="text-gray-500 text-xs font-semibold">MENU</h6>
                    </div>
                    <ul className="flex flex-col gap-2">
                        <li>
                            <NavLink to={'/admin/shedule'}>
                                <div className="flex-col p-3 hover:bg-green-100 duration-300 rounded-lg" onClick={toggleSidebar}>
                                    <div className="h-5 flex gap-3">
                                        <div className="relative">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <g id="category 02">
                                                <g id="icon">
                                                    <path d="M2.5 5.41667C2.5 3.80584 3.80584 2.5 5.41667 2.5C7.0275 2.5 8.33333 3.80584 8.33333 5.41667C8.33333 7.0275 7.0275 8.33333 5.41667 8.33333C3.80584 8.33333 2.5 7.0275 2.5 5.41667Z" stroke="#6B7280" stroke-width="1.6" />
                                                    <path d="M11.6667 5.41667C11.6667 4.24628 11.6667 3.66109 11.9476 3.24072C12.0691 3.05873 12.2254 2.90248 12.4074 2.78088C12.8278 2.5 13.4129 2.5 14.5833 2.5C15.7537 2.5 16.3389 2.5 16.7593 2.78088C16.9413 2.90248 17.0975 3.05873 17.2191 3.24072C17.5 3.66109 17.5 4.24628 17.5 5.41667C17.5 6.58705 17.5 7.17224 17.2191 7.59262C17.0975 7.7746 16.9413 7.93085 16.7593 8.05245C16.3389 8.33333 15.7537 8.33333 14.5833 8.33333C13.4129 8.33333 12.8278 8.33333 12.4074 8.05245C12.2254 7.93085 12.0691 7.7746 11.9476 7.59262C11.6667 7.17224 11.6667 6.58705 11.6667 5.41667Z" stroke="#6B7280" stroke-width="1.6" />
                                                    <path d="M11.6667 14.5833C11.6667 12.9725 12.9725 11.6667 14.5833 11.6667C16.1942 11.6667 17.5 12.9725 17.5 14.5833C17.5 16.1942 16.1942 17.5 14.5833 17.5C12.9725 17.5 11.6667 16.1942 11.6667 14.5833Z" stroke="#6B7280" stroke-width="1.6" />
                                                    <path d="M2.5 14.5833C2.5 13.4129 2.5 12.8278 2.78088 12.4074C2.90248 12.2254 3.05873 12.0691 3.24072 11.9476C3.66109 11.6667 4.24628 11.6667 5.41667 11.6667C6.58705 11.6667 7.17224 11.6667 7.59262 11.9476C7.7746 12.0691 7.93085 12.2254 8.05245 12.4074C8.33333 12.8278 8.33333 13.4129 8.33333 14.5833C8.33333 15.7537 8.33333 16.3389 8.05245 16.7593C7.93085 16.9413 7.7746 17.0975 7.59262 17.2191C7.17224 17.5 6.58705 17.5 5.41667 17.5C4.24628 17.5 3.66109 17.5 3.24072 17.2191C3.05873 17.0975 2.90248 16.9413 2.78088 16.7593C2.5 16.3389 2.5 15.7537 2.5 14.5833Z" stroke="#6B7280" stroke-width="1.6" />
                                                </g>
                                            </g>
                                        </svg>
                                        </div>
                                        <h2 className="text-gray-500 text-sm font-medium">Schedules and Pickups</h2>
                                    </div>
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/admin/scrabs'}>
                                <div className="flex-col p-3 hover:bg-green-100 duration-300 rounded-lg" onClick={toggleSidebar}>
                                    <div className="h-5 flex gap-3">
                                        <div className="relative">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <g id="Cube 01">
                                                    <path id="icon" d="M2.78223 5.83329C2.52965 6.27072 2.52543 6.80097 2.517 7.86146L2.5 9.99996L2.517 12.1385C2.52543 13.199 2.52965 13.7292 2.78223 14.1666C3.03481 14.6041 3.49196 14.8728 4.40627 15.4104L6.25 16.4943L8.11073 17.5489C9.03347 18.0718 9.49484 18.3333 10 18.3333M2.78223 5.83329C3.03481 5.39587 3.49196 5.12709 4.40627 4.58955L6.25 3.50557L8.11073 2.45104C9.03347 1.9281 9.49484 1.66663 10 1.66663C10.5052 1.66663 10.9665 1.9281 11.8893 2.45104L13.75 3.50557L15.5937 4.58955C16.508 5.12709 16.9652 5.39587 17.2178 5.83329M2.78223 5.83329L10 9.99996M10 18.3333C10.5052 18.3333 10.9665 18.0718 11.8893 17.5489L13.75 16.4943L15.5937 15.4104C16.508 14.8728 16.9652 14.6041 17.2178 14.1666C17.4704 13.7292 17.4746 13.199 17.483 12.1385L17.5 9.99996L17.483 7.86146C17.4746 6.80097 17.4704 6.27072 17.2178 5.83329M10 18.3333V9.99996M17.2178 5.83329L10 9.99996" stroke="#6B7280" stroke-width="1.6" />
                                                </g>
                                            </svg>
                                        </div>
                                        <h2 className="text-gray-500 text-sm font-medium">Scraps</h2>
                                    </div>
                                </div>
                            </NavLink>
                        </li>
                    </ul>
                </div>

                {/* Settings Section */}
                <div className="w-full flex flex-col mt-auto">
                    <div className="h-8 px-3 inline-flex items-center">
                        <h6 className="text-gray-500 text-xs font-semibold">SETTINGS</h6>
                    </div>
                    <ul className="flex-col gap-1 flex">
                        <li>
                            <div
                                className="p-3 rounded-lg flex items-center hover:bg-green-100 duration-300 cursor-pointer"
                                onClick={handleLogout}
                            >
                                <div className="h-5 flex gap-3">
                                    <div className="relative">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <g id="Logout">
                                                <path d="M9.16667 17.5L5.83333 17.5V17.5C3.98765 17.5 2.5 16.0123 2.5 14.1667V5.83333C2.5 3.98765 3.98765 2.5 5.83333 2.5V2.5L9.16667 2.5M8.22814 10L17.117 10M14.3393 6.66667L17.0833 9.41074C17.3611 9.68852 17.5 9.82741 17.5 10C17.5 10.1726 17.3611 10.3115 17.0833 10.5893L14.3393 13.3333" stroke="#6B7280" strokeWidth="1.6" />
                                            </g>
                                        </svg>
                                    </div>
                                    <h2 className="text-gray-500 text-sm font-medium">Logout</h2>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
