import React from "react";
import { CONTACT_ADDRESS, GOOGLE_MAPS_LOCATION } from "../../config";
import ExternalLink from "../../atoms/external-link";

import styles from "./contact-address.module.scss";

const [streetAddress, cityStateZip] = CONTACT_ADDRESS;

const ContactAddress = () => (
  <div className={styles.contactAddress}>
    <h2 className={styles.contactAddress__title}>Stop by to see us</h2>
    <div className={styles.contactAddress__content}>
      <p className={styles.contactAddress__contentLine}>{streetAddress}</p>
      <p className={styles.contactAddress__contentLine}>{cityStateZip}</p>
    </div>
    <ExternalLink
      href={GOOGLE_MAPS_LOCATION}
      className={styles.contactAddress__navLink}
      title="Get directions here"
    />
  </div>
);

export default ContactAddress;
