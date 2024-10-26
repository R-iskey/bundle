'use client';

import Link from 'next/link';
import {useEffect, useState} from 'react';

export default function Checkout() {
  const [bagItem, setBagItem] = useState(null);

  useEffect(() => {
    // This code will only run on the client side
    const value = localStorage.getItem('bagItem');
    setBagItem(value);
  }, []);


  if (!bagItem) {

  }

  return (
    <div className={'container bg-white mt-6 mx-auto'}>
      {
        !bagItem && (
          <div className={'max-w-[440px] mx-auto'}>
            <div className={'rounded-xl bg-gray-500 px-4 py-6'}>
              <div className={'text-white text-center text-xl flex flex-col gap-4'}>
                <span>Your bag is empty</span>
                <Link href={'/'}>Back Home Page</Link>
              </div>
            </div>
          </div>


        )
      }
    </div>
  )
}
