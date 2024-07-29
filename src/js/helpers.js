export const getWidth = (width, height) => {
  const WIDTH = width < 1024 ? width : 1000;
  const HEIGHT = width < 768 ? height - 400 : height - 200;
  return { width: WIDTH, height: HEIGHT };
};
