import React from "react";
import { CONTACT_PHONE_NUMBER } from "../../config";

import styles from "./contact-phone.module.scss";

const ContactPhone = () => (
  <div className="contact-phone">
    <h2 className="contact-phone__title">Give us a call</h2>
    <div className="contact-phone__content">{CONTACT_PHONE_NUMBER}</div>
  </div>
);

export default ContactPhone;
