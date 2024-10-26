import React from 'react'
import useFetch from '@/hooks/useFetch';
import clsx from 'clsx';
import {useRouter} from 'next/router';
import {FaShoppingCart} from 'react-icons/fa';
import Link from 'next/link';

const Bundles = () => {
  const {data = []} = useFetch('/api/bundles');
  const router = useRouter()

  return (
    <div className="bg-gradient-to-r from-gray-900 to-indigo-900 pointer">
      <div className="py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div className="mb-10 md:mb-16">
            <h2 className="text-white text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Bundles</h2>
            <p className="max-w-screen-md text-white md:text-lg text-center mx-auto">This is a section of some simple
              filler text, also known as placeholder text. It shares some characteristics of a real written text but is
              random or otherwise generated.</p>
          </div>
          <div className={
            clsx('grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 xl:gap-8 items-center justify-center overflow-hidden transition-all duration-300')
          }>
            {
              data.map((item) => (

                <div className="group flex flex-col relative rounded-lg overflow-hidden focus-visible:outline-0 pointer"
                     key={item.id}>
                  <div
                     className="h-64 md:h-80 block bg-gray-100 overflow-hidden relative group-hover:scale-110 transition duration-200 grayscale group-hover:grayscale-0">
                    <img
                      src={item.image}
                      loading="lazy" alt="Photo by Minh Pham"
                      className="w-full h-full object-cover object-center absolute  "/>
                  </div>

                  <div
                    className="flex flex-col flex-1 px-4 sm:px-6 absolute bottom-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent pb-4">
                    <h2 className="text-white text-xl font-semibold mb-1">
                      {item.name}
                    </h2>
                    <p className="text-white mb-4 text-md">{item.description}</p>
                    <button
                      onClick={() => router.push(`/payment?productId=${item.id}`)}
                      className="max-w-[190px] flex items-center justify-between  pl-3 pr-2 py-2 text-white font-lg font-semibold bg-gray-900 rounded-lg transition transform hover:scale-105 group-hover:bg-gradient-to-r group-hover:from-indigo-700 group-hover:via-indigo-900 group-hover:to-gray-900 focus:outline-none focus:ring-4 focus:ring-indigo-500 shadow-lg hover:shadow-xl">
                    <span className="flex items-center">
                      <FaShoppingCart className="mr-2" size={16}/>
                      Buy Now
                    </span>
                      <span className="bg-blue-600 px-3 py-1 rounded-lg ml-3 text-sm font-bold">
                      ${item.price}
                    </span>
                    </button>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bundles
