import React from "react";
import classes from "./Order.css";

const Order = (props) => {
  const ingredients = [];
  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName],
    });
  }

  const ingredientOutput = ingredients.map((ig) => {
    return (
      <span
        style={{
          textTransform: "capitalize",
          border: "1px solid black",
          display: "inline-block",
          margin: "0 8px",
          padding: "5px",
        }}
        key={ig.name}
      >
        {ig.name} ({ig.amount})
      </span>
    );
  });
  return (
    <div className={classes.Order}>
      <p>ingredients: {ingredientOutput}</p>
      <p>
        price:
        <strong>{Number.parseFloat(props.price).toFixed(2)} rupees</strong>
      </p>
    </div>
  );
};

export default Order;
