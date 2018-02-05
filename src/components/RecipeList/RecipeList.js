import React, { PureComponent } from "react";
import RecipeCard from "./RecipeCard";
import { Link } from "react-router-dom";

class RecipeList extends PureComponent {
  componentDidMount() {
    this.props.getRecipeList();
  }

  render() {
    const { recipeList } = this.props;

    return (
      <div>
        {recipeList.map(recipe => (
          <Link to={`/recipe/${recipe.sys.id}`} key={recipe.sys.id}>
            <RecipeCard key={recipe.sys.id} recipe={recipe} />
          </Link>
        ))}
      </div>
    );
  }
}

export default RecipeList;
