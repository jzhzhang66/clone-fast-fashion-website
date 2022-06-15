import * as React from "react";
import Nav from "../components/Nav/Nav";
import AfterConfirm from '../images/after-confirm.jpg';
import { AfterConfirmImage } from "../styles/completed-checkout.style";

const CompletedCheckoutPage = () => {
    return (
      <>
        <Nav />
        <AfterConfirmImage src={AfterConfirm} alt="" />
      </>
    );
  };
  
  export default CompletedCheckoutPage;
  