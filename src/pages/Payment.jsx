import React from "react";
import styles from "../styles/cards.module.scss";
import { BsCurrencyDollar } from "react-icons/bs";

const Payment = () => {
  return (
    <div className={styles.home}>
      <div className={`${styles.card} ${styles.payment}`}>
        <div>
          <BsCurrencyDollar
            size={70}
            style={{
              border: "2px solid #F6C762",
              color: "#F6C762",
              width: "60px",
            }}
          />
          <h2>Payment</h2>
        </div>
        <div className={styles.number}>
          <h3>
            556,000 <span>₺</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Payment;
