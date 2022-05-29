import React from "react";
import { CONTACT_PHONE_NUMBER } from "../../config";

import styles from "./contact-phone.module.scss";

const ContactPhone = () => (
  <div className={styles.contactPhone}>
    <h2 className={styles.contactPhone__title}>Give us a call</h2>
    <div className={styles.contactPhone__content}>{CONTACT_PHONE_NUMBER}</div>
  </div>
);

export default ContactPhone;
