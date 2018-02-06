import React from "react";
import { Card, Tag } from "antd";

const IngredientCardOfRecipe = ({ name, quantity, cost, allergenList }) => {
  return (
    <Card title={name} style={{ height: "175px" }}>
      <p>{cost} €</p>
      {allergenList &&
        allergenList.map(allergen => <Tag key={allergen}>{allergen}</Tag>)}
    </Card>
  );
};

export default IngredientCardOfRecipe;
