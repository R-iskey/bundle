import React, {useState} from 'react'
import useFetch from '@/hooks/useFetch';
import clsx from 'clsx';

const Bundles = () => {
  const {data = []} = useFetch('/api/bundles', {}, [])

  return (
    <div className="bg-gradient-to-r from-gray-900 to-indigo-900">
      <div className="py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div className="mb-10 md:mb-16">
            <h2 className="text-white text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Bundles</h2>
            <p className="max-w-screen-md text-white md:text-lg text-center mx-auto">This is a section of some simple
              filler text, also known as placeholder text. It shares some characteristics of a real written text but is
              random or otherwise generated.</p>
          </div>
          <div className={
            clsx('grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 xl:gap-8 items-center justify-center overflow-hidden transition-all duration-300')
          }>
            {
              data.map((item, i) => (

                <div className="group flex flex-col relative rounded-lg overflow-hidden shadow-md" key={item.name}>
                  <a href="#" className="h-64 md:h-80 block bg-gray-100 overflow-hidden relative">
                    <img
                      src={item.image}
                      loading="lazy" alt="Photo by Minh Pham"
                      className="w-full h-full object-cover object-center absolute group-hover:scale-110 transition duration-200 grayscale group-hover:grayscale-0"/>
                  </a>

                  <div className="flex flex-col flex-1 px-4 sm:px-6 absolute bottom-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent">
                    <h2 className="text-white text-lg font-semibold mb-1">
                      <a href="#"
                         className="hover:text-indigo-500 active:text-indigo-600 transition duration-100">{item.name}</a>
                    </h2>
                    <p className="text-white mb-4">{item.description}</p>
                    <button className={'bg-gray-900 transition duration-200 group-hover:bg-indigo-900 text-white text-bold font-medium text-lg w-[80px] rounded px-3 py-1 mb-4 '}>Buy it</button>
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
