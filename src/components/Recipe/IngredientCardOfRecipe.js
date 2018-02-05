import React from "react";
import { Card, Tag } from "antd";

const IngredientCardOfRecipe = ({ name, quantity, cost, allergenList }) => {
  return (
    <Card title={name}>
      <p>{cost} €</p>
      {allergenList &&
        allergenList.length > 0 &&
        allergenList.map(allergen => <Tag key={allergen}>{allergen}</Tag>)}
    </Card>
  );
};

export default IngredientCardOfRecipe;
