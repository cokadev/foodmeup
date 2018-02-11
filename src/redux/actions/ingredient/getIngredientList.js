import {
  GET_INGREDIENT_LIST_SUCCESS,
  GET_INGREDIENT_LIST_ERROR,
} from "../../actionTypes";
import contentfulClient from "../../../lib/contentfulClient";

const getIngredientList = () => {
  return dispatch => {
    contentfulClient
      .getEntries({ content_type: "ingredient", include: 10 })
      .then(response => {
        dispatch({
          type: GET_INGREDIENT_LIST_SUCCESS,
          payload: response.items,
        });
      })
      .catch(error => {
        console.error(error);
        dispatch({ type: GET_INGREDIENT_LIST_ERROR });
      });
  };
};

export default getIngredientList;
