export const fetchRecipes = async (query) => {
  try {
    const response = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes?search=${query}`
    );
    return response.json();
  } catch (error) {
    return error.message;
  }
};
