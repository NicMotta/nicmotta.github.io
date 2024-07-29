import { getWidth } from "./helpers";

export const polygon = (p) => {
  let HEIGHT;
  let WIDTH;
  //----

  p.setup = () => {
    WIDTH = getWidth(p.windowWidth, p.windowHeight).width;
    HEIGHT = getWidth(p.windowWidth, p.windowHeight).height;
    p.createCanvas(WIDTH, HEIGHT, p.WEBGL);
    p.angleMode(p.DEGREES);
    p.orbitControl();
    // ----
  };

  p.windowResized = () => {
    p.resizeCanvas(WIDTH, HEIGHT);
  };

  p.draw = () => {
    p.background(255);

    p.push();
    p.translate(0, 0, 0);
    p.noFill();
    p.scale(4);
    p.rotateZ(p.frameCount * 200);
    p.rotateX(p.frameCount * 200);
    p.rotateY(p.frameCount * 200);
    p.box(70, 70, 70);
    p.pop();
  };
};
