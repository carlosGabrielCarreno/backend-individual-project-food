const axios = require('axios');

const path = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=';

const getRecipesByApi = async () => {
  try {
    const url = `${path}${process.env.API_KEY}&number=100&addRecipeInformation=true`;
    const {
      data: { results },
    } = await axios.get(url);
    return results;
  } catch (error) {
    return [];
  }
};

module.exports = {
  getRecipesByApi,
};
