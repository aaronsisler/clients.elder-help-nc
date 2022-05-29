import React from "react";
import Hyperlink from "../../atoms/hyperlink";
import { Image } from "../../atoms/image";
import { whoWeAre } from "../../content/who-we-are";

import styles from "./who-we-are-container.module.scss";

const WhoWeAreContainer = () => (
  <div className={styles.whoWeAreContainer}>
    <Image
      className={styles.whoWeAreContainer__splashImage}
      alt={whoWeAre.splashImage.alt}
      src={whoWeAre.splashImage.src}
    />
    <h2 className={styles.whoWeAreContainer__missionTitle}>Our Mission</h2>
    <p className={styles.whoWeAreContainer__missionContent}>
      To develop, organize and provide Health, Education, Local resources and
      Personal needs (HELP) to the elderly and disabled.
    </p>
    <Image
      className={styles.whoWeAreContainer__visionImage}
      alt={whoWeAre.visionImage.alt}
      src={whoWeAre.visionImage.src}
    />
    <h2 className={styles.whoWeAreContainer__visionTitle}>Our Vision</h2>
    <p className={styles.whoWeAreContainer__visionContent}>
      Elder Help is a unique organization that focuses on public education to
      individuals and families dealing with many types of illnesses, diseases,
      and disabilities as well as education on other needs of elders.
    </p>
    <p className={styles.whoWeAreContainer__visionContent}>
      Elder Help will provide assistance and advocacy for elders living in
      residential care communities. Many of these facilities have financial and
      medical shortfalls and other needs unmet by governmental programs.
    </p>
    <Hyperlink
      href="/get-in-touch"
      title="Get&nbsp;Involved"
      className={styles.whoWeAreContainer__cta}
    />
    <h2 className={styles.whoWeAreContainer__partnershipsTitle}>
      Partnerships
    </h2>
    <p className={styles.whoWeAreContainer__partnershipsContent}>
      Collaboration is at the core of everything we do. We know that no single
      organization can solve the complex set of issues contributing to local and
      national issues.
    </p>
    <figure className={styles.whoWeAreContainer__chamberFigure}>
      <Image
        className={styles.whoWeAreContainer__figureImage}
        alt={whoWeAre.chamberImage.alt}
        src={whoWeAre.chamberImage.src}
      />
      <figcaption className={styles.whoWeAreContainer__figureCaption}>
        Pictured with Chamber President, Holly Staples (Center), are President,
        Dana Rabon (Right) and Vice President, Audrey Clark (Left)
      </figcaption>
    </figure>
    <p className={styles.whoWeAreContainer__partnershipsContent}>
      We champion partnerships that bring together expertise, ideas, tools and
      resources in support of the shared goal of creating a better tomorrow.
    </p>
  </div>
);

export default WhoWeAreContainer;
