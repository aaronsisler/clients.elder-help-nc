import { getCdnUrl } from "../utils";
const CDN_URL = getCdnUrl("/what-we-do");

const whatWeDo = [
  {
    key: "adopt-a-senior",
    altText: "Replace",
    imgSrc: `${CDN_URL}/what-we-do-container__adopt-a-senior.jpg`,
    content: `Participated in the Adopt A Senior program which allows us to bring a
    personal touch to Seniors by directly providing them with some outside
    contact as well as with gifts to let them know they are not forgotten
    and alone.`
  },
  {
    key: "bertie",
    altText: "Replace",
    imgSrc: `${CDN_URL}/what-we-do-container__bertie.jpg`,
    content: "Donated incontinence supplies to the tornado victims of Bertie."
  },
  {
    key: "dementia",
    altText: "Replace",
    imgSrc: `${CDN_URL}/what-we-do-container__dementia.jpg`,
    content: "Participated in a community dementia awareness seminar."
  }
];

export default whatWeDo;
