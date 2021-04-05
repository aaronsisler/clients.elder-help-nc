import React from "react";
import Hyperlink from "../../atoms/hyperlink";
import Image from "../../atoms/image";
import whatWeDo from "../../content/what-we-do";

import "./what-we-do-container.scss";

const WhatWeDoContainer = () => (
  <div className="what-we-do-container">
    <h2 className="what-we-do-container__title">What We Do</h2>
    <div className="what-we-do-container__content">
      Being a part of a community is not something we take lightly. Our mission
      allows us to bring together different audiences. This mingling allows for
      educational opportunites in the needs of the senior community as well as
      provide much needed services.
    </div>
    <Hyperlink
      href="/take-action"
      title="Get Involved"
      className="what-we-do-container__cta"
    />
    <h2 className="what-we-do-container__title">Recent Events</h2>
    <div className="what-we-do-container__events">
      {whatWeDo.map(({ key, imgSrc, altText, content }) => (
        <div className="what-we-do-container__event" key={key}>
          <Image
            className="who-we-are-container__event-image"
            altText={altText}
            imgSrc={imgSrc}
          />
          <p className="what-we-do-container__event-content">{content}</p>
        </div>
      ))}
    </div>
  </div>
);

export default WhatWeDoContainer;
