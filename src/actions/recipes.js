export const actionTypes = {
  LOAD_RECIPES_SUCCESS: 'LOAD_RECIPES_SUCCESS',
  LOAD_RECIPES_FAILURE: 'LOAD_RECIPES_FAILURE',
  LOAD_RECIPE_SUCCESS: 'LOAD_RECIPE_SUCCESS',
  LOAD_RECIPE_FAILURE: 'LOAD_RECIPE_FAILURE',
  // LOAD_RECIPES: 'LOAD_RECIPES',
  // LOAD_RECIPE: 'LOAD_RECIPE',
};

export const loadRecipes = () => (dispatch) => (
  // type: actionTypes.LOAD_RECIPES,
  // remote: '/v1/recipes',
  fetch(`${API_URL}/v1/recipes`)
    .then(res => res.json())
    .then(recipes => (
      dispatch({
        type: actionTypes.LOAD_RECIPES_SUCCESS,
        recipes,
      })
    ))
    .catch(error => (
      dispatch({
        type: actionTypes.LOAD_RECIPES_FAILURE,
        error,
      })
    ))
);

export const loadRecipe = id => (dispatch) => (
  fetch(`${API_URL}/v1/recipes/${id}`)
    .then(res => res.json())
    .then(recipe => (
      dispatch({
        type: actionTypes.LOAD_RECIPE_SUCCESS,
        recipe,
      })
    ))
    .catch(error => (
      dispatch({
        type: actionTypes.LOAD_RECIPE_FAILURE,
        id,
        error,
      })
    ))
  // type: actionTypes.LOAD_RECIPE,
  // remote: `/v1/recipes/${id}`,
);

// export default {
//   loadRecipes,
//   loadRecipe,
// };

export const actions = {
  loadRecipes,
  loadRecipe,
};
