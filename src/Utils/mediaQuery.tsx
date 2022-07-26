import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
  desktop: "1920px",
  tablet: "1280px",
  mobile: "414px",
});

export default customMedia;
