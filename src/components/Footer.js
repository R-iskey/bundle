import React from 'react'
import Link from 'next/link';

const Footer = () => {
  return (
    <div>
      <footer aria-label="Site Footer" className="bg-white className='mt-16 border-t border-gray-100 pt-8'">
        <div className="max-w-screen-xl px-4  pb-8 mx-auto sm:px-6 lg:px-8 ">
          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
            <div className="mx-auto max-w-sm lg:max-w-none">
              <h3>Company Name</h3>
              <div className='flex col gap-5 text-gray-700 text-md pt-4 justify-center sm:justify-start'>
                {/*<FaFacebook/>*/}
                {/*<FaInstagram/>*/}
                {/*<FaTwitter/>*/}
                {/*<FaSnapchatGhost/>*/}
                {/*<FaWhatsapp/>*/}
                <Link href={'/privacy'}>Privacy</Link>
                <Link href={'/refund'}>Refund Policy</Link>
              </div>

            </div>
          </div>
        </div>

      </footer>

    </div>
  )
}

export default Footer
