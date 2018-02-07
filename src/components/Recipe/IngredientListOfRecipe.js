import React from "react";
import { Row, Col, Spin } from "antd";
import IngredientCardOfRecipe from "./IngredientCardOfRecipe";

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
              cost={ingredient.fields.ingredient.fields.cost}
              allergenList={ingredient.fields.ingredient.fields.allergen}
            />
          </Col>
        ))}
    </Row>
  );
};

export default IngredientListOfRecipe;
