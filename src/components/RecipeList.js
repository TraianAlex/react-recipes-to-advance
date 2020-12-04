import React from "react";
import PropTypes from "prop-types";
import RecipeListItem from "./RecipeListItem";

const RecipeList = ({ recipes, favorites, className, style, ...props }) => (
  <div className={className} style={style}>
    <ul className="list-reset">
      {recipes.map(recipe => (
        <RecipeListItem
          key={recipe.id}
          recipe={recipe}
          favorited={favorites.includes(recipe.id)}
          {...props} // onFavorited
        />
      ))}
    </ul>
  </div>
);

RecipeList.propTypes = {
  recipes: PropTypes.array,
  favorites: PropTypes.array,
  className: PropTypes.string,
  style: PropTypes.object
};

export default RecipeList;
