export const fetchSelectedRecipe = async (RECIPE_ID) => {
  try {
    const response = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${RECIPE_ID}`
    );
    return response.json();
  } catch (error) {
    return error.message;
  }
};
