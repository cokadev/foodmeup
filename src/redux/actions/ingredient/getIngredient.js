import {
  GET_INGREDIENT_SUCCESS,
  GET_INGREDIENT_ERROR,
} from "../../actionTypes";
import contentfulClient from "../../../lib/contentfulClient";

const getIngredient = ingredientId => {
  return dispatch => {
    contentfulClient
      .getEntries({ "sys.id": ingredientId, include: 2 })
      .then(response => {
        dispatch({
          type: GET_INGREDIENT_SUCCESS,
          payload: response.items[0],
          ingredientId,
        });
      })
      .catch(error => {
        console.error(error);
        dispatch({ type: GET_INGREDIENT_ERROR });
      });
  };
};

export default getIngredient;
