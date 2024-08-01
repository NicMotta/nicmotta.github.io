// Exporting a function called 'mySketch'
export const simpleRandomDrawer = (p) => {
  const axis = {
    x: 0,
    y: 0,
  };
  let sizeCircle = 4;
  let sizeMovement = 5;
  let HEIGHT;
  let WIDTH;
  let points = [];

  p.setup = () => {
    WIDTH = p.windowWidth < 1000 ? p.windowWidth : 1000;
    HEIGHT = WIDTH < 768 ? p.windowHeight - 400 : p.windowHeight - 200;
    p.createCanvas(WIDTH, HEIGHT);
    axis.x = WIDTH / 2;
    axis.y = HEIGHT / 2;
    p.randomSeed(p.random(2000));
    sizeMovement = p.random(1, 8);
  };

  p.windowResized = () => {
    p.resizeCanvas(WIDTH, HEIGHT);
  };

  p.draw = () => {
    p.fill(0);
    axis.x = axis.x + p.random(-sizeMovement, sizeMovement);
    axis.y = axis.y + p.random(-sizeMovement, sizeMovement);
    p.ellipse(axis.x, axis.y, sizeCircle, sizeCircle);

    if (axis.x > WIDTH) {
      axis.x = WIDTH;
    }
    if (axis.y > HEIGHT) {
      axis.y = HEIGHT;
    }
    if (axis.x < 0) {
      axis.x = 0;
    }
    if (axis.y < 0) {
      axis.y = 0;
    }
  };
};
