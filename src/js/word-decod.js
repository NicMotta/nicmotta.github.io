import { WORDS_LIST } from "./helpers";

export const wordDecod = (p) => {
  let HEIGHT;
  let WIDTH;
  let stop = false;
  let word = {
    first: "",
    second: "",
    third: "",
    fourty: "",
    five: "",
    six: "",
  };

  setInterval(setWord, 125);

  setInterval(setRandomSeed, 30000);

  p.setup = () => {
    WIDTH = p.windowWidth < 1000 ? p.windowWidth : 1000;
    HEIGHT = WIDTH < 768 ? p.windowHeight - 400 : p.windowHeight - 200;
    p.createCanvas(WIDTH, HEIGHT);
    p.textFont("JetBrains Mono");
    p.textSize(24);
    p.textAlign(p.CENTER, p.CENTER);
    p.randomSeed(20000);
  };

  p.windowResized = () => {
    p.resizeCanvas(WIDTH, HEIGHT);
  };

  function setRandomSeed() {
    p.randomSeed(20000);
  }

  function setWord() {
    if (!stop) {
      word = {
        one: WORDS_LIST[p.random(0, WORDS_LIST.length - 1).toFixed(0)],
        two: WORDS_LIST[p.random(0, WORDS_LIST.length - 1).toFixed(0)],
        three: WORDS_LIST[p.random(0, WORDS_LIST.length - 1).toFixed(0)],
        four: WORDS_LIST[p.random(0, WORDS_LIST.length - 1).toFixed(0)],
        five: WORDS_LIST[p.random(0, WORDS_LIST.length - 1).toFixed(0)],
        six: WORDS_LIST[p.random(0, WORDS_LIST.length - 1).toFixed(0)],
        seven: WORDS_LIST[p.random(0, WORDS_LIST.length - 1).toFixed(0)],
        eigth: WORDS_LIST[p.random(0, WORDS_LIST.length - 1).toFixed(0)],
      };
    }

    if (
      word.one === "g" &&
      word.two === "e" &&
      word.three === "o" &&
      word.four === "m" &&
      word.five === "e" &&
      word.six === "t" &&
      word.seven === "r" &&
      word.eigth === "y"
    ) {
      stop = true;
    }
  }

  p.draw = () => {
    p.background(255);
    p.fill(0);
    p.textSize(24);
    p.text(
      `[ ${word.one} ${word.two} ${word.three} ${word.four} ${word.five} ${word.six} ${word.seven} ${word.eigth} ]`,
      WIDTH / 2,
      HEIGHT / 2
    );
    p.textSize(12);
    if (WIDTH < 500) {
      p.text(
        "one in 3.21387609E+60 posibilidades.",
        WIDTH / 2,
        HEIGHT / 2 + 50
      );
      p.text("de que encuentre la palabra.", WIDTH / 2, HEIGHT / 2 + 70);
    } else {
      p.text(
        "only one possibility out of 3.21387609E+60 to find the word.",
        WIDTH / 2,
        HEIGHT / 2 + 50
      );
    }

    if (stop) {
      p.text("congratulations!", WIDTH / 2, HEIGHT / 2 + 100);
      p.text(
        "fractal geometry reveals that there are shapes that can possess a fractional dimension",
        WIDTH / 2,
        HEIGHT / 2 + 120
      );
      p.text(
        "leading us to consider the possibilities of geometry in various dimensions, you are part of one.",
        WIDTH / 2,
        HEIGHT / 2 + 140
      );
    }
  };
};
