export const getWidth = (width, height) => {
  const WIDTH = width < 1024 ? width : 1000;
  const HEIGHT = width < 768 ? height - 400 : height - 200;
  return { width: WIDTH, height: HEIGHT };
};

export function findMinMaxCoords(data) {
  let minLat = data[0].lat;
  let maxLat = data[0].lat;
  let minLng = data[0].lng;
  let maxLng = data[0].lng;

  data.forEach((point) => {
    if (point.lat < minLat) minLat = point.lat;
    if (point.lat > maxLat) maxLat = point.lat;
    if (point.lng < minLng) minLng = point.lng;
    if (point.lng > maxLng) maxLng = point.lng;
  });

  return { minLat, maxLat, minLng, maxLng };
}

export const WORDS_LIST = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "ñ",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "$",
  "%",
  "@",
  "{",
  "}",
  "$",
  "|",
  "#",
  "¿",
  "?",
  "!",
  "¡",
  "+",
  "*",
  "Ç",
  "[",
  "]",
  ".",
  ":",
  ";",
  ",",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "<",
  ">",
  "-",
  "_",
  "/",
  "(",
  ")",
  "=",
];
