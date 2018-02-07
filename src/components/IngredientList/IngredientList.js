import React, { PureComponent } from "react";
import IngredientCard from "./IngredientCard";
import { Row, Col } from "antd";

class IngredientList extends PureComponent {
  componentDidMount() {
    this.props.getIngredientList();
  }

  render() {
    const { ingredientList } = this.props;

    return (
      <Row type="flex" gutter={24}>
        {ingredientList.map(ingredient => (
          <Col span={4} key={ingredient.sys.id}>
            <IngredientCard ingredient={ingredient} />
          </Col>
        ))}
      </Row>
    );
  }
}

export default IngredientList;
