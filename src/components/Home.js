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

  // onRecipeClick = id => {
  //   // fetch(`${API_URL}/v1/recipes/${id}`)
  //   //   .then(res => res.json())
  //   //   .then(recipe => {
  //   //     this.setState({ currentRecipe: recipe });
  //   //   });
  //   this.props.loadRecipe(id)
  // };
  onRecipeClick = id => {
    this.props.loadRecipe(id).then(action => {
      this.setState({ currentRecipe: action.recipe });
    });
  }

  render() {
    // const { state, toggleFavorite } = this.props;
    const { recipes, favorites, onToggleFavorite } = this.props;
    const { currentRecipe } = this.state;

    return (
      <main className="px4 flex">
        <div style={{ flex: 2 }}>
          <h2 className="h2">Recipes</h2>
          <RecipeList
            // recipes={state.recipes}
            recipes={recipes}
            // favorites={state.favorites}
            favorites={favorites}
            onClick={this.onRecipeClick}
            // onFavorited={toggleFavorite}
            // onFavorited={this.props.toggleFavorite}
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
  // state: PropTypes.object,
  recipes: PropTypes.array,
  favorites: PropTypes.array,
  // toggleFavorite: PropTypes.func,
  onToggleFavorite: PropTypes.func,
  loadRecipe: PropTypes.func,
};

const mapStateToProps = (state) => ({
  favorites: state.favorites,
  recipes: state.recipes,
});

const mapDispatchToProps = {
  onToggleFavorite: toggleFavorite,
  loadRecipe,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
