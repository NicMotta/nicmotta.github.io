import { getWidth, findMinMaxCoords } from "../helpers";
import { DATA } from "./data";

export const bikeTravel = (p) => {
  let HEIGHT;
  let WIDTH;

  let points = [{ x: -1, y: -1 }];
  let counter = 0;
  const { minLat, maxLat, minLng, maxLng } = findMinMaxCoords(DATA);

  setInterval(setPoints, 500);

  p.setup = () => {
    WIDTH = getWidth(p.windowWidth, p.windowHeight).width;
    HEIGHT = getWidth(p.windowWidth, p.windowHeight).height;
    p.createCanvas(WIDTH, HEIGHT);
  };

  p.windowResized = () => {
    p.resizeCanvas(WIDTH, HEIGHT);
  };

  function setPoints() {
    let x = p.map(DATA[counter].lat, minLat, maxLat, WIDTH, 0);
    let y = p.map(DATA[counter].lng, minLng, maxLng, HEIGHT, 0);
    points.push({ x, y });
    counter++;

    if (counter >= DATA.length) {
      counter = 0;
      points = [{ x: -1, y: -1 }];
    }
  }

  p.draw = () => {
    p.background(255);

    // draw lines
    p.noStroke();
    p.fill(0);
    points.forEach((point) => {
      p.ellipse(point.x, point.y, 4, 4);
    });

    let distance = p.dist(points[counter].x, points[counter].y, 0, 0) / 3;
    p.text(
      `[ nic on bike, distance to the river: ${distance.toFixed(0)} mts. ]`,
      points[counter].x + 5,
      points[counter].y,
      300,
      300
    );

    // draw river
    for (let i = 0; i < 5; i++) {
      const DISTANCE = 200;
      p.stroke(100 + i * 30);
      p.noFill();
      p.ellipse(0, 0, 100 + i * DISTANCE, 100 + i * DISTANCE);
    }
  };
};
