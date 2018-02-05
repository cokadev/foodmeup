import React, { PureComponent } from "react";
import RecipeCard from "./RecipeCard";

class RecipeList extends PureComponent {
  componentDidMount() {
    this.props.getRecipeList();
  }

  render() {
    const { recipeList } = this.props;

    return (
      <div>
        {recipeList.map(recipe => (
          <RecipeCard key={recipe.sys.id} recipe={recipe} />
        ))}
      </div>
    );
  }
}

export default RecipeList;
