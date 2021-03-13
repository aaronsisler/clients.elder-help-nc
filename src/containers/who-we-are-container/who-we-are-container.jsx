import React from "react";
import Image from "../../atoms/image";
import { getCdnUrl } from "../../utils";

import "./who-we-are-container.scss";

const CDN_URL = getCdnUrl("/who-we-are");

const splashImage = {
  altText: "Elderly man with an aide looking at computer",
  imgSrc: `${CDN_URL}/who-we-are-container__man-with-aide.jpg`
};

const WhoWeAreContainer = () => (
  <div className="who-we-are-container">
    <Image className="who-we-are-container__splash-image" {...splashImage} />
    <h2 className="who-we-are-container__mission-title">Our Mission</h2>
    <p className="who-we-are-container__mission-content">
      To develop, organize and provide Health, Education, Local resources and
      Personal needs (HELP) to the elderly and disabled.
    </p>
    <h3 className="who-we-are-container__vision-title">Our Vision</h3>
    <p className="who-we-are-container__vision-content">
      Elder Help is a unique organization that focuses on public education to
      individuals and families dealing with many types of illnesses, diseases
      and disabilities as well as education on other needs of elders. Elder Help
      will provide assistance and advocacy for elders living in residential care
      communities who have financial and medical shortfalls and other needs
      unmet by governmental programs.
    </p>
  </div>
);

export default WhoWeAreContainer;
