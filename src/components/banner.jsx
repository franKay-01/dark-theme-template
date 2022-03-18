import '../App.css'
import Banner1 from '../assets/banner1.png'
import Cp1 from '../assets/cp1.png'
import Cp2 from '../assets/cp2.png'
import Cp3 from '../assets/cp3.png'
import Cp4 from '../assets/cp4.png'
import Cp5 from '../assets/cp5.png'
import Cp6 from '../assets/cp6.png'
import { ChevronRightIcon } from '@heroicons/react/solid'

export default function Banner() {
  return (
    <div>
      <div className="grid justify-center grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex justify-center items-center">
          <div className="banner-header w-full">
            <p>Music for NFT creators.</p>
            <p className="banner-para">Digital Music for fans.</p>
            <p className="banner-para-2">Music NFTs will continue to revolutionize the way that artists and fans create community together as we enter the upcoming year — undoubtedly changing the trajectory of countless budding music careers. </p>
            <a
              href="/explore"
              type="button"
              className="anchor-button group bg-transparent border-white border-2 my-6 relative w-full md:w-1/2 text-sm md:text-3xl items-center flex justify-center py-2 px-4 border border-transparent font-medium rounded-md text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Discover More
              <ChevronRightIcon className="h-10 w-10 text-slate-50 group-hover:text-slate-50" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img src={Banner1} />
        </div>
      </div>
      <div className="bg-slate-50 h-96">
        <div className="grid grid-cols-3 gap-4 p-5">
          <div className=" w-40 text-green-500 text-lg font-bold content-center p-5 rounded-lg mx-auto pb-10 flex justify-center">
            <img className="" src={Cp1} alt="CP1" />
          </div>
          <div className="text-green-500 w-40 text-lg font-bold content-center p-5 rounded-lg mx-auto pb-10 flex justify-center">
            <img src={Cp2} alt="CP2" />
          </div>
          <div className="text-green-500 w-40 text-lg font-bold content-center p-5 rounded-lg mx-auto pb-10 flex justify-center">
            <img src={Cp3} alt="CP3" />
          </div>
          <div className="text-green-500 w-40 text-lg font-bold content-center p-5 rounded-lg mx-auto pb-10 flex justify-center">
            <img src={Cp4} alt="CP4" />
          </div>
          <div className="text-green-500 w-40 text-lg font-bold content-center p-5 rounded-lg mx-auto pb-10 flex justify-center">
            <img src={Cp5} alt="CP5" />
          </div>
          <div className="text-green-500 w-40 text-lg font-bold content-center p-5 rounded-lg mx-auto pb-10 flex justify-center">
            <img src={Cp6} alt="CP6" />
          </div>
        </div>

      </div>
      <div class="p-4 w-full text-center bg-white border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Browse the Mech from anywhere</h5>
        <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Stay up to date and move work forward with SiteName on iOS & Android. Download the app today.</p>
        <div class="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
          <a href="#" class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
            <svg class="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
            <div class="text-left">
              <div class="mb-1 text-xs">Download on the</div>
              <div class="-mt-1 font-sans text-sm font-semibold">Mac App Store</div>
            </div>
          </a>
          <a href="#" class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
            <svg class="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path></svg>
            <div class="text-left">
              <div class="mb-1 text-xs">Get in on</div>
              <div class="-mt-1 font-sans text-sm font-semibold">Google Play</div>
            </div>
          </a>
        </div>
      </div>

    </div>
  )
}