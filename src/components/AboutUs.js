import React from 'react'

const Stats = () => {
  return (
    <>
      <div className='max-w-screen-xl mx-auto '>
        <div className=" pt-12 sm:pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto text-center">
              <div className="mb-8 md:mb-12">
                <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">About us</h2>
                <p className="text-gray-500 md:text-lg  mx-auto max-w-6xl">
                  Welcome to Translitix, where we’re dedicated to providing high-quality translation services that help
                  bridge language barriers and connect people worldwide.
                  With over a year of experience in the market, we’ve built a reputation as a trusted partner for
                  businesses and individuals alike, ensuring that communication flows seamlessly across languages and
                  cultures. <br/><br/>
                  Our team consists of highly skilled and passionate professionals who bring a wealth of expertise to
                  every project. <br/>
                  From linguists to technical experts, our diverse team members work collaboratively to deliver accurate
                  and culturally adapted translations that meet the specific needs of each client. <br/>
                  Whether it's business documents, marketing content, technical manuals, or legal contracts, we handle
                  every task with precision, professionalism, and a commitment to excellence.<br/> <br/>

                  At Translitix , we believe that language should never be a barrier to success. Our mission is to
                  provide reliable, efficient, and high-quality translation services that empower our clients to reach
                  global audiences with confidence. <br/>
                  As we continue to grow, we remain dedicated to upholding our core values of integrity, quality, and
                  customer satisfaction. <br/>

                  We look forward to helping you communicate with the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`mt-3 mx-auto max-w-screen-xl`}>
        <img
          src={'https://kronosexperience.com/wp-content/uploads/2021/12/Team-building-promotes-teamwork-which-fosters-success-in-a-business.-Here-is-how-and-why-you-should-be-implementing-team-building..jpeg'}/>
      </div>
    </>
  )
}

export default Stats
