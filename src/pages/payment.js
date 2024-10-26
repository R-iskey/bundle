import React from 'react';
import StripeContainer from '../components/StripeForm';
import {useRouter} from 'next/router';
import useFetch from '@/hooks/useFetch';
import Footer from '@/components/Footer';

const PaymentPage = () => {
  const router = useRouter();
  const {productId} = router.query;

  const {data: product, loading} = useFetch(`/api/bundles/${productId}`, {enable: Boolean(productId)});

  if (loading) {
    return null;
  }

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 via-gray-900 to-indigo-900 pb-20 ">
        <div
          className="container mx-auto p-6 bg-white shadow-lg rounded-lg grid grid-cols-1 md:grid-cols-2 gap-6 mt-20">

          {
            !product ? <div>Product not found</div> : <>
              <div className="flex flex-col items-start p-6 ">
                <h1 className="text-3xl font-semibold mb-4">{product.name}</h1>
                <p className="text-gray-700 mb-4">{product.description}</p>
                <div className="text-lg font-medium text-gray-900 mb-6">
                  Price: ${(product.price / 100).toFixed(2)}
                </div>
                <div className="w-full">
                  <img
                    src={product.image} // Replace with actual product image URL
                    alt={product.name}
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
              </div>

              <div className="p-6 border-l">
                <StripeContainer productData={product}/>
              </div>
            </>
          }
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </>
  );
};

export default PaymentPage;
