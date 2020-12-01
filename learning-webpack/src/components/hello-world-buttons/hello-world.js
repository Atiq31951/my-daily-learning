import './hello-world.css';

export default class HelloWorld {
  render() {
    const ButtonEl = document.createElement("button");
    ButtonEl.innerHTML = "Click On";
    ButtonEl.classList.add("hello-world-button");
    const RootEl = document.getElementById("root");
    ButtonEl.onclick = function () {
      const Peragraph1 = document.createElement('p');
      Peragraph1.innerHTML = "Hello clicked";
      Peragraph1.classList.add("hello-world-text");
      RootEl.appendChild(Peragraph1);
    }
    RootEl.appendChild(ButtonEl);
  }
}
