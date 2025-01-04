const body = document.querySelector("body");

document.querySelector("html").addEventListener("mousemove", (event) => {
  const x = event.x / -25;
  const y = event.y / -25;
  body.style.backgroundPositionX = x.toString() + "px";
  body.style.backgroundPositionY = y.toString() + "px";
});
