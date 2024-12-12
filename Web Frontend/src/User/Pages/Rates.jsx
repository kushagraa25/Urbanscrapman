import React, { useState, useEffect } from 'react'
import axios from 'axios';
import URL from '../../Url';
const Rates = () => {
    const [data, setData] = useState([]);
    const [error , setError] = useState(false)
    useEffect(() => {
        const fetchdata = async () => {
            try {
                const res = await axios.get(`${URL}/api/v1/urbanscrapman/scrab/getrates`);
                setData(res.data);
            } catch (e) {
                setError(true);
                console.log(e);
            }
        };
        fetchdata();
    }, []);
    return (
        <div className='w-full h-fit  py-10 pt-36  p-10'>
            <h1 className="w-full text-center md:text-left sm:px-16 font-palyfair text-2xl md:text-3xl lg:text-3xl py-3 font-bold text-green-600" data-aos="fade-up">Scrap Rates</h1>
            <div className='w-full h-fit  py-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5'>
                {
                    data.map((item, index) => <Card key={index} name={item.name} price={item.price} unit={item.unit} icon={item.icon} />)
                }
            </div>
        </div>
    )
}


const Card = ({ icon, name, price, unit }) => {
    const [display, setdisplat] = useState(false)
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out p-4  mx-auto cursor-pointer w-48">
            <div className="flex items-center justify-center">
                <img
                    src={icon}
                    className="w-10 h-10 object-contain"
                />
            </div>
            <div className="text-center mt-4">
                <p className="text-xl font-semibold text-gray-700">RS {price}/{unit}</p>
            </div>
            <div className="text-center mt-2 ">
                <p className="text-lg font-medium text-gray-900">{name}</p>
            </div>
        </div>
    )
}
export default Rates
