import React from "react";
import {
  useStripe,
} from "@stripe/react-stripe-js";

const SuccessIcon =
<svg width="96px" height="96px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000">
  <g id="SVGRepo_bgCarrier" stroke-width="0"/>
  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
  <g id="SVGRepo_iconCarrier"> <path fill="#ffffff" d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2m0-2C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z"/> <path fill="#ffffff" d="M10.5 16.5c-.42 0-.82-.176-1.094-.484l-2.963-2.97c-.274-.26-.443-.653-.443-1.06 0-.405.17-.798.462-1.078.482-.513 1.557-.55 2.113.037l1.925 1.93 4.943-4.958c.52-.55 1.575-.57 2.132.02.256.242.425.634.425 1.04 0 .402-.164.79-.45 1.068l-5.993 6.012c-.238.267-.637.443-1.057.443z"/> </g>
</svg>;

const ErrorIcon = 
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M1.25628 1.25628C1.59799 0.914573 2.15201 0.914573 2.49372 1.25628L8 6.76256L13.5063 1.25628C13.848 0.914573 14.402 0.914573 14.7437 1.25628C15.0854 1.59799 15.0854 2.15201 14.7437 2.49372L9.23744 8L14.7437 13.5063C15.0854 13.848 15.0854 14.402 14.7437 14.7437C14.402 15.0854 13.848 15.0854 13.5063 14.7437L8 9.23744L2.49372 14.7437C2.15201 15.0854 1.59799 15.0854 1.25628 14.7437C0.914573 14.402 0.914573 13.848 1.25628 13.5063L6.76256 8L1.25628 2.49372C0.914573 2.15201 0.914573 1.59799 1.25628 1.25628Z" fill="white"/>
  </svg>;

const InfoIcon = 
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M10 1.5H4C2.61929 1.5 1.5 2.61929 1.5 4V10C1.5 11.3807 2.61929 12.5 4 12.5H10C11.3807 12.5 12.5 11.3807 12.5 10V4C12.5 2.61929 11.3807 1.5 10 1.5ZM4 0C1.79086 0 0 1.79086 0 4V10C0 12.2091 1.79086 14 4 14H10C12.2091 14 14 12.2091 14 10V4C14 1.79086 12.2091 0 10 0H4Z" fill="white"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M5.25 7C5.25 6.58579 5.58579 6.25 6 6.25H7.25C7.66421 6.25 8 6.58579 8 7V10.5C8 10.9142 7.66421 11.25 7.25 11.25C6.83579 11.25 6.5 10.9142 6.5 10.5V7.75H6C5.58579 7.75 5.25 7.41421 5.25 7Z" fill="white"/>
    <path d="M5.75 4C5.75 3.31075 6.31075 2.75 7 2.75C7.68925 2.75 8.25 3.31075 8.25 4C8.25 4.68925 7.68925 5.25 7 5.25C6.31075 5.25 5.75 4.68925 5.75 4Z" fill="white"/>
  </svg>;

const STATUS_CONTENT_MAP = {
  succeeded: {
    text: "Commande Validée",
    iconColor: "#30B130",
    icon: SuccessIcon,
  },
  processing: {
    text: "Your payment is processing.",
    iconColor: "#6D6E78",
    icon: InfoIcon,
  },
  requires_payment_method: {
    text: "Your payment was not successful, please try again.",
    iconColor: "#DF1B41",
    icon: ErrorIcon,
  },
  default: {
    text: "Something went wrong, please try again.",
    iconColor: "#DF1B41",
    icon: ErrorIcon,
  }
};

export default function CompletePage() {
  const stripe = useStripe();

  const [status, setStatus] = React.useState("default");
  const [intentId, setIntentId] = React.useState(null);

  React.useEffect(() => {
    if (!stripe) {
      return;
    }
    
    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      if (!paymentIntent) {
        return;
      }
      
      setStatus(paymentIntent.status);
      setIntentId(paymentIntent.id);
    });
  }, [stripe]);

  return (
    <div id="payment-status" className="w-full flex flex-col">
      <div id="status-icon" className="self-center pt-10">
        {STATUS_CONTENT_MAP[status].icon}
      </div>
      <h2 className="text-center font-semibold uppercase pt-5" id="status-text">{STATUS_CONTENT_MAP[status].text}</h2>
      
    </div>
  );
}