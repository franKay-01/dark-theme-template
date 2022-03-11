import Image1 from '../assets/image1.png'
import Image2 from '../assets/image2.png'
import Image3 from '../assets/image3.png'
import Image4 from '../assets/image4.png'
import Vector from '../assets/Vector.png'

import { ChevronRightIcon } from '@heroicons/react/solid'

import '../App.css'

export default function MarketPlace() {
  return (
    <>
      <div className="grid place-items-center" style={{padding:'2rem'}}>
        <div className="banner-header w-full" style={{padding:'0px', fontSize:'60px'}}>
          <p>Engage your fans with community.</p>
        </div>
      </div>

      <div className="grid flex justify-center grid-cols-1 md:grid-cols-3 gap-4 container mx-auto" style={{marginBottom:'8rem',padding:'3rem'}}>
        <div>
          <p className="banner-para">01/</p>
          <p className="banner-para-2">Artists themselves become a platform. NFTs allow artistes, especially upcoming ones, to create an ecosystem that allows genuine fans to buy into their market.</p>
        </div>
        <div>
          <p className="banner-para">02/</p>
          <p className="banner-para-2">Artists themselves become a platform. NFTs allow artistes, especially upcoming ones, to create an ecosystem that allows genuine fans to buy into their market.</p>
        </div>
        <div>
          <p className="banner-para">03/</p>
          <p className="banner-para-2">Artists themselves become a platform. NFTs allow artistes, especially upcoming ones, to create an ecosystem that allows genuine fans to buy into their market.</p>
        </div>
      </div>

      <div className="grid flex justify-center grid-cols-1 md:grid-cols-2 gap-4 container mx-auto">
        <div className="grid place-items-center grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border-black relative w-full md:w-1/2 border-4 my-6 image-div">
            <img className="image-d" src={Image1} />
            <div style={{marginLeft:'1rem'}}>
              <p className="banner-para-2" style={{fontWeight:'900', }}>Rap Music</p>
              <p className="banner-para-2" style={{fontWeight:'900', textAlign:'center', marginTop: '0'}}>
                <div className="flex items-center"><img style={{borderRadius:'10px',marginRight: '5px'}} src={Vector} /> <b><b>0.3242</b></b></div>
              </p>
            </div>
          </div>
          <div className="border-black relative w-full md:w-1/2 border-4 my-6 image-div">
            <img className="image-d" src={Image2} />
            <div style={{marginLeft:'1rem'}}>
              <p className="banner-para-2" style={{fontWeight:'900', }}>Rap Music</p>
              <p className="banner-para-2" style={{fontWeight:'900', textAlign:'center', marginTop: '0'}}>
                <div className="flex items-center"><img style={{borderRadius:'10px',marginRight: '5px'}} src={Vector} /> <b>0.3242</b></div>
              </p>
            </div>
          </div>
          <div className="border-black relative w-full md:w-1/2 border-4 my-6 image-div">
            <img className="image-d" src={Image3} />
            <div style={{marginLeft:'1rem'}}>
              <p className="banner-para-2" style={{fontWeight:'900', }}>Rap Music</p>
              <p className="banner-para-2" style={{fontWeight:'900', textAlign:'center', marginTop: '0'}}>
                <div className="flex items-center"><img style={{borderRadius:'10px',marginRight: '5px'}} src={Vector} /> <b>0.3242</b></div>
              </p>
            </div>
          </div>
          <div className="border-black relative w-full md:w-1/2 border-4 my-6 image-div">
            <img className="image-d" src={Image4} />
            <div style={{marginLeft:'1rem'}}>
              <p className="banner-para-2" style={{fontWeight:'900', }}>Rap Music</p>
              <p className="banner-para-2" style={{fontWeight:'900', textAlign:'center', marginTop: '0'}}>
                <div className="flex items-center"><img style={{borderRadius:'10px',marginRight: '5px'}} src={Vector} /> <b>0.3242</b></div>
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid place-items-center md:-rotate-25" style={{padding:'3rem'}}>
          <div className="banner-header w-full" style={{padding:'0px'}}>
            <p>Music for NFT creators.</p>
            <p className="banner-para">Digital Music for fans.</p>
            <p className="banner-para-2">Music NFTs will continue to revolutionize the way that artists and fans create community together as we enter the upcoming year — undoubtedly changing the trajectory of countless budding music careers. </p>
            <a
              href="#"
              type="button"
              className="anchor-button group bg-transparent border-white border-2 my-6 relative w-full md:w-1/2 text-sm md:text-3xl items-center flex justify-center py-2 px-4 border border-transparent font-medium rounded-md text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Explore Market
              <ChevronRightIcon className="h-10 w-10 text-slate-50 group-hover:text-slate-50" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div> 
    </>
  )
}
