import React from "react";
import { Card } from "antd";
const { Meta } = Card;

const RecipeCard = ({ recipe }) => {
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src={recipe.fields.picture.fields.file.url} />}
    >
      <Meta title={recipe.fields.name} />
    </Card>
  );
};

export default RecipeCard;
