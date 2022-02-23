import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import Image from "../../atoms/image";

import styles from "./goal-widget.module.scss";

const GoalWidget = ({ className, imgSrc, title }) => (
  <div className={cn("goal-widget", className)}>
    <Image
      className="goal-widget__image"
      src={imgSrc}
      alt={title}
      layout="fill"
    />
    <div className="goal-widget__title">{title}</div>
  </div>
);

GoalWidget.propTypes = {
  className: PropTypes.string,
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default GoalWidget;
