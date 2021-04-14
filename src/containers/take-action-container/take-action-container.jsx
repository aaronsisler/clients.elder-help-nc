import React from "react";
import ContactAddress from "../../components/contact-address";

import "./take-action-container.scss";

const TakeActionContainer = () => (
  <div className="take-action-container">
    <div className="take-action-container__title">How can you help?</div>
    <div className="take-action-container__content">
      With the pandemic still affecting many of our opportunities that allow the
      general public to be involved, we find the best way to support our mission
      is with a donation. Currently we are only able to accept checks. Thes
      should be made out to Elder Help.
    </div>
    <ContactAddress />
  </div>
);

export default TakeActionContainer;
