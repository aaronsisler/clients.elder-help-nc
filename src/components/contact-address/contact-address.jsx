import React from "react";
import { CONTACT_ADDRESS } from "../../config";

import "./contact-address.scss";

const [streetAddress, cityStateZip] = CONTACT_ADDRESS;

const ContactAddress = () => (
  <div className="contact-address">
    <p className="contact-address__line">Elder Help</p>
    <p className="contact-address__line">{streetAddress}</p>
    <p className="contact-address__line">{cityStateZip}</p>
  </div>
);

export default ContactAddress;
