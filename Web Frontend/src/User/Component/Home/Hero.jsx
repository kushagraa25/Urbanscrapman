import React from 'react';
import video from '../../../assets/Video.mp4';
import { Helmet } from 'react-helmet';

const Hero = () => {
    return (
        <>
            <Helmet>
                <meta name="description" content="Urban Scrapman is your trusted platform to sell scrap online easily and efficiently. Get the best prices for your scrap materials!" />
                <meta name="keywords" content="sell scrap online, scrap collection, online scrap buyer, Urban Scrapman, eco-friendly recycling" />
                <meta name="author" content="Urban Scrapman" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta charSet="UTF-8" />

                <link rel="canonical" href="https://www.urbanscrapman.com" />
            </Helmet>
            <section
                className="relative  h-[100vh]  bg-center bg-cover flex items-center justify-center"
            >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
                    <div
                        className="border border-green-600 p-1 w-60 mx-auto rounded-full flex items-center justify-between mb-4"
                    >
                        <span className="font-inter text-xs font-medium text-gray-900 ml-3">
                            Convert Your Trash To Money.
                        </span>
                        <a
                            href="javascript:;"
                            className="w-8 h-8 rounded-full flex justify-center items-center bg-green-600"
                        >
                            <svg
                                width="17"
                                height="16"
                                viewBox="0 0 17 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M2.83398 8.00019L12.9081 8.00019M9.75991 11.778L13.0925 8.44541C13.3023 8.23553 13.4073 8.13059 13.4073 8.00019C13.4073 7.86979 13.3023 7.76485 13.0925 7.55497L9.75991 4.22241"
                                    stroke="white"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </a>
                    </div>
                    <h1
                        className="max-w-3xl mx-auto text-center font-manrope font-bold text-4xl text-gray-900 mb-5 md:text-5xl"
                    >
                        Turn waste into value with <br />
                        <p className="text-green-600 mt-1">&nbsp;Urban Scrapman</p>
                    </h1>
                    <p
                        className="max-w-sm mx-auto text-center text-base font-normal leading-7 text-gray-500 mb-28"
                    >
                        Get Best Price For Your Scrab
                    </p>
                </div>
                <div className=''>
                    <video
                        src={video}
                        autoPlay
                        loop
                        muted
                        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
                    ></video>
                </div>
            </section>
        </>
    );
};

export default Hero;
