import React from 'react'
import Link from 'next/link';
import {FaEnvelope, FaPhone} from 'react-icons/fa';

const Footer = () => {
  return (
      <footer aria-label="Site Footer" className="bg-white text-gray-800 mt-4">
        <div className="grid grid-cols-1 lg:grid-cols-3  py-4 px-6">
          <div className={'flex flex-col gap-3'}>
            <div className={''}>Site Name</div>
            <div className={'flex items-center gap-2'}><FaPhone /><a href={'tel:(206) 672-5052'} className={'hover:underline'}>(206) 672-5052</a></div>
            <div className={'flex items-center gap-2'}><FaEnvelope /><a href={'support@rushtranslate.com'} className={'hover:underline'}>support@rushtranslate.com</a></div>
          </div>
          <div className={'flex flex-col gap-4'}>
            <div className={''}></div>
            <Link href={'/privacy'}  className={'hover:underline'}>Privacy and Policy </Link>
            <Link href={'/refund'}  className={'hover:underline'}>Refund policy</Link>
          </div>
        </div>
        <div className={'border-t border-gray-100 py-2'}>
          <div className={'w-[300px] mx-auto'}>
            All right reserved A Company {(new Date()).getFullYear()}
          </div>
        </div>

      </footer>
  )
}

export default Footer
