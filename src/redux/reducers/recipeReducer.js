import { GET_RECIPE_LIST_SUCCESS } from "../actionTypes";
import { createReducer } from "./functions";

const initialState = { recipeList: [] };

const getRecipeListHandlers = {
  [GET_RECIPE_LIST_SUCCESS](state, action) {
    return { ...state, recipeList: action.payload };
  },
};

const recipeReducer = createReducer(initialState, {
  ...getRecipeListHandlers,
});

export default recipeReducer;
