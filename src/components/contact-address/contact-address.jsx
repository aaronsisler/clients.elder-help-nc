import React from "react";
import { CONTACT_ADDRESS, GOOGLE_MAPS_LOCATION } from "../../config";
import ExternalLink from "../../atoms/external-link";

import "./contact-address.scss";

const [streetAddress, cityStateZip] = CONTACT_ADDRESS;

const ContactAddress = () => (
  <div className="contact-address">
    <h2 className="contact-address__title">Stop by to see us</h2>
    <div className="contact-address__content">
      <p className="contact-address__content-line">{streetAddress}</p>
      <p className="contact-address__content-line">{cityStateZip}</p>
    </div>
    <ExternalLink
      href={GOOGLE_MAPS_LOCATION}
      className="contact-address__nav-link"
      title="Get directions here"
    />
  </div>
);

export default ContactAddress;
