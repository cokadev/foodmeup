import {
  GET_INGREDIENT_LIST_SUCCESS,
  GET_INGREDIENT_SUCCESS,
} from "../actionTypes";
import { createReducer } from "./functions";

const initialState = { ingredientList: [] };

const getIngredientListHandlers = {
  [GET_INGREDIENT_LIST_SUCCESS](state, action) {
    return { ...state, ingredientList: action.payload };
  },
};

const getIngredientHandlers = {
  [GET_INGREDIENT_SUCCESS](state, action) {
    const ingredientListFiltered = state.ingredientList.filter(
      item => item.sys.id !== action.ingredientId,
    );
    return {
      ...state,
      ingredientList: [...ingredientListFiltered, action.payload],
    };
  },
};

const ingredientReducer = createReducer(initialState, {
  ...getIngredientListHandlers,
  ...getIngredientHandlers,
});

export default ingredientReducer;
