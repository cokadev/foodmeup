import { connect } from "react-redux";
import Recipe from "./Recipe";
import recipeSelector from "../../redux/selectors/recipeSelector";
import getRecipe from "../../redux/actions/recipe/getRecipe";

const mapStateToProps = (state, ownProps) => {
  return {
    recipe: recipeSelector(state, ownProps),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getRecipe: recipeId => {
      dispatch(getRecipe(recipeId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
