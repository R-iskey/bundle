import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements, PaymentRequestButtonElement } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_qoKFOt8qV0DGmJiIQZyLzNWl');

const StripeForm = ({ productData }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [paymentRequest, setPaymentRequest] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null); // Success message state

  useEffect(() => {
    if (stripe) {
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

      pr.canMakePayment().then(result => {
        console.log(result);
        if (result) {
          setPaymentRequest(pr);
        }
      });

      pr.on('paymentmethod', async (event) => {
        const { paymentIntent, error } = await stripe.confirmCardPayment(
          'YOUR_CLIENT_SECRET', // Obtain from your backend
          { payment_method: event.paymentMethod.id },
          { handleActions: false }
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
  }, [stripe, productData]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
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
      console.log('PaymentMethod created successfully:', paymentMethod);
      setErrorMessage(null);
      setSuccessMessage("Thank you for your purchase, we'll send your item via email address");
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

      {/* Payment Request Button or Card Element */}
      {paymentRequest ? (
        <PaymentRequestButtonElement
          options={{ paymentRequest }}
          className="mb-4"
        />
      ) : (
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
      )}

      {/* Error Message */}
      {errorMessage && (
        <div className="text-red-500 text-sm mb-4">
          {errorMessage}
        </div>
      )}

      {/* Success Message */}
      {successMessage && (
        <div className="text-green-500 text-sm mb-4">
          {successMessage}
        </div>
      )}

      {/* Submit Button */}
      {!paymentRequest && (
        <button
          type="submit"
          disabled={!stripe}
          className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 transition-colors"
        >
          Pay Now
        </button>
      )}
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
