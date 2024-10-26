const RefundPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto p-8 bg-white shadow-md rounded-lg mt-10 mb-20">
      <h1 className="text-3xl font-semibold text-indigo-700 mb-4">Refund Policy</h1>
      <p className="text-gray-500 text-sm mb-8">Last updated: October 26, 2024</p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-indigo-600 mb-3">1. Overview</h2>
        <p className="text-gray-700">
          Our refund policy is designed to ensure customer satisfaction. If you are not satisfied with your purchase, we are here to help. Please review the policy details below.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-indigo-600 mb-3">2. Eligibility for Refunds</h2>
        <p className="text-gray-700">
          To be eligible for a refund, your item must be unused and in the same condition that you received it. It must also be in the original packaging. Please retain proof of purchase for verification.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-indigo-600 mb-3">3. Refund Process</h2>
        <p className="text-gray-700">
          Once we receive your returned item, we will inspect it and notify you of the status of your refund. If approved, a credit will be applied to your original payment method within a certain number of days.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-indigo-600 mb-3">4. Partial Refunds</h2>
        <p className="text-gray-700">
          Certain circumstances may allow for partial refunds, such as items with obvious signs of use, or items that were not in their original condition. Please contact us if you believe you qualify for a partial refund.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-indigo-600 mb-3">5. Late or Missing Refunds</h2>
        <p className="text-gray-700">
          If you haven’t received your refund yet, first check your bank account. If it is still not reflected, contact your credit card provider as processing time may vary. If you’ve done all this and still haven’t received your refund, please contact us.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-indigo-600 mb-3">6. Contact Us</h2>
        <p className="text-gray-700">
          For questions regarding this refund policy, please contact us at support@example.com.
        </p>
      </section>
    </div>
  );
};

export default RefundPolicy;
