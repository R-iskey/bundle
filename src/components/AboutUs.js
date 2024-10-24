import React from 'react'

const Stats = () => {
  return (
    <>
      <div className='max-w-screen-xl mx-auto px-4'>
        <div className=" pt-12 sm:pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8 md:mb-12">
                <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">About us</h2>
                <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">This is a section of some
                  simple filler text, also known as placeholder text. It shares some characteristics of a real written
                  text but is random or otherwise generated.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={'mt-3'}>
        <img
          src={'https://kronosexperience.com/wp-content/uploads/2021/12/Team-building-promotes-teamwork-which-fosters-success-in-a-business.-Here-is-how-and-why-you-should-be-implementing-team-building..jpeg'}/>
      </div>
    </>
  )
}

export default Stats
