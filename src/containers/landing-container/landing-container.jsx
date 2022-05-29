import React from "react";
import goals from "../../content/goals";
import Hyperlink from "../../atoms/hyperlink";
import { Image } from "../../atoms/image";
import GoalWidget from "../../components/goal-widget";
import { getCdnUrl } from "../../utils";

import styles from "./landing-container.module.scss";

const CDN_URL = getCdnUrl("/landing");

const splashImage = {
  alt: "Flowers on the front outdoor porch",
  src: `${CDN_URL}/landing-container__splash-image.jpg`,
};

const LandingContainer = () => (
  <div className={styles.landingContainer}>
    <div className={styles.landingContainer__splash}>
      <Image
        className={styles.landingContainer__splashImage}
        alt={splashImage.alt}
        src={splashImage.src}
      />
      <h2 className={styles.landingContainer__splashTitle}>
        Elder Help&apos;s Mission
      </h2>
      <p className={styles.landingContainer__splashMission}>
        To develop, organize and provide Health, Education, Local resources and
        Personal needs (HELP) to the elderly and disabled.
      </p>
      <div className={styles.landingContainer__splashDivide} />
    </div>
    <div className={styles.landingContainer__goals}>
      {goals.map(({ key, imgSrc, title }) => (
        <GoalWidget key={key} imgSrc={imgSrc} title={title} />
      ))}
    </div>
    <Hyperlink
      href="/who-we-are"
      title="More&nbsp;About&nbsp;Us"
      className={styles.landingContainer__cta}
    />
  </div>
);

export default LandingContainer;
