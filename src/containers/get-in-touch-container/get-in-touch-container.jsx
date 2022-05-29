import React from "react";
import ContactForm from "../../components/contact-form";
import ContactAddress from "../../components/contact-address";
import ContactPhone from "../../components/contact-phone";
import RequestHelp from "../../components/request-help";

import styles from "./get-in-touch-container.module.scss";

const GetInTouchContainer = () => (
  <div className={styles.getInTouchContainer}>
    <div className={styles.getInTouchContainer__content}>
      <RequestHelp />
      <ContactPhone />
      <ContactAddress />
      <ContactForm />
    </div>
  </div>
);

export default GetInTouchContainer;
