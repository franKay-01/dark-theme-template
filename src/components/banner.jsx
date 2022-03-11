import Banner1 from '../assets/banner1.png'
import '../App.css'
import { ChevronRightIcon } from '@heroicons/react/solid'

export default function Banner() {
  return (
    <div>
      <div class="grid justify-center grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex justify-center items-center">
          <div className="banner-header w-full">
            <p>Music for NFT creators.</p>
            <p className="banner-para">Digital Music for fans.</p>
            <p className="banner-para-2">Music NFTs will continue to revolutionize the way that artists and fans create community together as we enter the upcoming year — undoubtedly changing the trajectory of countless budding music careers. </p>
            <a
              href="#"
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
    </div>
  )
}