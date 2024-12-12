import React from 'react'
import logo from '../../../assets/logo.png'
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'
import {  FaFacebook , FaInstagram , FaLinkedin , FaYoutube  } from "react-icons/fa";
import { FaSquareXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='w-full p-5 bg-[#E3F2F5]'>
            <footer class="">
                <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
                    <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3 gap-y-8 md:gap-8 py-10 max-w-sm mx-auto sm:max-w-3xl lg:max-w-full">
                        <div class="col-span-full mb-10 lg:col-span-2 lg:mb-0">
                            <img src={logo} alt="" className='w-64' />
                        </div>

                        <div class="lg:mx-auto text-left ">
                            <h4 class="text-lg text-gray-900 font-medium mb-7">Pages</h4>
                            <ul class="text-sm  transition-all duration-500">
                                <li class="mb-6"><Link to={'/'} class="text-gray-600 hover:text-gray-900">Home</Link></li>
                                <li class="mb-6"><Link to={'/login'} class="text-gray-600 hover:text-gray-900">Login</Link></li>
                                {/* <li class="mb-6"><Link to={'/singup'} class="text-gray-600 hover:text-gray-900">Singup</Link></li> */}
                            </ul>
                        </div>

                        <div class="lg:mx-auto text-left ">
                            <h4 class="text-lg text-gray-900 font-medium mb-7">Links</h4>
                            <ul class="text-sm  transition-all duration-500">
                                <li class="mb-6"><Link to={'/faq'} class="text-gray-600 hover:text-gray-900">FAQ's</Link></li>
                                <li class="mb-6"> <Link to={'/rates'} class=" text-gray-600 hover:text-gray-900">Rates</Link> </li>
                                <li><HashLink to={'/#contact'} class=" text-gray-600 hover:text-gray-900">Contact</HashLink></li>
                            </ul>
                        </div>

                        <div class="lg:mx-auto text-left ">
                            <h4 class="text-lg text-gray-900 font-medium mb-7">Support</h4>
                            <ul class="text-sm  transition-all duration-500">
                                <li class="mb-6"><Link to={'/'} class="text-gray-600 hover:text-gray-900">Customer Support</Link></li>
                                <li class="mb-6"><Link to={'/tandc'} class="text-gray-600 hover:text-gray-900">Terms & Conditions</Link></li>
                                <li class="mb-6"><Link to={'/privacy'} class="text-gray-600 hover:text-gray-900">Privacy Policy</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className='border-t-2 max-w-7xl mx-auto border-gray-200 py-5 flex justify-between items-center'>
                        <p className=' text-gray-500 text-sm '>@Feuberro Waste Management  Private Limited, All rights reserved.</p>
                        <ul className=' text-gray-500  flex gap-3 text-2xl space-x-2'>
                            <li className=' cursor-pointer hover:text-gray-700'><a href="https://www.facebook.com/urbanscrapman" target='blank' > <FaFacebook /></a></li>
                            <li className=' cursor-pointer hover:text-gray-700'><a href="https://x.com/urbanscrapman" target='blank'> <FaSquareXTwitter /></a></li>
                            <li className=' cursor-pointer hover:text-gray-700'><a href="https://www.linkedin.com/showcase/urbanscrapman" target='blank'> <FaLinkedin /> </a></li>
                            <li className=' cursor-pointer hover:text-gray-700'><a href="https://www.instagram.com/urbanscrapman/" target='blank'> <FaInstagram /></a></li>
                            <li className=' cursor-pointer hover:text-gray-700'><a href="https://www.youtube.com/@UrbanScrapman" target='blank'> <FaYoutube /></a></li>
                        </ul>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer
