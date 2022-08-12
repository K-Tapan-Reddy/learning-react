import React from "react";
import classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad :", type: "salad" },
  { label: "Cheese :", type: "cheese" },
  { label: "Bacon :", type: "bacon" },
  { label: "Meat :", type: "meat" },
];

const BuildControls = (props) => (
  <div className={classes.BuildControls}>
    <p className={classes.price}>Burger price: {props.price.toFixed(2)}</p>
    {controls.map((ctrl) => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
      />
    ))}
    <button
      className={classes.orderButton}
      disabled={!props.purchasable}
      onClick={props.ordered}
    >
      ORDER NOW
    </button>
  </div>
);

export default BuildControls;
