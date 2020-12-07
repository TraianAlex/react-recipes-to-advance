import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import withModal from '../lib/withModal';
import RecipeList from '../components/RecipeList';
// import { showModal } from '../actions/modals';
// import { toggleFavorite } from '../actions/favorites';

const Favorites = ({ recipes, favorites, onToggleFavorite }) => (
  <main className="px4">
    <h2 className="h2">Favorites</h2>
    <RecipeList
      className=""
      style={{}}
      recipes={recipes.filter(r => favorites.includes(r.id))}
      favorites={favorites}
      onFavorited={recipeId => onToggleFavorite({ recipeId })}
    />
  </main>
);

Favorites.propTypes = {
  recipes: PropTypes.array,
  favorites: PropTypes.array,
  onToggleFavorite: PropTypes.func,
};

const mapStateToProps = state => ({
  recipes: state.recipes,
  favorites: state.favorites,
});

// const mapDispatchToProps = dispatch => ({
//   onToggleFavorite: id => {
//     const message = 'Are you sure you want to unfavorite ?';
//     const onSubmit = () => dispatch(toggleFavorite(id));

//     dispatch(showModal('CONFIRM_MODAL', { message, onSubmit }));
//   },
// });

export default compose(
  // connect(mapStateToProps, mapDispatchToProps),
  connect(mapStateToProps),
  withModal('UNFAVORITE_RECIPE', 'onToggleFavorite'),
)(Favorites);
