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
  let run = 0;

  setInterval(cleanCanvas, 120000);

  p.setup = () => {
    WIDTH = p.windowWidth < 1000 ? p.windowWidth : 1000;
    HEIGHT = WIDTH < 768 ? p.windowHeight - 400 : p.windowHeight - 200;
    p.createCanvas(WIDTH, HEIGHT);
    axis.x = WIDTH / 2;
    axis.y = HEIGHT / 2;
    p.textFont("JetBrains Mono");
    p.textSize(14);
    p.textAlign(p.CENTER, p.CENTER);
    p.randomSeed(p.random(2000));
    sizeMovement = p.random(1, 8);
  };

  p.windowResized = () => {
    p.resizeCanvas(WIDTH, HEIGHT);
  };

  function cleanCanvas() {
    run = run + 1;
    p.background(255);
    p.randomSeed(p.random(2000));
    axis.x = WIDTH / 2;
    axis.y = HEIGHT / 2;
  }

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

    p.text(`runs: ${run}`, WIDTH / 2, HEIGHT - 50);
  };
};
