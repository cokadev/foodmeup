import { GET_RECIPE_LIST_SUCCESS, GET_RECIPE_SUCCESS } from "../actionTypes";
import { createReducer } from "./functions";

const initialState = { recipeList: [] };

const getRecipeListHandlers = {
  [GET_RECIPE_LIST_SUCCESS](state, action) {
    return { ...state, recipeList: action.payload };
  },
};

const getRecipeHandlers = {
  [GET_RECIPE_SUCCESS](state, action) {
    const recipeListFiltered = state.recipeList.filter(
      item => item.sys.id !== action.recipeId,
    );
    return { ...state, recipeList: [...recipeListFiltered, action.payload] };
  },
};

const recipeReducer = createReducer(initialState, {
  ...getRecipeListHandlers,
  ...getRecipeHandlers,
});

export default recipeReducer;
