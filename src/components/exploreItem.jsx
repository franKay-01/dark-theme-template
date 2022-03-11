import Image5 from '../assets/image5.png'
import Image6 from '../assets/image6.png'
import Image7 from '../assets/image7.png'
import Image8 from '../assets/image8.png'
import Image9 from '../assets/image9.png'
import Image10 from '../assets/image10.png'
import Image11 from '../assets/image11.png'
import Image12 from '../assets/image12.png'

import Vector from '../assets/Vector.png'

import '../App.css'

export default function ExploreItem() {

    return (
      <>
        <div className="grid place-items-center" style={{padding:'1rem',marginTop:'5rem', textAlign:'left'}}>
          <div className="banner-header w-full" style={{padding:'0px', fontSize:'60px'}} >
            <p>Explore the Market.</p>
          </div>
        </div>
        <div className="grid flex justify-center grid-cols-1 md:grid-cols-2 gap-4 container mx-auto" style={{marginTop:'1rem'}}>
          <div className="grid place-items-center grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-black relative w-full md:w-1/2 border-4 my-6 image-div-2">
              <img className="image-d image-d-2" src={Image5} />
              <div style={{marginLeft:'1rem'}}>
                <p className="banner-para-2" style={{fontWeight:'900', }}>Rap Music</p>
                <p className="banner-para-2" style={{fontWeight:'900', textAlign:'center', marginTop: '0'}}>
                  <div className="flex items-center"><img style={{borderRadius:'10px',marginRight: '5px'}} src={Vector} /> <b><b>0.3242</b></b></div> 
                </p>
                <a
                  href="#"
                  type="button"
                  className="anchor-button bg-transparent border-white border-2 text-sm py-2 px-4 border border-transparent font-medium rounded-md text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Buy Now
                </a>
                <a
                  href="#"
                  type="button"
                  style={{float: 'right', marginRight:'10px'}}
                  className="bg-transparent border-white border-2 text-sm py-2 px-4 border border-transparent font-medium rounded-md text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 play-now"
                >
                  Play Now
                </a>
              </div>
            </div>
            <div className="border-black relative w-full md:w-1/2 border-4 my-6 image-div-2">
              <img className="image-d image-d-2" src={Image6} />
              <div style={{marginLeft:'1rem'}}>
                <p className="banner-para-2" style={{fontWeight:'900', }}>Rap Music</p>
                <p className="banner-para-2" style={{fontWeight:'900', textAlign:'center', marginTop: '0'}}>
                  <div className="flex items-center"><img style={{borderRadius:'10px',marginRight: '5px'}} src={Vector} /> <b>0.3242</b></div>
                </p>
                <a
                  href="#"
                  type="button"
                  className="anchor-button bg-transparent border-white border-2 text-sm py-2 px-4 border border-transparent font-medium rounded-md text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Buy Now
                </a>
                <a
                  href="#"
                  type="button"
                  style={{float: 'right', marginRight:'10px'}}
                  className="bg-transparent border-white border-2 text-sm py-2 px-4 border border-transparent font-medium rounded-md text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 play-now"
                >
                  Play Now
                </a>
              </div>
            </div>
            <div className="border-black relative w-full md:w-1/2 border-4 my-6 image-div-2">
              <img className="image-d image-d-2" src={Image7} />
              <div style={{marginLeft:'1rem'}}>
                <p className="banner-para-2" style={{fontWeight:'900', }}>Rap Music</p>
                <p className="banner-para-2" style={{fontWeight:'900', textAlign:'center', marginTop: '0'}}>
                  <div className="flex items-center"><img style={{borderRadius:'10px',marginRight: '5px'}} src={Vector} /> <b>0.3242</b></div>
                </p>
                <a
                  href="#"
                  type="button"
                  className="anchor-button bg-transparent border-white border-2 text-sm py-2 px-4 border border-transparent font-medium rounded-md text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Buy Now
                </a>
                <a
                  href="#"
                  type="button"
                  style={{float: 'right', marginRight:'10px'}}
                  className="bg-transparent border-white border-2 text-sm py-2 px-4 border border-transparent font-medium rounded-md text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 play-now"
                >
                  Play Now
                </a>
              </div>
            </div>
            <div className="border-black relative w-full md:w-1/2 border-4 my-6 image-div-2">
              <img className="image-d image-d-2" src={Image8} />
              <div style={{marginLeft:'1rem'}}>
                <p className="banner-para-2" style={{fontWeight:'900', }}>Rap Music</p>
                <p className="banner-para-2" style={{fontWeight:'900', textAlign:'center', marginTop: '0'}}>
                  <div className="flex items-center"><img style={{borderRadius:'10px',marginRight: '5px'}} src={Vector} /> <b>0.3242</b></div>
                </p>
                <a
                  href="#"
                  type="button"
                  className="anchor-button bg-transparent border-white border-2 text-sm py-2 px-4 border border-transparent font-medium rounded-md text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Buy Now
                </a>
                <a
                  href="#"
                  type="button"
                  style={{float: 'right', marginRight:'10px'}}
                  className="bg-transparent border-white border-2 text-sm py-2 px-4 border border-transparent font-medium rounded-md text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 play-now"
                >
                  Play Now
                </a>
              </div>
            </div>
          </div>
          <div className="grid place-items-center grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-black relative w-full md:w-1/2 border-4 my-6 image-div-2">
              <img className="image-d image-d-2" src={Image9} />
              <div style={{marginLeft:'1rem'}}>
                <p className="banner-para-2" style={{fontWeight:'900', }}>Rap Music</p>
                <p className="banner-para-2" style={{fontWeight:'900', textAlign:'center', marginTop: '0'}}>
                  <div className="flex items-center"><img style={{borderRadius:'10px',marginRight: '5px'}} src={Vector} /> <b><b>0.3242</b></b></div>
                </p>
                <a
                  href="#"
                  type="button"
                  className="anchor-button bg-transparent border-white border-2 text-sm py-2 px-4 border border-transparent font-medium rounded-md text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Buy Now
                </a>
                <a
                  href="#"
                  type="button"
                  style={{float: 'right', marginRight:'10px'}}
                  className="bg-transparent border-white border-2 text-sm py-2 px-4 border border-transparent font-medium rounded-md text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 play-now"
                >
                  Play Now
                </a>
              </div>
            </div>
            <div className="border-black relative w-full md:w-1/2 border-4 my-6 image-div-2">
              <img className="image-d image-d-2" src={Image10} />
              <div style={{marginLeft:'1rem'}}>
                <p className="banner-para-2" style={{fontWeight:'900', }}>Rap Music</p>
                <p className="banner-para-2" style={{fontWeight:'900', textAlign:'center', marginTop: '0'}}>
                  <div className="flex items-center"><img style={{borderRadius:'10px',marginRight: '5px'}} src={Vector} /> <b>0.3242</b></div>
                </p>
                <a
                  href="#"
                  type="button"
                  className="anchor-button bg-transparent border-white border-2 text-sm py-2 px-4 border border-transparent font-medium rounded-md text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Buy Now
                </a>
                <a
                  href="#"
                  type="button"
                  style={{float: 'right', marginRight:'10px'}}
                  className="bg-transparent border-white border-2 text-sm py-2 px-4 border border-transparent font-medium rounded-md text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 play-now"
                >
                  Play Now
                </a>
              </div>
            </div>
            <div className="border-black relative w-full md:w-1/2 border-4 my-6 image-div-2">
              <img className="image-d image-d-2" src={Image11} />
              <div style={{marginLeft:'1rem'}}>
                <p className="banner-para-2" style={{fontWeight:'900', }}>Rap Music</p>
                <p className="banner-para-2" style={{fontWeight:'900', textAlign:'center', marginTop: '0'}}>
                  <div className="flex items-center"><img style={{borderRadius:'10px',marginRight: '5px'}} src={Vector} /> <b>0.3242</b></div>
                </p>
                <a
                  href="#"
                  type="button"
                  className="anchor-button bg-transparent border-white border-2 text-sm py-2 px-4 border border-transparent font-medium rounded-md text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Buy Now
                </a>
                <a
                  href="#"
                  type="button"
                  style={{float: 'right', marginRight:'10px'}}
                  className="bg-transparent border-white border-2 text-sm py-2 px-4 border border-transparent font-medium rounded-md text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 play-now"
                >
                  Play Now
                </a>
              </div>
            </div>
            <div className="border-black relative w-full md:w-1/2 border-4 my-6 image-div-2">
              <img className="image-d image-d-2" src={Image12} />
              <div style={{marginLeft:'1rem'}}>
                <p className="banner-para-2" style={{fontWeight:'900', }}>Rap Music</p>
                <p className="banner-para-2" style={{fontWeight:'900', textAlign:'center', marginTop: '0'}}>
                  <div className="flex items-center"><img style={{borderRadius:'10px',marginRight: '5px'}} src={Vector} /> <b>0.3242</b></div>
                </p>
                <a
                  href="#"
                  type="button"
                  className="anchor-button bg-transparent border-white border-2 text-sm py-2 px-4 border border-transparent font-medium rounded-md text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Buy Now
                </a>
                <a
                  href="#"
                  type="button"
                  style={{float: 'right', marginRight:'10px'}}
                  className="bg-transparent border-white border-2 text-sm py-2 px-4 border border-transparent font-medium rounded-md text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 play-now"
                >
                  Play Now
                </a>
              </div>
            </div>
          </div>
        </div>
        
      </>
    )
  }