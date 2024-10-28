import React from 'react'

const Stats = () => {
  return (
    <div className='max-w-screen-xl mx-auto px-4'>
      <div className=" pt-12 sm:pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 md:mb-12">
              <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">A Year of
                Translation Excellence</h2>

              <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">At Translitix, we are proud to
                have translated over 100,000 pages in just one year, covering 40 different languages. Our expertise
                spans a wide range of industries, from legal and technical documents to marketing content and corporate
                communications. This achievement reflects our commitment to delivering high-quality translations
                efficiently, ensuring that our clients can communicate seamlessly with their global audiences.</p>
              <br/>
              <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">With a team of experienced
                linguists and a focus on accuracy and cultural relevance, we continue to help businesses break language
                barriers and expand into new markets. Whether it’s a single document or large-scale projects, our
                streamlined process ensures that translations are completed on time without compromising quality. We're
                excited to build on this success and continue delivering exceptional service to clients worldwide.</p>
            </div>
          </div>
        </div>
        <div className="mt-10 pb-8 bg-white ">
          <div className="relative">
            <div className="absolute inset-0 h-1/2 "/>
            <div className="relative max-w-7xl mx-auto">
              <div className=" mx-auto">
                <dl className="rounded-lg bg-white shadow-xl sm:grid sm:grid-cols-3">
                  <div
                    className="flex flex-col border-b border-gray-100 p-6 text-center items-center sm:border-0 sm:border-r">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Pages Translated</dt>
                    <dd className="order-1 text-5xl font-extrabold text-indigo-600">100K</dd>
                  </div>
                  <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Language</dt>
                    <dd className="order-1 text-5xl font-extrabold text-indigo-600">40</dd>
                  </div>
                  <div
                    className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Year</dt>
                    <dd className="order-1 text-5xl font-extrabold text-indigo-600">1</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stats
