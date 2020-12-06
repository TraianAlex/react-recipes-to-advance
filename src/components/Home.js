import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RecipeList from '../components/RecipeList';
import RecipeDetail from '../components/RecipeDetail';
import { toggleFavorite } from '../actions/favorites';
import { loadRecipe } from '../actions/recipes';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentRecipe: null,
    };
  }

  onRecipeClick = id => {
    this.props.loadRecipe(id).then(action => {
      this.setState({ currentRecipe: action.recipe });
    });
  };

  // onRowClick = id => {
  //   // this.props.dispatch(this.props.toggleFavorite(id));
  //   const message = 'Are you sure you want to unfavorite ?';
  //   const onSubmit = () => this.props.dispatch(this.props.toggleFavorite(id));
  //   this.props.dispatch(this.props.showModal('CONFIRM_MODAL', { message, onSubmit }));
  // };

  render() {
    const { recipes, favorites, onToggleFavorite } = this.props;
    const { currentRecipe } = this.state;

    return (
      <main className="px4 flex">
        <div style={{ flex: 2 }}>
          <h2 className="h2">Recipes</h2>
          <RecipeList
            className=""
            style={{}}
            recipes={recipes}
            favorites={favorites}
            onClick={this.onRecipeClick}
            onFavorited={onToggleFavorite}
          />
        </div>
        <RecipeDetail
          className="ml4"
          recipe={currentRecipe}
          style={{ flex: 3 }}
        />
      </main>
    );
  }
}

Home.propTypes = {
  recipes: PropTypes.array,
  favorites: PropTypes.array,
  onToggleFavorite: PropTypes.func,
  // toggleFavorite: PropTypes.func,
  loadRecipe: PropTypes.func,
  // dispatch: PropTypes.func,
  // showModal: PropTypes.func,
};

const mapStateToProps = state => ({
  favorites: state.favorites,
  recipes: state.recipes,
});

const mapDispatchToProps = {
  onToggleFavorite: toggleFavorite,
  // toggleFavorite,
  loadRecipe,
  // showModal,
};

// const mapDispatchToProps = dispatch => (
//   {
//     onToggleFavorite: id => {
//       const message = 'Are you sure you want to unfavorite ?';
//       const onSubmit = () => dispatch(toggleFavorite(id));
//       dispatch(showModal('CONFIRM_MODAL', { message, onSubmit }));
//     },
//     loadRecipe: id => dispatch(loadRecipe(id)),
//   }
// );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
