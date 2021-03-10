import React from "react";
import "./custom-button.styles.scss";
import { CustomButtonContainer } from "./custom-button.styles";

const CustomButton = ({ children, ...props }) => <CustomButtonContainer {...props}>{children}{console.log(props)}</CustomButtonContainer>;

export default CustomButton;
