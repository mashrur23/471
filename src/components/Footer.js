import React from 'react';

const Footer = () => {
  return (
    <footer aria-label="Site Footer" className="bg-gray-100 dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-6 py-12">
        <div className="text-center">
          <strong className="block text-2xl font-semibold text-gray-800 dark:text-white sm:text-3xl">
            Want the latest blockbuster news in your inbox?
          </strong>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Sign up for updates and exclusive content.
          </p>

          <form className="mt-6 max-w-lg mx-auto">
            <div className="relative">
              <label className="sr-only" htmlFor="email">Email</label>
              <input
                className="w-full rounded-full border border-gray-300 bg-white p-4 pr-32 text-sm focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary dark:bg-gray-800 dark:text-white dark:border-gray-700"
                id="email"
                type="email"
                placeholder="example@company.com"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-secondary px-5 py-3 text-sm font-medium text-white transition hover:bg-secondary-light dark:bg-secondary dark:hover:bg-opacity-70"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <h3 className="font-bold text-gray-800 dark:text-black">Services</h3>
            <ul className="mt-4 space-y-2 text-gray-600 text-black">
              <li><a href="/" className="hover:text-secondary text-black">Rock and Yoga</a></li>
              <li><a href="/" className="hover:text-secondary text-black">Healthy Diet</a></li>
              <li><a href="/" className="hover:text-secondary text-black">Fit to Health</a></li>
              <li><a href="/" className="hover:text-secondary text-black">Exercise</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 dark:text-black">About</h3>
            <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
              <li><a href="/" className="hover:text-secondary text-black">About Us</a></li>
              <li><a href="/" className="hover:text-secondary text-black">Careers</a></li>
              <li><a href="/" className="hover:text-secondary text-black">History</a></li>
              <li><a href="/" className="hover:text-secondary text-black">Our Team</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 dark:text-white">Support</h3>
            <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
              <li><a href="/" className="hover:text-secondary text-black">FAQs</a></li>
              <li><a href="/" className="hover:text-secondary text-black">Contact</a></li>
              <li><a href="/" className="hover:text-secondary text-black">Live Chat</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex justify-center space-x-6">
          <a href="/" className="text-gray-500 hover:text-secondary dark:hover:text-secondary-light">
            <span className="sr-only">Facebook</span>
            <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a href="/" className="text-gray-500 hover:text-secondary dark:hover:text-secondary-light">
            <span className="sr-only">Instagram</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 5.915a6.085 6.085 0 100 12.17 6.085 6.085 0 000-12.17zm0 1.803a4.282 4.282 0 110 8.565 4.282 4.282 0 010-8.565zm6.406-1.196a1.397 1.397 0 11-2.794 0 1.397 1.397 0 012.794 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a href="/" className="text-gray-500 hover:text-secondary dark:hover:text-secondary-light">
            <span className="sr-only">Twitter</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M8.29 20.251c7.547 0 11.675-6.155 11.675-11.5 0-.176 0-.349-.012-.523A8.18 8.18 0 0022 5.92a8.19 8.19 0 01-2.357.636 4.12 4.12 0 001.804-2.263 8.27 8.27 0 01-2.605.988A4.1 4.1 0 0016.616 4a4.112 4.112 0 00-4.106 4.106c0 .32.037.634.106.937A11.68 11.68 0 013 5.846a4.106 4.106 0 001.271 5.477 4.092 4.092 0 01-1.858-.513v.05a4.107 4.107 0 003.292 4.023 4.1 4.1 0 01-1.852.07 4.109 4.109 0 003.834 2.85A8.236 8.236 0 012 18.407a11.616 11.616 0 006.29 1.84"
              />
            </svg>
          </a>
        </div>

        <p className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
          &copy; 2024. Company Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};




export default Footer;