import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IRGO0LxOulsISE8vlSsBouQc4rvrYhydzDxwRkyEJPU6Xh65DcWjPXKXmAUCVcOads35yXCdMiVyoOv4C5AdVyC00UUxpYO7k";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="React Clothing"
      billingAddress
      shippingAddress
      description={`Your Total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;