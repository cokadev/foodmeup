import React from "react";
import { Card } from "antd";
const { Meta } = Card;

const RecipeCard = ({ recipe }) => {
  return (
    <Card
      hoverable
      cover={
        <img
          alt={recipe.fields.name}
          src={recipe.fields.picture.fields.file.url}
        />
      }
    >
      <Meta title={recipe.fields.name} />
    </Card>
  );
};

export default RecipeCard;
