const { response, request } = require('express');
const { getTypeOfDiets } = require('../helpers');
const { Recipe, TypeOfDiet } = require('../db');

const createRecipe = async (req = request, res = response) => {
  const {
    title,
    image,
    vegetarian,
    vegan,
    glutenFree,
    summary,
    healthScore,
    analyzedInstructions,
    cuisines,
    dishTypes,
    diets,
  } = req.body;

  if (!title && !summary) {
    res.status(404).send('missing data!');
  } else {
    try {
      //
      const objRecipe = {
        cuisines,
        dishTypes,
        title,
        image,
        vegetarian,
        vegan,
        glutenFree: glutenFree.toString(),
        summary,
        healthScore,
        analyzedInstructions: JSON.stringify(analyzedInstructions),
      };
      const newRecipe = await Recipe.create(objRecipe);
      //load the typeOfDiet
      if (diets && diets.length) {
        const newTypeOfDiet = await TypeOfDiet.create({ diets: diets });
        newRecipe.addTypeOfDiets(newTypeOfDiet);
      }
      //
      if (newRecipe) {
        res.status(200).send('Recipe Create');
      } else {
        throw new Error(newRecipe);
      }
    } catch (error) {
      res.status(404).json(error.message);
    }
  }
};

const getDietTypes = async (req = request, res = response) => {
  try {
    const types = await getTypeOfDiets();
    res.json(types);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

module.exports = {
  createRecipe,
  getDietTypes,
};
