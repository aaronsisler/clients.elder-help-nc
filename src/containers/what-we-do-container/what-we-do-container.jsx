import React from "react";
import Hyperlink from "../../atoms/hyperlink";

import "./what-we-do-container.scss";

const WhatWeDoContainer = () => (
  <div className="what-we-do-container">
    <h2 className="what-we-do-container__main-title">What We Do</h2>
    <p className="what-we-do-container__main-content">
      <p>
        Being a part of a community is not something we take lightly. Our
        mission allows us to bring together different audiences. This mingling
        allows for educational opportunites in the needs of the senior community
        as well as provide much needed services.
      </p>
      <p>
        Participated in the Adopt A Senior program which allows us to bring a
        personal touch to Seniors by directly providing them with some outside
        contact as well as with gifts to let them know they are not forgotten
        and alone.
      </p>
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
