import React, { useEffect, useState } from 'react';
//import useAxiosFetch from '../../hooks/useAxiosFetch';
import { Transition } from '@headlessui/react';
//import { useUser } from '../../hooks/useUser';
import { toast } from 'react-toastify';
//import useAxiosSecure from '../../hooks/useAxiosSecure';
import { Link } from 'react-router-dom';
const PopularCourses = () => {
  return (
    <div className="popular-course">
        <div>

<div className="mt-20 pt-3">
    <h1 className="text-4xl font-bold text-center text-dark-primary">Classes</h1>
</div>

<div className="my-16 w-[90%] gap-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto">
    <div className="relative hover:-translate-y-2 duration-150 hover:ring-[2px] hover:ring-secondary w-64 h-[350px] mx-auto bg-red-300 dark:bg-slate-600 rounded-lg shadow-lg overflow-hidden cursor-pointer">
        <div className="relative h-48">
            <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300"></div>
            <img src="" alt="Course Image" className="object-cover w-full h-full" />
            <div className="absolute inset-0 flex items-center justify-center">
                <button className="px-4 py-2 text-white disabled:bg-red-300 bg-secondary duration-300 rounded hover:bg-red-700">
                    Select
                </button>
            </div>
        </div>
        <div className="px-6 py-2">
            <h3 className="text-[16px] font-bold">Class Name</h3>
            <p className="text-gray-500 text-xs">Instructor: Instructor Name</p>
            <div className="flex items-center justify-between mt-4">
                <span className="text-gray-600 text-xs">Available Seats: <span className='text-secondary'>Number</span></span>
                <span className="text-green-500 font-semibold">$Price</span>
            </div>
            <button className="px-4 py-2 mt-4 w-full mx-auto text-white disabled:bg-red-300 bg-secondary duration-300 rounded hover:bg-red-700">
                View
            </button>
        </div>
    </div>
</div>
</div>

    </div>
  );
};

export default PopularCourses;