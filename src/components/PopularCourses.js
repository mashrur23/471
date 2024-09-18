import React from 'react';

const PopularCourses = () => {
  return (
    <div className="popular-course">
      <div>
        <div className="mt-20 pt-3">
          <h1 className="text-4xl font-bold text-center text-dark-primary">Popular Classes</h1>
        </div>

        <div className="my-16 w-[90%] gap-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto">
          
          <div className="relative hover:-translate-y-2 duration-150 hover:ring-[2px] hover:ring-secondary w-64 h-[350px] mx-auto bg-red-300 dark:bg-slate-600 rounded-lg shadow-lg overflow-hidden cursor-pointer">
            <div
              className="relative h-48"
              style={{ backgroundImage: 'url(https://images.pexels.com/photos/917732/pexels-photo-917732.jpeg', backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="px-4 py-2 text-white disabled:bg-red-300 bg-secondary duration-300 rounded hover:bg-red-700">
                  Select
                </button>
              </div>
            </div>
            <div className="px-6 py-2">
              <h3 className="text-[16px] font-bold">Yoga with ALEX - 30 Days of Yoga</h3>
              <p className="text-gray-500 text-xs">Instructor: Alex</p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-gray-600 text-xs">
                  Available Seats: <span className="text-secondary">24</span>
                </span>
                <span className="text-green-500 font-semibold">59</span>
              </div>
              <button className="px-4 py-2 mt-4 w-full mx-auto text-white disabled:bg-red-300 bg-secondary duration-300 rounded hover:bg-red-700">
                View
              </button>
            </div>
          </div>

          <div className="relative hover:-translate-y-2 duration-150 hover:ring-[2px] hover:ring-secondary w-64 h-[350px] mx-auto bg-red-300 dark:bg-slate-600 rounded-lg shadow-lg overflow-hidden cursor-pointer">
            <div
              className="relative h-48"
              style={{ backgroundImage: 'url(https://images.pexels.com/photos/868757/pexels-photo-868757.jpeg', backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="px-4 py-2 text-white disabled:bg-red-300 bg-secondary duration-300 rounded hover:bg-red-700">
                  Select
                </button>
              </div>
            </div>
            <div className="px-6 py-2">
              <h3 className="text-[16px] font-bold">Ashtanga Yoga: The Primary Series</h3>
              <p className="text-gray-500 text-xs">Instructor: John Deo</p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-gray-600 text-xs">
                  Available Seats: <span className="text-secondary">30</span>
                </span>
                <span className="text-green-500 font-semibold">$79</span>
              </div>
              <button className="px-4 py-2 mt-4 w-full mx-auto text-white disabled:bg-red-300 bg-secondary duration-300 rounded hover:bg-red-700">
                View
              </button>
            </div>
          </div>

          <div className="relative hover:-translate-y-2 duration-150 hover:ring-[2px] hover:ring-secondary w-64 h-[350px] mx-auto bg-red-300 dark:bg-slate-600 rounded-lg shadow-lg overflow-hidden cursor-pointer">
            <div
              className="relative h-48"
              style={{ backgroundImage: 'url(https://images.pexels.com/photos/4056409/pexels-photo-4056409.jpeg', backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="px-4 py-2 text-white disabled:bg-red-300 bg-secondary duration-300 rounded hover:bg-red-700">
                  Select
                </button>
              </div>
            </div>
            <div className="px-6 py-2">
              <h3 className="text-[16px] font-bold">YOGA International - "Beginner's Yoga Course"</h3>
              <p className="text-gray-500 text-xs">Instructor: John Deo</p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-gray-600 text-xs">
                  Available Seats: <span className="text-secondary">30</span>
                </span>
                <span className="text-green-500 font-semibold">$40</span>
              </div>
              <button className="px-4 py-2 mt-4 w-full mx-auto text-white disabled:bg-red-300 bg-secondary duration-300 rounded hover:bg-red-700">
                View
              </button>
            </div>
          </div>

          <div className="relative hover:-translate-y-2 duration-150 hover:ring-[2px] hover:ring-secondary w-64 h-[350px] mx-auto bg-red-300 dark:bg-slate-600 rounded-lg shadow-lg overflow-hidden cursor-pointer">
            <div
              className="relative h-48"
              style={{ backgroundImage: 'url(https://images.pexels.com/photos/917732/pexels-photo-917732.jpeg', backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="px-4 py-2 text-white disabled:bg-red-300 bg-secondary duration-300 rounded hover:bg-red-700">
                  Select
                </button>
              </div>
            </div>
            <div className="px-6 py-2">
              <h3 className="text-[16px] font-bold">CorePower Yoga - "Yoga Sculpt"</h3>
              <p className="text-gray-500 text-xs">Instructor: Charles</p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-gray-600 text-xs">
                  Available Seats: <span className="text-secondary">24</span>
                </span>
                <span className="text-green-500 font-semibold">59</span>
              </div>
              <button className="px-4 py-2 mt-4 w-full mx-auto text-white disabled:bg-red-300 bg-secondary duration-300 rounded hover:bg-red-700">
                View
              </button>
            </div>
          </div>

          <div className="relative hover:-translate-y-2 duration-150 hover:ring-[2px] hover:ring-secondary w-64 h-[350px] mx-auto bg-red-300 dark:bg-slate-600 rounded-lg shadow-lg overflow-hidden cursor-pointer">
            <div
              className="relative h-48"
              style={{ backgroundImage: 'url(https://images.pexels.com/photos/868757/pexels-photo-868757.jpeg', backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="px-4 py-2 text-white disabled:bg-red-300 bg-secondary duration-300 rounded hover:bg-red-700">
                  Select
                </button>
              </div>
            </div>
            <div className="px-6 py-2">
              <h3 className="text-[16px] font-bold">"The Ultimate Yogi" by Travis Eliot</h3>
              <p className="text-gray-500 text-xs">Instructor: Travis Eliot</p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-gray-600 text-xs">
                  Available Seats: <span className="text-secondary">30</span>
                </span>
                <span className="text-green-500 font-semibold">$79</span>
              </div>
              <button className="px-4 py-2 mt-4 w-full mx-auto text-white disabled:bg-red-300 bg-secondary duration-300 rounded hover:bg-red-700">
                View
              </button>
            </div>
          </div>

          <div className="relative hover:-translate-y-2 duration-150 hover:ring-[2px] hover:ring-secondary w-64 h-[350px] mx-auto bg-red-300 dark:bg-slate-600 rounded-lg shadow-lg overflow-hidden cursor-pointer">
            <div
              className="relative h-48"
              style={{ backgroundImage: 'url(https://images.pexels.com/photos/4056409/pexels-photo-4056409.jpeg', backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="px-4 py-2 text-white disabled:bg-red-300 bg-secondary duration-300 rounded hover:bg-red-700">
                  Select
                </button>
              </div>
            </div>
            <div className="px-6 py-2">
              <h3 className="text-[16px] font-bold">Gaia - "Yin Yoga for Beginners"</h3>
              <p className="text-gray-500 text-xs">Instructor: Lee</p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-gray-600 text-xs">
                  Available Seats: <span className="text-secondary">30</span>
                </span>
                <span className="text-green-500 font-semibold">$79</span>
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
