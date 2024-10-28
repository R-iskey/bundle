import React from 'react'
import { Link } from 'react-scroll'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import {Autoplay, Pagination} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useFetch from '@/hooks/useFetch';

const Hero = () => {
  const {data = []} = useFetch('/api/featured')

    return (
        <div>
            <div className='max-w-screen-xl mx-auto pb-12'>
              <Swiper
                pagination={{
                  clickable: true,
                  bulletClass: "banner-pagination-bullet",
                  bulletActiveClass: "banner-pagination-bullet-active",
                }}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: true,
                }}
                modules={[Autoplay, Pagination]}
              >
                {
                  data.map(item => (
                    <SwiperSlide key={item.id}>
                      <div className="row py-32">
                        <div>
                          <img className='show lg:hidden rounded-lg shadow-md px-5 mx-auto mb-8'
                               src={item.image}
                               alt=""/>
                        </div>
                        <div className="px-6 flex justify-between">
                          <div className='lg:max-w-2xl text-center lg:text-left'>
                            <div>
                              <h1
                                className="text-2xl font-bold tracking-tight text-white sm:text-4xl md:text-6xl">{item.name}</h1>
                              <p className="mt-6 text-sm sm:text-lg  text-gray-300 ">{item.description}</p>
                              <div className="mt-8 flex gap-x-4 justify-center lg:justify-start">
                                <Link href={`/payment?productId=${item.id}`}
                                      className="transition duration-200 inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700 hover:scale-105">
                                  Buy Now
                                  <span className="text-indigo-200" aria-hidden="true"> &rarr;</span>
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div>
                            <img className='hidden lg:block  h-[400px] rounded-lg shadow-md'
                                 src={item.image}
                                 alt=""/>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))
                }
              </Swiper>
            </div>
        </div>
    )
}

export default Hero
