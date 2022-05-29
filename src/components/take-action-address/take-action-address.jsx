import React from "react";
import { CONTACT_ADDRESS } from "../../config";

import styles from "./take-action-address.module.scss";

const [streetAddress, cityStateZip] = CONTACT_ADDRESS;

const TakeActionAddress = () => (
  <div className={styles.takeActionAddress}>
    <p className={styles.takeActionAddress__line}>Elder Help</p>
    <p className={styles.takeActionAddress__line}>{streetAddress}</p>
    <p className={styles.takeActionAddress__line}>{cityStateZip}</p>
  </div>
);

export default TakeActionAddress;
