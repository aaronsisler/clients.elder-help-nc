import React from "react";
import Hyperlink from "../../atoms/hyperlink";
import Image from "../../atoms/image";
import { getCdnUrl } from "../../utils";

import "./what-we-do-container.scss";

const CDN_URL = getCdnUrl("/what-we-do");

const chamberImage = {
  altText: "Members of Elder Help with Chamber of Commerce member",
  imgSrc: `${CDN_URL}/what-we-do-container__chamber.jpg`
};

const WhatWeDoContainer = () => (
  <div className="what-we-do-container">
    <h2 className="what-we-do-container__main-title">What We Do</h2>
    <p className="what-we-do-container__main-content">
      Collaboration is at the core of everything we do. We know that no single
      organization can solve the complex set of issues contributing to local and
      national issues.
    </p>
    <Hyperlink
      href="/take-action"
      title="Get Involved"
      className="what-we-do-container__cta"
    />
    <figure className="what-we-do-container__chamber-figure">
      <Image className="what-we-do-container__figure-image" {...chamberImage} />
      <figcaption className="what-we-do-container__figure-caption">
        Pictured with Chamber President, Holly Staples (Center), are President,
        Dana Rabon (Right) and Vice President, Audrey Clark (Left)
      </figcaption>
    </figure>
    <p className="what-we-do-container__main-content">
      We champion partnerships that bring together expertise, ideas, tools and
      resources in support of the shared goal of creating a better tomorrow.
    </p>
  </div>
);

export default WhatWeDoContainer;
