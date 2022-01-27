import { Pane } from "tweakpane";
export const pane = new Pane();
export const PARAMS = {
  circleSize: 10,
  sizePerSide: 16,
  offset: 20,
};

pane.addInput(PARAMS, "sizePerSide", { min: 0, max: 20, step: 1 });

function draw(ctx) {
  const { circleSize, sizePerSide, offset } = PARAMS;
  clearCanvas();
  const totalCircle = sizePerSide * sizePerSide;

  [...Array(totalCircle)].forEach((value, index) => {
    const colPos = index % sizePerSide;
    const rowPos = Math.floor(index / sizePerSide);
    const x = offset + circleSize * 2 * colPos;
    const y = offset + circleSize * 2 * rowPos;

    const radius =
      (((index % (sizePerSide + 1)) / sizePerSide) * sizePerSide) / 2;

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, true);
    ctx.fill();
  });
  window.requestAnimationFrame(() => draw(ctx));
}

function clearCanvas() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
}

const app = document.querySelector("#app");
const ctx = app.getContext("2d");
window.requestAnimationFrame(() => draw(ctx));
