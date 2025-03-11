import React, { useContext, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import styles from "./Payment.module.css";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/product/ProductCard";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { replace } from "react-router-dom";
import CurrencyFormat from "../../Components/CurrencyFormatter/CurrencyFormatter";
import { axiosInstance } from "../../Api/axios";
import { BeatLoader } from "react-spinners";
import { db } from "../../Utility/firebase";
import { useNavigate } from "react-router-dom";
import { Type } from "../../Utility/action.type";

function Payment() {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  const [cardError, setCardError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const totatItems = basket.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const handleChange = (e) => {
    console.log(e);
    e?.error?.message ? setCardError(e?.error?.message) : setCardError("");
  };

  const handlePayment = async (e) => {
    e.preventDefault();

    try {
      setProcessing(true);
      // 1st Backend  function ----> contact to the client
      const response = await axiosInstance({
        method: "POST",
        url: `/payment/create?total=${total * 100}`,
      });

      console.log(response.data);
      const clientSecret = response.data?.clientSecret;

      // 2nd Client side (react side confirmation)

      const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      console.log(paymentIntent);

      await db
        .collection("user")
        .doc(user.uid)
        .collection("orders")
        .doc(paymentIntent.id)
        .set({
          basket: basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created,
        });
      // empty the basket

      dispatch({ type: Type.EMPTY_BASKET });

      setProcessing(false);
      navigate("/orders", { state: { msg: "you have placed new Order" } });
    } catch (error) {
      console.log(error);
      setProcessing(false);
    }

    // 3rd after confimation ---> order firestored database save, clear basket
  };

  return (
    <Layout>
      {/* header */}
      <div className={styles.payment__header}>Checkout {totatItems} items </div>
      {/* payment method */}
      <section className={styles.payment}>
        {/* address  */}
        <div className={styles.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div>{user?.email}</div>
            <div>123 Reac Lane</div>
            <div>Addis ababa, Ethiopia</div>
          </div>
        </div>
        <hr />
        {/* products  */}
        <div className={styles.flex}>
          <h3>Review items and delivery</h3>
          <div>
            {basket?.map((item, index) => (
              <ProductCard product={item} flex={true} key={index} />
            ))}
          </div>
        </div>
        <hr />
        {/* card form  */}
        <div className={styles.flex}>
          <h3>Payment methods</h3>
          <div className={styles.payment__card_container}>
            <div className={styles.payment__details}>
              <form onSubmit={handlePayment}>
                {/* error  */}
                {cardError && (
                  <small style={{ color: "red" }}>{cardError}</small>
                )}
                {/* card element  */}
                <CardElement onChange={handleChange} />

                {/* price  */}
                <div className={styles.payment__price}>
                  <div>
                    <span>
                      Total Order | <CurrencyFormat amount={total} />
                    </span>
                  </div>

                  <button type="submit">
                    {processing ? (
                      <div className={styles.processign}>
                        <BeatLoader color="green" size={12} />
                        <p>Please Wait ...</p>
                      </div>
                    ) : (
                      "Pay Now"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Payment;

// I know why you go on Instagram,  You have the time because you don't wanna put that time into bettering oneself! I'm frustrated by the fact you dont have the curage to be better which you're not.
