import React from "react";
import Hyperlink from "../../atoms/hyperlink";
import { Image } from "../../atoms/image";
import whatWeDo from "../../content/what-we-do";

import styles from "./what-we-do-container.module.scss";

const WhatWeDoContainer = () => (
  <div className={styles.whatWeDoContainer}>
    <h2 className={styles.whatWeDoContainer__title}>What We Do</h2>
    <p className={styles.whatWeDoContainer__content}>
      Being a part of a community is not something we take lightly. Our mission
      allows us to bring together different audiences. This mingling allows for
      educational opportunites in the needs of the senior community as well as
      provide much needed services.
    </p>
    <Hyperlink
      href="/get-in-touch"
      title="Get Involved"
      className={styles.whatWeDoContainer__cta}
    />
    <h2 className={styles.whatWeDoContainer__title}>Recent Events</h2>
    <div className={styles.whatWeDoContainer__events}>
      {whatWeDo.map(({ key, src, alt, content }) => (
        <div className={styles.whatWeDoContainer__event} key={key}>
          <Image
            className={styles.whatWeDoContainer__eventImage}
            alt={alt}
            src={src}
          />
          <p className={styles.whatWeDoContainer__eventContent}>{content}</p>
        </div>
      ))}
    </div>
  </div>
);

export default WhatWeDoContainer;
