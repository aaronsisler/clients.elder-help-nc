import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import "./image.scss";

const Image = ({ altText, className, imgSrc }) => (
  <img className={cn("image", className)} src={imgSrc} alt={altText} />
);

Image.propTypes = {
  altText: PropTypes.string.isRequired,
  className: PropTypes.string,
  imgSrc: PropTypes.string.isRequired
};

export default Image;
