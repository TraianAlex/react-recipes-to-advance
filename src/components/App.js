// /* eslint-disable react/no-unused-state */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import Favorites from './Favorites';
import Recipe from './Recipe';
import NotFound from './NotFound';
import Header from '../components/Header';
import { loadRecipes } from '../actions/recipes';
import RootModal from './RootModal';

class App extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     recipes: [],
  //     // favorites: [],
  //   };
  // }

  componentDidMount() {
    // fetch(`${API_URL}/v1/recipes`)
    //   .then(res => res.json())
    //   .then(recipes => {
    //     this.setState({ recipes });
    //   });
    this.props.loadRecipes();
  }

  // toggleFavorite = id => {
  //   this.setState(({ favorites, ...state }) => {
  //     const idx = favorites.indexOf(id);

  //     if (idx !== -1) {
  //       return { ...state, favorites: favorites.filter(f => f !== id) };
  //     }
  //     return { ...state, favorites: [...favorites, id] };
  //   });
  // };

  render() {
    return (
      <BrowserRouter>
        <main>
          <Header />
          <RootModal />
          <Switch>
            <Redirect from="/home" to="/" />
            <Route
              exact
              path="/"
              component={Home}
              // render={() => (
                // <Home
                  // state={this.state}
                  // recipes={this.state.recipes}
                  // toggleFavorite={this.toggleFavorite}
                // />
              // )}
            />
            <Route
              path="/favorites"
              component={Favorites}
              // render={() => (
                // <Favorites
                  // state={this.state}
                  // recipes={this.state.recipes}
                  // toggleFavorite={this.toggleFavorite}
                // />
              // )}
            />
            <Route path="/recipe/:id" component={Recipe} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  loadRecipes: PropTypes.func.isRequired,
};

export default connect(null, { loadRecipes })(App);
