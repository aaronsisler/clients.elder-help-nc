import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import Image from "../../atoms/image";

import "./goal-widget.scss";

const GoalWidget = ({ className, imgSrc, title }) => (
  <div className={cn("goal-widget", className)}>
    <Image className="goal-widget__image" imgSrc={imgSrc} altText={title} />
    <div className="goal-widget__title">{title}</div>
  </div>
);

Image.propTypes = {
  className: PropTypes.string,
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default GoalWidget;
