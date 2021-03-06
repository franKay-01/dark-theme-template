import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ShoppingBagIcon } from '@heroicons/react/outline'

import Header from '../components/header'
import Footer from '../components/footer'
import Banner1 from '../assets/banner1.png'
import ShopCart from '../assets/shopping-cart.gif'
import Nft1 from '../assets/nft1.png'
import Nft2 from '../assets/nft2.png'
import Nft3 from '../assets/nft3.png'
import Nft5 from '../assets/nft5.png'
import '../App.css'

export default function Explore() {

  const [open, setOpen] = useState(false)

  const cancelButtonRef = useRef(null)

  const features = [
    { name: 'Origin', description: 'Designed by Good Goods, Inc.' },
    { name: 'Material', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
    { name: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
    { name: 'Finish', description: 'Hand sanded and finished with natural oil' },
    { name: 'Includes', description: 'Wood card tray and 3 refill packs' },
    { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
  ]

  const products = [
    {
      id: 1,
      name: 'Basic Tee',
      href: '#',
      imageSrc: Nft1,
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 2,
      name: 'Basic Tee',
      href: '#',
      imageSrc: Nft2,
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    }, {
      id: 3,
      name: 'Basic Tee',
      href: '#',
      imageSrc: Nft3,
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    }, {
      id: 4,
      name: 'Basic Tee',
      href: '#',
      imageSrc: Nft5,
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    }, {
      id: 5,
      name: 'Basic Tee',
      href: '#',
      imageSrc: Nft2,
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 6,
      name: 'Basic Tee',
      href: '#',
      imageSrc: Nft1,
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 7,
      name: 'Basic Tee',
      href: '#',
      imageSrc: Nft5,
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 8,
      name: 'Basic Tee',
      href: '#',
      imageSrc: Nft3,
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
  ]

  return (
    <>
      <Header />
      <div>
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <p className="banner-header" style={{ padding: '0px' }}>Digital Mech for fans.</p>

          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 banner-para">Browse and Purchase</h2>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} onClick={() => setOpen(true)} className="group relative">
                <div className="w-full min-h-80 bg-gray-50 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-xl text-slate-50">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-xl text-slate-50">{product.color}</p>
                  </div>
                  <p className="text-xl font-medium text-slate-50">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl banner-header" style={{ padding: '0px' }}>Special Item Specifications</h2>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-slate-50">{feature.name}</dt>
                <dd className="mt-2 text-sm text-slate-50">{feature.description}</dd>
              </div>
            ))}
          </dl>
          <a
            href="#"
            type="button"
            onClick={() => setOpen(true)}
            className="anchor-button anchor-button-2 bg-transparent border-white border-2 text-sm py-2 px-4 border border-transparent font-medium rounded-md text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Buy Now
          </a>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src={Nft3}
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="bg-slate-50 rounded-lg"
          />
          <img
            src={Nft5}
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="bg-slate-50 rounded-lg"
          />
          <img
            src={Nft1}
            alt="Side of walnut card tray with card groove and recessed card area."
            className="bg-slate-50 rounded-lg"
          />
          <img
            src={Nft2}
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="bg-slate-50 rounded-lg"
          />
        </div>
      </div>
      <Footer />
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle" style={{ width: '80%' }}>
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                      <img src={ShopCart} />
                      {/* <ShoppingBagIcon className="h-6 w-6 text-blue-600" aria-hidden="true" /> */}
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                        Product Name
                      </Dialog.Title>
                      <div className="grid justify-center grid-cols-1 md:grid-cols-2 gap-4">
                        <dl className="mt-16 grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 sm:gap-y-16 lg:gap-x-8">
                          <div className="border-t border-black pt-4">
                            <dt className="text-xl text-black">Material</dt>
                            <dd className="mt-2 text-xl text-black" style={{ marginBottom: '3rem' }}>Solid walnut base with rare earth magnets and powder coated steel card cover</dd>

                            <dt className="text-xl text-black">Description</dt>
                            <dd className="mt-2 text-xl text-black">Solid walnut base with rare earth magnets and powder coated steel card cover</dd>
                            <ul class="list-disc p-4">
                              <li>Solid walnut base with rare earth magnets</li>
                              <li>Powder coated steel card cover</li>
                            </ul>
                          </div>

                          <div className="border-t border-black pt-4">

                          </div>
                        </dl>
                        {/* <div className="flex justify-center items-center"> */}
                        {/* <img src={Banner1} /> */}
                        <div className="container mx-auto">
                          <div className="grid-cols-3 p-2 space-y-2 bg-transparent lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3">
                            <div className="w-full rounded">
                              <img src={Nft2}
                                alt="image" />
                            </div>
                            <div className="w-full col-span-2 row-span-2 rounded">
                              <img src={Nft3}
                                alt="image" />
                            </div>
                            <div className="w-full rounded">
                              <img src={Nft1}
                                alt="image" />
                            </div>
                            <div className="w-full rounded">
                              <img src={Nft1}
                                alt="image" />
                            </div>
                            <div className="w-full rounded">
                              <img src={Nft2}
                                alt="image" />
                            </div>
                            <div className="w-full rounded">
                              <img src={Nft2}
                                alt="image" />
                            </div>
                          </div>
                          {/* </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-sky-400 text-base font-medium text-white hover:bg-sky-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                  >
                    Add to Cart
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}