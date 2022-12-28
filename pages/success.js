import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BgBagCheckFill, BsBagCheck, BsBagCheckFill } from "react-icons/bs";

import { useStateContext } from "../context/StateContext";
import { runFirework } from "../lib/utils";
const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]), setTotalPrice(0), setTotalQuantities(0), runFirework();
  }, []);

  return (
    <div className="success-warpper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your order!</h2>
        <p className="email-msg">Check your email inbox for the receipt.</p>
        <p className="description">
          If you have any questions, please email
          <a className="email" href="mailto:afiifatuts04@gmail.com">
            chocophinil@gmail
          </a>
          <Link href="/">
            <button type="button" width="300px" className="btn">
              Continue Shopping
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Success;
