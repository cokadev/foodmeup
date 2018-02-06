import {
  GET_RECIPE_LIST_SUCCESS,
  GET_RECIPE_LIST_ERROR,
} from "../../actionTypes";
import contentfulClient from "../../../lib/contentfulClient";

const getRecipeList = () => {
  return dispatch => {
    contentfulClient
      .getEntries({ content_type: "recipe", include: 2 })
      .then(response => {
        dispatch({ type: GET_RECIPE_LIST_SUCCESS, payload: response.items });
      })
      .catch(error => {
        console.error(error);
        dispatch({ type: GET_RECIPE_LIST_ERROR });
      });
  };
};

export default getRecipeList;
