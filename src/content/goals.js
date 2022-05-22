import { getCdnUrl } from "../utils";
const CDN_URL = getCdnUrl("/goals");

const goals = [
  {
    key: "goal-health",
    imgSrc: `${CDN_URL}/goal__health.png`,
    title: "Health",
  },
  {
    key: "goal-education",
    imgSrc: `${CDN_URL}/goal__education.png`,
    title: "Education",
  },
  {
    key: "goal-local-resources",
    imgSrc: `${CDN_URL}/goal__local-resources.png`,
    title: "Local Resources",
  },
  {
    key: "goal-personal-needs",
    imgSrc: `${CDN_URL}/goal__personal-needs.png`,
    title: "Personal Needs",
  },
];

export default goals;
