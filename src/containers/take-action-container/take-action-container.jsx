import React from "react";
import TakeActionAddress from "../../components/take-action-address";

import styles from "./take-action-container.module.scss";

const TakeActionContainer = () => (
  <div className={styles.takeActionContainer}>
    <div className={styles.takeActionContainer__title}>How can you help?</div>
    <div className={styles.takeActionContainer__content}>
      With the pandemic still affecting many of our opportunities that allow the
      general public to be involved, we find the best way to support our mission
      is with a donation. Currently we are only able to accept checks which
      should be made out to Elder Help.
    </div>
    <TakeActionAddress />
  </div>
);

export default TakeActionContainer;
