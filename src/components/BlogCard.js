import React, {useState} from 'react'
import useFetch from '@/hooks/useFetch';
import clsx from 'clsx';

const BlogCard = () => {
  const {data = []} = useFetch('/api/bundles', {}, [])
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div className="mb-10 md:mb-16">
            <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Bundles</h2>
            <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">This is a section of some simple
              filler text, also known as placeholder text. It shares some characteristics of a real written text but is
              random or otherwise generated.</p>
          </div>
          <div className={
            clsx('grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 xl:gap-8 items-center justify-center overflow-hidden transition-all duration-300', expanded ? "max-h-[none]" : "max-h-[450px]")
          }>
            {
              data.map((item, i) => (

                <div className="flex flex-col bg-white border rounded-lg overflow-hidden" key={item.name}>
                  <a href="#" className="group h-48 md:h-64 block bg-gray-100 overflow-hidden relative">
                    <img
                      src={item.image}
                      loading="lazy" alt="Photo by Minh Pham"
                      className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"/>
                  </a>

                  <div className="flex flex-col flex-1 p-4 sm:p-6">
                    <h2 className="text-gray-800 text-lg font-semibold mb-2">
                      <a href="#"
                         className="hover:text-indigo-500 active:text-indigo-600 transition duration-100">{item.name}</a>
                    </h2>

                    <p className="text-gray-500 mb-8">{item.description}</p>
                  </div>
                </div>
              ))
            }
          </div>
          <div className={'mt-6 flex items-center justify-center'}>
            <button className={'text-indigo-600 font-bold'} onClick={() => setExpanded(!expanded)}>{expanded ? 'Show Less' : 'Show More'}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
