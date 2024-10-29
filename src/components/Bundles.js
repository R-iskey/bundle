import React from 'react'
import useFetch from '@/hooks/useFetch';
import clsx from 'clsx';
import {useRouter} from 'next/router';
import {FaShoppingCart} from 'react-icons/fa';

const Bundles = () => {
  const {data = []} = useFetch('/api/bundles');
  const router = useRouter()

  return (
    <div className="bg-gradient-to-r from-gray-900 to-indigo-900 pointer">
      <div className="py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div className="mb-10 md:mb-16">
            <h2 className="text-white text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Packs</h2>
            {/*<p className="max-w-screen-md text-white md:text-lg text-center mx-auto">This is a section of some simple*/}
            {/*  filler text, also known as placeholder text. It shares some characteristics of a real written text but is*/}
            {/*  random or otherwise generated.</p>*/}
          </div>
          <div className={
            clsx('grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 xl:gap-8 items-center justify-center overflow-hidden transition-all duration-300')
          }>
            {
              data.map((item) => (

                <div
                  className="group flex flex-col rounded-lg overflow-hidden focus-visible:outline-0 pointer h-64 md:h-80 bg-gradient-to-b from-gray-900 via-indigo-900/80 to-indigo-800 px-4 sm:px-4 py-3 "
                  key={item.id}>
                  <div className={'flex pb-3 border-b border-white/10 py-1 items-center gap-3'}>
                    <img src={`icons/${item.image}.svg`} className={'h-[72px] w-[72px]'}/>
                    <h2 className="text-white text-xl font-semibold mb-1">
                      {item.name}
                    </h2>
                  </div>
                  <p className="text-white mb-4 text-sm mt-6 flex-1">{item.description}</p>
                  <div className={'pb-2'}>
                    <button
                      onClick={() => router.push(`/payment?productId=${item.id}`)}
                      className="max-w-[190px] flex items-center justify-between  pl-3 pr-2 py-2 text-white font-lg font-semibold bg-gray-900 rounded-lg transition transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-500 shadow-lg hover:shadow-xl">
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
