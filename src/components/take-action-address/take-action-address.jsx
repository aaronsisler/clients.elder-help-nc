import React from "react";
import { CONTACT_ADDRESS } from "../../config";

import "./take-action-address.scss";

const [streetAddress, cityStateZip] = CONTACT_ADDRESS;

const TakeActionAddress = () => (
  <div className="take-action-address">
    <p className="take-action-address__line">Elder Help</p>
    <p className="take-action-address__line">{streetAddress}</p>
    <p className="take-action-address__line">{cityStateZip}</p>
  </div>
);

export default TakeActionAddress;
