import React, { useContext, useEffect, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import { db } from "../../Utility/firebase";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import styles from "./Order.module.css";
import ProductCard from "../../Components/product/ProductCard";

function Order() {
  const [{ user }, dispatch] = useContext(DataContext);
  const [orders, setOrdes] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("user")
        .doc(user.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          console.log(snapshot);
          setOrdes(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrdes([]);
    }
  }, []);

  return (
    <Layout>
      <section className={styles.container}>
        <div className={styles.orders__container}>
          <h2>Your orders</h2>
          {orders?.length === 0 && (
            <div style={{ padding: "20px" }}>You do not have orders yet!</div>
          )}
          <div>
            {orders?.map((eachOrder) => {
              return (
                <div>
                  <hr />
                  <p>Order ID: {eachOrder?.id}</p>
                  {eachOrder?.data.basket?.map((order) => {
                    return (
                      <ProductCard flex={true} product={order} key={order.id} />
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Order;
