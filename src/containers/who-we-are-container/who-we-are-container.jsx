import React from "react";
import Hyperlink from "../../atoms/hyperlink";
import Image from "../../atoms/image";
import { getCdnUrl } from "../../utils";

import "./who-we-are-container.scss";

const CDN_URL = getCdnUrl("/who-we-are");

const splashImage = {
  altText: "Elderly man with an aide looking at computer",
  imgSrc: `${CDN_URL}/who-we-are-container__splash.jpg`
};

const visionImage = {
  altText: "Conference where a girl is taking notes on a paper pad",
  imgSrc: `${CDN_URL}/who-we-are-container__vision.jpg`
};

const chamberImage = {
  altText: "Members of Elder Help with Chamber of Commerce member",
  imgSrc: `${CDN_URL}/who-we-are-container__chamber.jpg`
};

const WhoWeAreContainer = () => (
  <div className="who-we-are-container">
    <Image className="who-we-are-container__splash-image" {...splashImage} />
    <h2 className="who-we-are-container__mission-title">Our Mission</h2>
    <p className="who-we-are-container__mission-content">
      To develop, organize and provide Health, Education, Local resources and
      Personal needs (HELP) to the elderly and disabled.
    </p>
    <Image className="who-we-are-container__vision-image" {...visionImage} />
    <h3 className="who-we-are-container__vision-title">Our Vision</h3>
    <p className="who-we-are-container__vision-content">
      Elder Help is a unique organization that focuses on public education to
      individuals and families dealing with many types of illnesses, diseases,
      and disabilities as well as education on other needs of elders.
    </p>
    <p className="who-we-are-container__vision-content">
      Elder Help will provide assistance and advocacy for elders living in
      residential care communities. Many of these facilities have financial and
      medical shortfalls and other needs unmet by governmental programs.
    </p>
    <h3 className="who-we-are-container__partnerships-title">Partnerships</h3>
    <p className="who-we-are-container__partnerships-content">
      Collaboration is at the core of everything we do. We know that no single
      organization can solve the complex set of issues contributing to local and
      national issues.
    </p>
    <Hyperlink
      href="/take-action"
      title="Get Involved"
      className="who-we-are-container__cta"
    />
    <figure className="who-we-are-container__chamber-figure">
      <Image className="who-we-are-container__figure-image" {...chamberImage} />
      <figcaption className="who-we-are-container__figure-caption">
        Pictured with Chamber President, Holly Staples (Center), are President,
        Dana Rabon (Right) and Vice President, Audrey Clark (Left)
      </figcaption>
    </figure>
    <p className="who-we-are-container__partnerships-content">
      We champion partnerships that bring together expertise, ideas, tools and
      resources in support of the shared goal of creating a better tomorrow.
    </p>
  </div>
);

export default WhoWeAreContainer;
