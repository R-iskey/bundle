'use client'

import Link from 'next/link';

const CheckoutPage = () => {
  const bagItem = localStorage.getItem('bagItem');

  if (!bagItem) {

  }

  return (
    <div className={'container bg-white mt-6 mx-auto'}>
      {
        !bagItem && (
          <div className={'text-gray-900 text-center text-xl flex flex-col gap-4'}>
            <span>Your bag is empty</span>
            <Link href={'/'}>Back Home Page</Link>
          </div>
        )
      }
    </div>
  )
}

export default CheckoutPage;
