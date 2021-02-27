import React from "react";
import { auth } from "../../firebase/firebase.utils";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";

function Header({ currentUser, hidden }) {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>

      <div className="options">
        <Link className="option" to="/">
          HOME
        </Link>
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}

        <CartIcon />
      </div>
      {hidden ? null : <CartDropDown />}
    </div>
  );
}

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(Header);
