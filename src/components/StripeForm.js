import React, {useEffect, useState} from 'react';
import {loadStripe} from '@stripe/stripe-js';
import {CardElement, Elements, PaymentRequestButtonElement, useElements, useStripe} from '@stripe/react-stripe-js';
import { FaCcVisa, FaApplePay, FaGooglePay } from 'react-icons/fa';

const stripePromise = loadStripe('pk_test_qoKFOt8qV0DGmJiIQZyLzNWl');

const StripeForm = ({productData}) => {
  const stripe = useStripe();
  const elements = useElements();

  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null); // Success message state
  const [paymentMethod, setPaymentMethod] = useState('card'); // Default to card
  const [paymentRequest, setPaymentRequest] = useState(null);

  useEffect(() => {
    if (stripe && paymentMethod === 'appleGooglePay') {
      const pr = stripe.paymentRequest({
        country: 'US',
        currency: 'usd',
        total: {
          label: productData.name,
          amount: productData.price,
        },
        requestPayerName: true,
        requestPayerEmail: true,
      });

      pr.canMakePayment().then((result) => {
        if (result) {
          setPaymentRequest(pr);
        } else {
          setPaymentRequest(null);
        }
      });

      pr.on('paymentmethod', async (event) => {
        const {paymentIntent, error} = await stripe.confirmCardPayment(
          'YOUR_CLIENT_SECRET', // Obtain from your backend
          {payment_method: event.paymentMethod.id},
          {handleActions: false}
        );

        if (error) {
          event.complete('fail');
          setErrorMessage(error.message);
        } else {
          event.complete('success');
          setSuccessMessage("Thank you for your purchase, we'll send your item via email address"); // Set success message
        }
      });
    }
  }, [stripe, productData, paymentMethod]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    if (paymentMethod === 'card') {
      const cardElement = elements.getElement(CardElement);
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: {
          email: email,
        },
      });
      if (error) {
        setErrorMessage(error.message);
        setSuccessMessage(null);

      } else {
        setErrorMessage(null);
        setSuccessMessage("Thank you for your purchase, we'll send your item via email address");
      }
    } else if (paymentMethod === 'appleGooglePay' && paymentRequest) {
      // Trigger the Payment Request Button when Pay Now is clicked
      paymentRequest.show();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">Pay for {productData.name}</h2>

      {/* Email Field */}
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          placeholder="you@example.com"
        />
      </div>

      <div className="mb-4 relative">
        <label className="block text-sm font-medium text-gray-700 mb-2">Select Payment Method</label>
        <div className="flex space-x-4">
          <button
            type="button"
            onClick={() => setPaymentMethod('card')}
            className={`flex items-center px-4 py-2 border rounded-lg ${
              paymentMethod === 'card' ? 'bg-indigo-700 text-white' : 'bg-gray-100 text-gray-700'
            } hover:bg-indigo-800 hover:text-white transition-colors`}
          >
            <FaCcVisa className="mr-2"/> Card
          </button>
          <button
            type="button"
            onClick={() => setPaymentMethod('appleGooglePay')}
            className={`flex items-center px-4 py-2 border rounded-lg ${
              paymentMethod === 'appleGooglePay' ? 'bg-indigo-700 text-white' : 'bg-gray-100 text-gray-700'
            } hover:bg-indigo-800 hover:text-white transition-colors`}
          >
            <FaApplePay className="mr-2"/> Apple Pay
          </button>
        </div>
      </div>

      {/* Conditionally Render Payment Method */}
      {paymentMethod === 'appleGooglePay' && paymentRequest ? (
        <div className="mb-4">
          <PaymentRequestButtonElement options={{paymentRequest}}/>
        </div>
      ) : paymentMethod === 'card' ? (
        <div className="mb-4">
          <label htmlFor="card-element" className="block text-sm font-medium text-gray-700 mb-2">
            Card Details
          </label>
          <div className="p-3 border border-gray-300 rounded-md">
            <CardElement
              id="card-element"
              options={{
                style: {
                  base: {
                    fontSize: '16px',
                    color: '#32325d',
                    '::placeholder': {
                      color: '#a0aec0',
                    },
                  },
                  invalid: {
                    color: '#fa755a',
                  },
                },
              }}
            />
          </div>
        </div>
      ) : null}

      {/* Error and Success Messages */}
      {errorMessage && <div className="text-red-500 text-sm mb-4">{errorMessage}</div>}
      {successMessage && <div className="text-green-500 text-sm mb-4">{successMessage}</div>}

        <button
          type="submit"
          disabled={!stripe}
          className="w-full py-2 px-4 bg-gradient-to-r from-indigo-700 via-indigo-800 to-indigo-900 text-white font-semibold rounded-md shadow  transition-colors"
        >
          Pay Now
        </button>
    </form>
  );
};

const StripeContainer = ({productData}) => {
  return (
    <Elements stripe={stripePromise}>
      <StripeForm productData={productData}/>
    </Elements>
  );
};

export default StripeContainer;
