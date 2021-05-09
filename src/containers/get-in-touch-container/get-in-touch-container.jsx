import React from "react";
import ContactForm from "../../components/contact-form";
import ContactAddress from "../../components/contact-address";
import ContactPhone from "../../components/contact-phone";
import RequestHelp from "../../components/request-help";

import "./get-in-touch-container.scss";

const GetInTouchContainer = () => (
  <div className="get-in-touch-container">
    <div className="get-in-touch-container__content">
      <RequestHelp />
      <ContactPhone />
      <ContactAddress />
      <ContactForm />
    </div>
  </div>
);

export default GetInTouchContainer;
