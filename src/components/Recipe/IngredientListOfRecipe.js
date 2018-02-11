import React from "react";
import { Row, Col, Spin } from "antd";
import IngredientCardOfRecipe from "./IngredientCardOfRecipe";
import getIngredientCostOfRecipe from "../../functions/getIngredientCostOfRecipe";

const IngredientListOfRecipe = ({ ingredientList }) => {
  if (!ingredientList) return <Spin />;

  return (
    <Row type="flex" gutter={24}>
      {ingredientList.length > 0 &&
        ingredientList.map(ingredient => (
          <Col span={5} key={ingredient.sys.id}>
            <IngredientCardOfRecipe
              name={ingredient.fields.name}
              quantity={ingredient.fields.quantity}
              cost={getIngredientCostOfRecipe(
                ingredient.fields.ingredient.fields.cost,
                ingredient.fields.ingredient.fields.unitCost,
                ingredient.fields.unit
              )}
              allergenList={ingredient.fields.ingredient.fields.allergen}
            />
          </Col>
        ))}
    </Row>
  );
};

export default IngredientListOfRecipe;
