import { getCdnUrl } from "../utils";
const CDN_URL = getCdnUrl("/who-we-are");

const splashImage = {
  alt: "Elderly man with an aide looking at computer",
  src: `${CDN_URL}/who-we-are-container__splash.jpg`,
};

const visionImage = {
  alt: "Conference where a girl is taking notes on a paper pad",
  src: `${CDN_URL}/who-we-are-container__vision.jpg`,
};

const chamberImage = {
  alt: "Members of Elder Help with Chamber of Commerce member",
  src: `${CDN_URL}/who-we-are-container__chamber.jpg`,
};

const whoWeAre = {
  splashImage,
  visionImage,
  chamberImage,
};

export { whoWeAre };
