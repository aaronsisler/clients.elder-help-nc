import React from "react";
import Hyperlink from "../../atoms/hyperlink";

import "./what-we-do-container.scss";

const WhatWeDoContainer = () => (
  <div className="what-we-do-container">
    <h2 className="what-we-do-container__main-title">What We Do</h2>
    <p className="what-we-do-container__main-content">
      <p>Participated in Adopt-A-Senior program</p>
      <p>Community dementia awareness seminar</p>
      <p>Donated incontinence supplies to the tornado victims of Bertie</p>
    </p>
    <Hyperlink
      href="/take-action"
      title="Get Involved"
      className="what-we-do-container__cta"
    />
  </div>
);

export default WhatWeDoContainer;
