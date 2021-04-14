import React from "react";
import goals from "../../content/goals";
import Hyperlink from "../../atoms/hyperlink";
import Image from "../../atoms/image";
import GoalWidget from "../../components/goal-widget";
import { getCdnUrl } from "../../utils";

import "./landing-container.scss";

const CDN_URL = getCdnUrl("/landing");

const splashImage = {
  altText: "Flowers on the front outdoor porch",
  imgSrc: `${CDN_URL}/landing-container__splash-image.jpg`
};

const LandingContainer = () => (
  <div className="landing-container">
    <div className="landing-container__splash">
      <Image className="landing-container__splash-image" {...splashImage} />
      <h2 className="landing-container__splash-title">Elder Help's Mission</h2>
      <p className="landing-container__splash-mission">
        To develop, organize and provide Health, Education, Local resources and
        Personal needs (HELP) to the elderly and disabled.
      </p>
      <div className="landing-container__splash-divide" />
    </div>
    <div className="landing-container__goals">
      {goals.map(({ key, imgSrc, title }) => (
        <GoalWidget
          key={key}
          className="landing-container__goal-widget"
          imgSrc={imgSrc}
          title={title}
        />
      ))}
    </div>
    <Hyperlink
      href="/who-we-are"
      title="More&nbsp;About&nbsp;Us"
      className="landing-container__cta"
    />
  </div>
);

export default LandingContainer;
