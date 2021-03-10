import React from "react";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLinkContainer } from "./header.styles";

function Header({ currentUser, hidden }) {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>

      <OptionsContainer>
        <OptionLinkContainer to="/">HOME</OptionLinkContainer>
        <OptionLinkContainer to="/shop">SHOP</OptionLinkContainer>
        <OptionLinkContainer to="/contact">CONTACT</OptionLinkContainer>
        {currentUser ? (
          <OptionLinkContainer as="div" onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionLinkContainer>
        ) : (
          <OptionLinkContainer to="/signin">SIGN IN</OptionLinkContainer>
        )}

        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropDown />}
    </HeaderContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
