import { connect } from "react-redux";
import IngredientList from "./IngredientList";
import { getIngredientList } from "../../redux/actions/ingredient";

const mapStateToProps = (state, ownProps) => {
  return {
    ingredientList: state.ingredient.ingredientList,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getIngredientList: () => {
      dispatch(getIngredientList());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IngredientList);
