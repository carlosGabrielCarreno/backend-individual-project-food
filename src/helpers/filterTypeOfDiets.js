const filterTypeOfDiets = (array) => {
  let types = [];
  array.forEach((e) => {
    const { diets } = e;
    types = [...types, diets];
  });
  types = types.flat();
  const a = types.filter((item, index) => {
    return types.indexOf(item) === index;
  });
  return a;
};

module.exports = { filterTypeOfDiets };
