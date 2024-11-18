import React from "react";
import {
  PaymentElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";

export default function CheckoutForm({dpmCheckerLink}) {
  const stripe = useStripe();
  const elements = useElements();


  const [message, setMessage] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "http://localhost:3000/checkout/payment",
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "tabs",
  };

  return (
    <>
      <form id="payment-form" onSubmit={handleSubmit} className="mt-5 flex flex-col">

        <PaymentElement id="payment-element" options={paymentElementOptions} />
        {/* Show any error or success messages */}
        {message && <div id="payment-message" className="pt-5 text-center">{message}</div>}
        <div className="justify-center items-center pt-16 fixed bottom-16 left-0 flex w-full">
          <button disabled={isLoading || !stripe || !elements} id="submit" className="self-center align-middle bg-blue-600 text-white w-full rounded-md py-3 mx-5 font-semibold">
            <span id="button-text">
              {isLoading ? <div className="spinner" id="spinner"></div> : "Payer"}
            </span>
          </button>
        </div>
      </form>
    </>
  );
}