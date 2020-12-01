import DomLoader from "./dom-loader";
import HelloWorldButton from "../components/hello-world-buttons/hello-world";

function showCurrentTime() {
  const date = new Date();
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  if (parseInt(hr) < 10) {
    hr = "0" + hr;
  }
  if (parseInt(min) < 10) {
    min = "0" + min;
  }
  if (parseInt(sec) < 10) {
    sec = "0" + sec;
  }
  DomLoader.HourLoader.textContent = hr;
  DomLoader.MinuiteLoader.textContent = min;
  DomLoader.SecondLoader.textContent = sec;
}

setInterval(() => {
  showCurrentTime();
}, 1000);

DomLoader.addImage();
new HelloWorldButton().render();
