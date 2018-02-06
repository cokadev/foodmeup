import { GET_RECIPE_SUCCESS, GET_RECIPE_ERROR } from "../../actionTypes";
import contentfulClient from "../../../lib/contentfulClient";

const getRecipe = recipeId => {
  return dispatch => {
    contentfulClient
      .getEntries({ "sys.id": recipeId, include: 2 })
      .then(response => {
        dispatch({
          type: GET_RECIPE_SUCCESS,
          payload: response.items[0],
          recipeId,
        });
      })
      .catch(error => {
        console.error(error);
        dispatch({ type: GET_RECIPE_ERROR });
      });
  };
};

export default getRecipe;
