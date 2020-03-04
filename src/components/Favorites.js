import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RecipeList from '../components/RecipeList';
import { showModal } from '../actions/modals';
import { toggleFavorite } from '../actions/favorites';

// const Favorites = ({ state, toggleFavorite }) => (
const Favorites = ({ recipes, favorites, onToggleFavorite }) => (
  <main className="px4">
    <h2 className="h2">Favorites</h2>
    <RecipeList
      // recipes={state.recipes.filter(r => state.favorites.includes(r.id))}
      recipes={recipes.filter(r => favorites.includes(r.id))}
      // favorites={state.favorites}
      favorites={favorites}
      onFavorited={onToggleFavorite}
    />
  </main>
);

Favorites.propTypes = {
  // state: PropTypes.object,
  recipes: PropTypes.array,
  favorites: PropTypes.array,
  onToggleFavorite: PropTypes.func,
};

const mapStateToProps = (state) => ({
  recipes: state.recipes,
  favorites: state.favorites,
});

const mapDispatchToProps = (dispatch) => ({
  onToggleFavorite: id => {
    const message = 'Are you sure you want to unfavorite ?';
    const onSubmit = () => dispatch(toggleFavorite(id));
    dispatch(showModal('CONFIRM_MODAL', { message, onSubmit }));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
