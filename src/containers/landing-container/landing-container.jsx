import React from "react";
import goals from "../../content/goals";
import GoalWidget from "../../components/goal-widget";
import "./landing-container.scss";

const LandingContainer = () => (
  <div className="landing-container">
    <div className="landing-container__splash">Splash Image</div>
    <h2 className="landing-container__title">Elder Help NC's Mission</h2>
    <p className="landing-container__mission">
      To develop, organize and provide Health, Education, Local resources and
      Personal needs (HELP) to the elderly and disabled.
    </p>
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
  </div>
);

export default LandingContainer;
