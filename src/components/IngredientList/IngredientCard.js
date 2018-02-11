import React from "react";
import { Card, Tag } from "antd";
import noPicture from "../../assets/no-picture.jpg";
const { Meta } = Card;

const IngredientCard = ({ ingredient }) => {
  return (
    <Card
      style={{ height: "316px" }}
      cover={
        <img
          alt={ingredient.fields.name}
          style={{ height: "200px" }}
          src={
            (ingredient.fields.picture &&
              ingredient.fields.picture.fields.file.url) ||
            noPicture
          }
        />
      }
    >
      <Meta title={ingredient.fields.name} />
      <p>
        {ingredient.fields.cost}€ / {ingredient.fields.unitCost.fields.name}
      </p>
      {ingredient.fields.allergen &&
        ingredient.fields.allergen.map(allergen => (
          <Tag key={allergen}>{allergen}</Tag>
        ))}
    </Card>
  );
};

export default IngredientCard;
