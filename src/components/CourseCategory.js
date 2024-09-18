import React from 'react';

const CourseCategory = () => {
  return (
    <div className="popular-course">
        <div>
            <div className="mt-20 pt-3">
                <h1 className="text-4xl font-bold text-center text-dark-primary">Course Category</h1>
            </div>


            <div className="my-16 w-[90%] gap-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto">

                <div className="course-list-wrap relative hover:-translate-y-2 duration-150 hover:ring-[2px] hover:ring-secondary w-64 h-[350px] mx-auto bg-red-300 dark:bg-slate-600 rounded-lg shadow-lg overflow-hidden cursor-pointer">
                    <div className="px-6 py-2 info-cat">
                        <span className="svg-icons">
                            <svg
                                fill="#fff"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32">
                                <g strokeWidth="0"></g>
                                <g strokeLinecap="round" strokeLinejoin="round"></g>
                                <g>
                                <path d="M25.523,31.36c-0.018,0-0.035,0-0.053,0H1v-0.72h3.853c-0.191-0.226-0.331-0.494-0.407-0.79 c-0.133-0.517-0.059-1.052,0.211-1.508l7.483-12.48V10.36H4.5c-1.025,0-1.86-0.834-1.86-1.86S3.475,6.64,4.5,6.64h8.909 C12.917,6.045,12.64,5.293,12.64,4.5c0-1.853,1.507-3.36,3.36-3.36s3.36,1.507,3.36,3.36c0,0.793-0.278,1.545-0.77,2.14h8.91 c1.025,0,1.86,0.834,1.86,1.86s-0.835,1.86-1.86,1.86h-7.641l0.002,5.519l7.373,12.479c0.27,0.457,0.345,0.993,0.212,1.509 c-0.074,0.289-0.208,0.552-0.392,0.773H31v0.721h-5.424C25.559,31.36,25.541,31.36,25.523,31.36z M25.48,30.64h0.086 c0.205-0.007,0.411-0.063,0.6-0.175c0.291-0.171,0.498-0.447,0.583-0.777c0.085-0.331,0.037-0.673-0.134-0.964l-7.424-12.563 c-0.033-0.055-0.051-0.119-0.051-0.183L19.139,10c0-0.095,0.038-0.187,0.105-0.254c0.067-0.068,0.159-0.105,0.255-0.105H27.5 c0.629,0,1.14-0.512,1.14-1.14s-0.511-1.14-1.14-1.14h-9.842c-0.159,0-0.299-0.104-0.345-0.256s0.014-0.316,0.146-0.404 c0.739-0.492,1.181-1.314,1.181-2.2c0-1.456-1.184-2.64-2.64-2.64s-2.64,1.185-2.64,2.64c0,0.886,0.442,1.708,1.181,2.2 c0.132,0.088,0.191,0.252,0.146,0.404S14.5,7.36,14.342,7.36H4.5c-0.628,0-1.14,0.512-1.14,1.14S3.872,9.64,4.5,9.64h8 c0.199,0,0.36,0.161,0.36,0.36v5.961c0,0.065-0.018,0.129-0.051,0.185L5.276,28.71c-0.17,0.288-0.218,0.63-0.133,0.96 s0.292,0.606,0.583,0.778c0.291,0.17,0.632,0.218,0.963,0.134c0.33-0.085,0.606-0.292,0.778-0.583l6.263-10.052 c0.467-0.644,1.052-1.308,2.269-1.308c1.169,0,1.771,0.618,2.246,1.286l6.177,10.085C24.653,30.402,25.06,30.626,25.48,30.64z M7.893,30.64h16.093c-0.066-0.079-0.127-0.165-0.181-0.258l-6.16-10.059c-0.431-0.603-0.844-0.963-1.646-0.963 c-0.8,0-1.205,0.348-1.672,0.989L8.083,30.372C8.027,30.467,7.963,30.557,7.893,30.64z"></path>
                                <rect style={{ fill: "none" }} width="32" height="32"></rect>
                                </g>
                            </svg>
                        </span>
                        <h3 className="text-[16px] font-bold">
                            <a href="">Hatha Yoga</a>
                        </h3>
                    </div>
                </div>

                <div className="course-list-wrap relative hover:-translate-y-2 duration-150 hover:ring-[2px] hover:ring-secondary w-64 h-[350px] mx-auto bg-red-300 dark:bg-slate-600 rounded-lg shadow-lg overflow-hidden cursor-pointer">
                    <div className="px-6 py-2 info-cat">
                        <span className="svg-icons">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                            <path
                                d="M14.5714 15.0036L15.4286 16.8486C15.4286 16.8486 19.2857 17.6678 19.2857 19.6162C19.2857 21 17.5714 21 17.5714 21H13L10.75 19.75"
                                stroke="#fff"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <path
                                d="M9.42864 15.0036L8.5715 16.8486C8.5715 16.8486 4.71436 17.6678 4.71436 19.6162C4.71436 21 6.42864 21 6.42864 21H8.50007L10.7501 19.75L13.5001 18"
                                stroke="#fff"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <path
                                d="M3 15.9261C3 15.9261 5.14286 15.4649 6.42857 15.0036C7.71429 8.54595 11.5714 9.00721 12 9.00721C12.4286 9.00721 16.2857 8.54595 17.5714 15.0036C18.8571 15.4649 21 15.9261 21 15.9261"
                                stroke="#fff"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <path
                                d="M12 7C13.1046 7 14 6.10457 14 5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5C10 6.10457 10.8954 7 12 7Z"
                                stroke="#fff"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            </g>
                        </svg>

                        </span>
                        <h3 className="text-[16px] font-bold">
                            <a href="">Ashtanga Yoga</a>
                        </h3>
                    </div>
                </div>

                <div className="course-list-wrap relative hover:-translate-y-2 duration-150 hover:ring-[2px] hover:ring-secondary w-64 h-[350px] mx-auto bg-red-300 dark:bg-slate-600 rounded-lg shadow-lg overflow-hidden cursor-pointer">
                    <div className="px-6 py-2 info-cat">
                        <span className="svg-icons">
                        <svg
                            fill="currentColor"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 32 32"
                            xmlSpace="preserve" >
                            <g strokeWidth="0"></g>
                            <g strokeLinecap="round" strokeLinejoin="round"></g>
                            <g>
                            <path d="M19.697,30.64c0.411-0.425,0.665-1.003,0.665-1.64v-0.001v-14.64h2.521c0.021,0,0.04-0.001,0.059-0.005 c0.881-0.085,1.509-1.299,1.509-2.127c0-0.413-0.157-0.806-0.431-1.094c-0.011-0.013-1.138-1.307-2.204-2.414 c-0.931-0.992-2.219-1.747-3.624-2.139c0.752-0.629,1.207-1.569,1.207-2.578c0-1.853-1.524-3.361-3.398-3.361 c-1.873,0-3.396,1.508-3.396,3.361c0,1.009,0.454,1.949,1.206,2.578c-1.387,0.387-2.649,1.127-3.621,2.135 c-1.071,1.111-2.197,2.405-2.198,2.407c-0.284,0.3-0.44,0.692-0.44,1.105c0,0.828,0.627,2.042,1.508,2.127 c0.019,0.003,0.039,0.005,0.059,0.005h2.523v1.484l-3.528,3.319c-0.708,0.827-0.609,2.076,0.207,2.773l4.26,3.951 c0.755,0.646,2.25,0.621,3.058,0.016v3.097L15.642,29c0,0.637,0.253,1.215,0.665,1.64H1v0.721h30V30.64H19.697z M9.159,13.639 c-0.412,0-0.888-0.855-0.888-1.413c0-0.228,0.086-0.445,0.253-0.622c0.011-0.013,1.126-1.294,2.184-2.391 c1.057-1.097,2.497-1.847,4.058-2.113c0.062-0.004,0.123-0.023,0.176-0.059c0.102-0.066,0.164-0.181,0.164-0.303 c0-0.106-0.046-0.206-0.127-0.274c-0.037-0.032-0.08-0.055-0.125-0.069c-0.931-0.433-1.53-1.368-1.53-2.396 c0-1.456,1.2-2.641,2.676-2.641c1.477,0,2.678,1.185,2.678,2.641c0,1.03-0.602,1.967-1.537,2.398 c-0.043,0.015-0.083,0.037-0.118,0.067c-0.081,0.068-0.127,0.17-0.127,0.276c0,0.122,0.062,0.235,0.164,0.302 c0.056,0.036,0.118,0.055,0.182,0.058c1.57,0.269,3.045,1.036,4.054,2.112c1.057,1.097,2.171,2.377,2.192,2.402 c0.157,0.166,0.243,0.382,0.243,0.61c0,0.558-0.476,1.413-0.887,1.413h-6.482V10.36c0.289,0.104,0.603,0.3,0.892,0.484 c0.429,0.274,0.799,0.511,1.162,0.513h1.521c0.199,0,0.36-0.161,0.36-0.36s-0.162-0.36-0.36-0.36h-1.52 c-0.153-0.001-0.499-0.222-0.776-0.399c-0.495-0.316-1.055-0.674-1.648-0.674c-0.577,0-1.137,0.358-1.631,0.674 c-0.278,0.177-0.624,0.398-0.774,0.399h-1.521c-0.199,0-0.36,0.161-0.36,0.36s0.161,0.36,0.36,0.36h1.523 c0.362-0.002,0.732-0.239,1.16-0.513c0.287-0.183,0.599-0.378,0.892-0.482v3.275H9.159V13.639z M15.639,22.852l-2.256-2.238 c0.444-0.423,1.318-1.255,1.697-1.618l0.559,0.241V22.852z M19.642,28.999L19.642,28.999c0,0.905-0.735,1.641-1.64,1.641 s-1.64-0.735-1.64-1.64l-0.003-0.001v-4.474c0.007-0.096,0.007-0.191,0-0.287v-5.239c0-0.144-0.085-0.273-0.218-0.331l-0.997-0.429 c-0.135-0.058-0.293-0.027-0.397,0.077c-0.105,0.106-2.129,2.03-2.129,2.03c-0.07,0.067-0.111,0.159-0.112,0.257 s0.037,0.191,0.106,0.26l2.591,2.569c0.263,0.226,0.41,0.537,0.435,0.857v0.194c-0.02,0.256-0.118,0.508-0.296,0.717 c-0.437,0.509-1.765,0.589-2.283,0.148l-4.26-3.951c-0.525-0.45-0.588-1.243-0.166-1.74l3.615-3.397 c0.072-0.068,0.113-0.163,0.113-0.262v-1.64h7.28L19.642,28.999L19.642,28.999z"></path>
                            <rect style={{ fill: 'none' }} width="32" height="32"></rect>
                            </g>
                        </svg>
                        </span>
                        <h3 className="text-[16px] font-bold">
                            <a href="">Kundalini Yoga</a>
                        </h3>
                    </div>
                </div>

                <div className="course-list-wrap relative hover:-translate-y-2 duration-150 hover:ring-[2px] hover:ring-secondary w-64 h-[350px] mx-auto bg-red-300 dark:bg-slate-600 rounded-lg shadow-lg overflow-hidden cursor-pointer">
                    <div className="px-6 py-2 info-cat">
                        <span className="svg-icons">
                        <svg
                            fill="#fff"
                            height="200px"
                            width="200px"
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 512 512"
                            xmlSpace="preserve"
                        >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                            <g>
                                <g>
                                <circle cx="447.604" cy="254.592" r="46.304"></circle>
                                </g>
                            </g>
                            <g>
                                <g>
                                <path d="M364.956,0c-11.71,0-21.204,9.493-21.204,21.204v174.361c-0.971-0.002-78.387,0.15-138.405,0.265 c-22.583,0.043-43.319,12.53-53.95,32.455L21.284,472.154c-7.041,13.203-2.045,29.614,11.159,36.654 c13.209,7.042,29.616,2.04,36.655-11.16L177.12,295.069l76.239,199.501c5.345,13.986,21.012,20.975,34.98,15.637 c13.977-5.341,20.978-21.002,15.638-34.979l-61.729-161.331h101.506v176.899c0,11.711,9.494,21.204,21.204,21.204 c11.71,0,21.204-9.493,21.204-21.204V21.204C386.16,9.493,376.667,0,364.956,0z"></path>
                                </g>
                            </g>
                            </g>
                        </svg>
                        </span>
                        <h3 className="text-[16px] font-bold">
                            <a href="">Yin Yoga</a>
                        </h3>
                    </div>
                </div>

                <div className="course-list-wrap relative hover:-translate-y-2 duration-150 hover:ring-[2px] hover:ring-secondary w-64 h-[350px] mx-auto bg-red-300 dark:bg-slate-600 rounded-lg shadow-lg overflow-hidden cursor-pointer">
                    <div className="px-6 py-2 info-cat">
                        <span className="svg-icons">
                        <svg
                            fill="#fff"
                            height="200px"
                            width="200px"
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 511.999 511.999"
                            xmlSpace="preserve"
                        >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                            <g>
                                <g>
                                <circle cx="255.844" cy="43.691" r="43.691"></circle>
                                </g>
                            </g>
                            <g>
                                <g>
                                <path d="M503.058,75.973c-4.067-9.944-15.427-14.709-25.371-10.641l-84.671,34.634l-81.573,3.613H199.786l-80.803-3.613 L34.312,65.331c-9.943-4.066-21.303,0.697-25.371,10.641c-4.067,9.944,0.697,21.303,10.641,25.371l87.746,35.892 c2.035,0.833,4.197,1.313,6.392,1.424l86.066,4.31V260.79l-65.483,70.411c-12.528,13.469-6.909,35.414,10.525,41.224 c121.223,40.4,112.766,37.816,116.481,38.275v76.003c0,13.97,11.325,25.295,25.295,25.295c13.97,0,25.066-11.325,25.066-25.295 c0-5.939,0-343.696,0-343.696l86.608-4.348c2.195-0.11,4.357-0.591,6.392-1.424l87.746-35.892 C502.361,97.275,507.125,85.917,503.058,75.973z M261.31,357.919l-63.183-21.057c49.665-53.403,46.357-49.609,48.145-52.349 c1.881,0,13.155,0,15.039,0V357.919z"></path>
                                </g>
                            </g>
                            </g>
                        </svg>
                        </span>
                        <h3 className="text-[16px] font-bold">
                            <a href="">Prenatal Yoga</a>
                        </h3>
                    </div>
                </div>

                <div className="course-list-wrap relative hover:-translate-y-2 duration-150 hover:ring-[2px] hover:ring-secondary w-64 h-[350px] mx-auto bg-red-300 dark:bg-slate-600 rounded-lg shadow-lg overflow-hidden cursor-pointer">
                    <div className="px-6 py-2 info-cat">
                        <span className="svg-icons">
                        <svg
                            fill="#fff"
                            height="200px"
                            width="200px"
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 511.999 511.999"
                            xmlSpace="preserve"
                        >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                            <g>
                                <g>
                                <path d="M348.88,1.07c-9.071-3.318-19.118,1.344-22.436,10.416l-31.959,87.35c4.996-24.435-13.685-47.189-38.485-47.189 c-24.826,0-43.471,22.775-38.486,47.184l-31.957-87.346C182.237,2.414,172.191-2.25,163.119,1.07 c-9.072,3.32-13.736,13.365-10.416,22.437l53.198,145.133v320.616c0,12.561,10.28,22.743,22.841,22.743 s22.743-10.182,22.743-22.743V307.461h9.027v181.796c0,12.561,10.183,22.743,22.743,22.743c12.561,0,22.841-10.182,22.841-22.743 V168.639l53.198-145.132C362.617,14.435,357.953,4.39,348.88,1.07z M277.676,144.779h-43.351l-12.828-35.061 c6.662,12.209,19.615,20.492,34.503,20.492c14.89,0,27.843-8.285,34.505-20.497L277.676,144.779z"></path>
                                </g>
                            </g>
                            </g>
                        </svg>
                        </span>
                        <h3 className="text-[16px] font-bold">
                            <a href="">Restorative Yoga</a>
                        </h3>
                    </div>
                </div>

                <div className="course-list-wrap relative hover:-translate-y-2 duration-150 hover:ring-[2px] hover:ring-secondary w-64 h-[350px] mx-auto bg-red-300 dark:bg-slate-600 rounded-lg shadow-lg overflow-hidden cursor-pointer">
                    <div className="px-6 py-2 info-cat">
                        <span className="svg-icons">
                        <svg
                            fill="#fff"
                            height="200px"
                            width="200px"
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 511.998 511.998"
                            xmlSpace="preserve"
                        >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                            <g>
                                <g>
                                <path d="M348.326,75.21L292.531,6.286c-5.084-6.281-13.719-7.97-20.674-4.549c-6.955-3.422-15.59-1.731-20.674,4.549 l-55.795,68.923c-3.693,4.561-4.767,10.705-2.843,16.248l30.407,87.627v113.669l-57.151,61.451 c-5.114,5.499-7.082,13.22-5.225,20.497c1.858,7.276,7.287,13.108,14.411,15.483c105.849,35.277,98.421,33.004,101.66,33.405 v66.332c0,12.193,9.884,22.076,22.076,22.076c12.193,0,22.076-9.884,22.076-22.076c0-294.794-0.4-122.087-0.4-309.798 l30.769-88.665C353.093,85.915,352.018,79.771,348.326,75.21z M276.648,377.525l-55.143-18.378 c43.381-46.646,40.469-43.314,42.019-45.688h13.125V377.525z M292.989,155.548h-42.261l-11.061-31.877 c6.761,10.657,18.656,17.736,32.211,17.736c13.498,0,25.35-7.021,32.126-17.603L292.989,155.548z M309.819,107.039 c0.121-1.238,0.186-2.492,0.186-3.762c0-21.058-17.071-38.13-38.13-38.13c-21.058,0-38.13,17.071-38.13,38.13 c0,1.319,0.067,2.623,0.198,3.907l-6.227-17.943l44.14-54.524l44.138,54.524L309.819,107.039z"></path>
                                </g>
                            </g>
                            </g>
                        </svg>
                        </span>
                        <h3 className="text-[16px] font-bold">
                            <a href="">Bikram Yoga</a>
                        </h3>
                    </div>
                </div>



            </div>

        </div>
    </div>
  );
};

export default CourseCategory;
