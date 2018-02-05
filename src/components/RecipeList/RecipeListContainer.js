import { connect } from "react-redux";
import RecipeList from "./RecipeList";
import { getRecipeList } from "../../redux/actions/recipe";

const mapStateToProps = (state, ownProps) => {
  return {
    recipeList: state.recipe.recipeList,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getRecipeList: () => {
      dispatch(getRecipeList());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);
