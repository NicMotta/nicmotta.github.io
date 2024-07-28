export const mySketch = (p) => {
  let axis = {
    maga: {
      x: 0,
      y: 0,
      points: [],
    },
    nic: {
      x: 0,
      y: 0,
      points: [],
    },
  };
  let matchs = [];
  let size = 0;
  let sizeMovement = 8;
  let HEIGHT;
  let WIDTH;

  setInterval(setPoints, 50);

  p.setup = () => {
    WIDTH = p.windowWidth < 1024 ? p.windowWidth : 1000;
    HEIGHT = p.windowWidth < 768 ? p.windowHeight - 400 : p.windowHeight - 200;
    p.createCanvas(WIDTH, HEIGHT);
    axis.maga.x = p.random(50, WIDTH);
    axis.maga.y = p.random(50, HEIGHT);
    axis.nic.x = p.random(50, WIDTH);
    axis.nic.y = p.random(50, HEIGHT);
    axis.nic.points.push({
      x: Math.max(0, Math.min(axis.nic.x, WIDTH)),
      y: Math.max(0, Math.min(axis.nic.y, HEIGHT)),
    });

    axis.maga.points.push({
      x: Math.max(0, Math.min(axis.maga.x, WIDTH)),
      y: Math.max(0, Math.min(axis.maga.y, HEIGHT)),
    });

    p.randomSeed(p.random(2000));
  };

  p.windowResized = () => {
    p.resizeCanvas(WIDTH, HEIGHT);
  };

  function setPoints() {
    let distance =
      axis && p.dist(axis.maga.x, axis.maga.y, axis.nic.x, axis.nic.y);
    let points = axis.nic.points.length;

    if (points > 3000) {
      matchs = [];
      axis.nic.points = [];
      axis.maga.points = [];
    }

    axis.maga.x = axis.maga.x + p.random(-sizeMovement, sizeMovement);
    axis.maga.y = axis.maga.y + p.random(-sizeMovement, sizeMovement);
    axis.nic.x = axis.nic.x + p.random(-sizeMovement, sizeMovement);
    axis.nic.y = axis.nic.y + p.random(-sizeMovement, sizeMovement);

    size = axis.nic.points.length;
    axis.nic.points.push({
      x: Math.max(0, Math.min(axis.nic.x, WIDTH)),
      y: Math.max(0, Math.min(axis.nic.y, HEIGHT)),
    });

    axis.maga.points.push({
      x: Math.max(0, Math.min(axis.maga.x, WIDTH)),
      y: Math.max(0, Math.min(axis.maga.y, HEIGHT)),
    });

    if (distance < 20) {
      matchs.push({
        x: (axis.maga.x + axis.nic.x) / 2,
        y: (axis.maga.y + axis.nic.y) / 2,
      });
    }
  }
  p.draw = () => {
    p.background(255);
    p.fill(255);

    // draw lines
    p.stroke(150);
    for (let i = 0; i < axis.nic.points.length - 1; i++) {
      p.line(
        axis.nic.points[i].x,
        axis.nic.points[i].y,
        axis.nic.points[i + 1].x,
        axis.nic.points[i + 1].y
      );
    }

    for (let i = 0; i < axis.maga.points.length - 1; i++) {
      p.line(
        axis.maga.points[i].x,
        axis.maga.points[i].y,
        axis.maga.points[i + 1].x,
        axis.maga.points[i + 1].y
      );
    }

    // draw match
    for (let i = 0; i < matchs.length; i++) {
      p.stroke(255, 0, 0);
      p.noFill();
      p.ellipse(matchs[i].x, matchs[i].y, 20, 20);
    }

    // draw names
    p.push();
    p.fill(0);
    p.noStroke();
    p.ellipse(axis.maga.points[size].x, axis.maga.points[size].y, 5, 5);
    p.text(
      "[ maga ]",
      axis.maga.points[size].x + 5,
      axis.maga.points[size].y,
      50,
      50
    );
    p.ellipse(axis.nic.points[size].x, axis.nic.points[size].y, 5, 5);
    p.text(
      "[ nic ]",
      axis.nic.points[size].x + 5,
      axis.nic.points[size].y,
      50,
      50
    );
    p.pop();
  };
};
