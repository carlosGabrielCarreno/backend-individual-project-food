const accumulationArray = (arrayOne, arrayTwo) => {
  return arrayOne
    ? (arrayOne = [...arrayOne, ...arrayTwo])
    : (arrayOne = [...arrayTwo]);
};
module.exports = { accumulationArray };
