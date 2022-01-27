import { Pane } from "tweakpane";
export const pane = new Pane();
export const PARAMS = {
  circleSize: 60
};

pane.addInput(PARAMS, "circleSize", { min: 0, max: 100, step: 10 });

function draw(ctx) {
  clearCanvas();
  ctx.beginPath();
  ctx.arc(
    PARAMS.circleSize,
    PARAMS.circleSize,
    PARAMS.circleSize,
    0,
    Math.PI * 2,
    true
  );
  ctx.fill();
  window.requestAnimationFrame(() => draw(ctx));
}

function clearCanvas() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
}

const app = document.querySelector("#app");
const ctx = app.getContext("2d");
window.requestAnimationFrame(() => draw(ctx));
