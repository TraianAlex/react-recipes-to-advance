import { combineReducers } from 'redux';
// import testReducer from './test';
import recipesReducer from './recipes';
import favoritesReducer from './favorites';
import modalsReducer from './modals';

export const makeRootReducer = () => (
  combineReducers({
    // test: testReducer,
    recipes: recipesReducer,
    favorites: favoritesReducer,
    modals: modalsReducer,
  })
);

export default { makeRootReducer };
