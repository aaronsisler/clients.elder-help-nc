import React from "react";
import NextImage from "next/image";
import cn from "classnames";
import PropTypes from "prop-types";

import styles from "./image-next.module.scss";

const ImageAtom = ({
  alt,
  className,
  height,
  layout,
  priority = false,
  src,
  width,
}) => (
  <div className={cn(className, styles.image)}>
    <NextImage
      className={styles.imageContent}
      src={src}
      alt={alt}
      layout={layout}
      priority={priority}
      unoptimized={true}
      height={height}
      width={width}
    />
  </div>
);

ImageAtom.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  height: PropTypes.any,
  layout: PropTypes.string,
  priority: PropTypes.bool,
  width: PropTypes.any,
};

export default ImageAtom;
