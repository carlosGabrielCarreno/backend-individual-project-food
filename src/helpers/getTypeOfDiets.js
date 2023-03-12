const { TypeOfDiet } = require('../db');
const { filterTypeOfDiets } = require('./filterTypeOfDiets');

const getTypeOfDiets = async () => {
  try {
    const typesOfDiets = await TypeOfDiet.findAll({
      attributes: ['diets'],
    });
    const typesOfDietsFiltered = filterTypeOfDiets(typesOfDiets);
    return typesOfDietsFiltered;
  } catch (error) {
    return new Error(error);
  }
};

module.exports = { getTypeOfDiets };
