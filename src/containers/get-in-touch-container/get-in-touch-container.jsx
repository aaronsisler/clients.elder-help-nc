import React from "react";
import ContactForm from "../../components/contact-form";
import ContactPhone from "../../components/contact-phone";
import RequestHelp from "../../components/request-help";

import "./get-in-touch-container.scss";

const GetInTouchContainer = () => (
  <div className="get-in-touch-container">
    <RequestHelp />
    <ContactPhone />
    <ContactForm />
  </div>
);

export default GetInTouchContainer;
