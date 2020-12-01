import AppleGPEG from "../images/jpeg/apple.jpeg";
import AppleWEBP from "../images/webp/apple.webp";
import { MODE } from "../store/constants.yaml";

const HourLoader = document.getElementById("hour");
const MinuiteLoader = document.getElementById("minuite");
const SecondLoader = document.getElementById("second");

function addImage() {
  const ImgEl = document.createElement("img");
  ImgEl.src = AppleGPEG;
  ImgEl.width = MODE === 'dev' ? 300 : 400;
  ImgEl.height = 300;

  const RootDiv = document.getElementById("root");
  RootDiv.appendChild(ImgEl);
}

export default {
  HourLoader,
  MinuiteLoader,
  SecondLoader,
  addImage,
};
