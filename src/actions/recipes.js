// @ts-nocheck
export const actionTypes = {
  LOAD_RECIPES: 'LOAD_RECIPES',
  LOAD_RECIPE: 'LOAD_RECIPE',
};

export const loadRecipes = () => ({
  type: actionTypes.LOAD_RECIPES,
  remote: 'v1/recipes',
});

// dispatch =>
//   fetch(`${API_URL}/v1/recipes`)
//     .then(res => res.json())
//     .then(recipes =>
//       dispatch({
//         type: actionTypes.LOAD_RECIPES_SUCCESS,
//         recipes,
//       }),
//     )
//     .catch(error =>
//       dispatch({
//         type: actionTypes.LOAD_RECIPES_FAILURE,
//         error,
//       }),
//     );

export const loadRecipe = id => ({
  type: actionTypes.LOAD_RECIPE,
  remote: `v1/recipes/${id}`,
});

// dispatch =>
//   fetch(`${API_URL}/v1/recipes/${id}`)
//     .then(res => res.json())
//     .then(recipe =>
//       dispatch({
//         type: actionTypes.LOAD_RECIPE_SUCCESS,
//         recipe,
//       }),
//     )
//     .catch(error =>
//       dispatch({
//         type: actionTypes.LOAD_RECIPE_FAILURE,
//         id,
//         error,
//       }),
//     );

export const actions = {
  loadRecipes,
  loadRecipe,
};
