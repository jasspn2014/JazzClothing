import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import "./checkout.styles.scss";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-blocks">
        <span>Product</span>
      </div>

      <div className="header-blocks">
        <span>Description</span>
      </div>

      <div className="header-blocks">
        <span>Quantity</span>
      </div>

      <div className="header-blocks">
        <span>Price</span>
      </div>

      <div className="header-blocks">
        <span>Remove</span>
      </div>
    </div>

    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}

    <div className="total">
      <span>TOTAL: Rs. {total}</span>
    </div>

    <div className="paymentDetails">
      <h1>Pay Using Following Test Credentials</h1>
      <h2>Card: 4242 4242 4242 4242</h2>
      <h2>Exp: 01/22 CVV: 123</h2>
    </div>

    <StripeCheckoutButton price={total} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
