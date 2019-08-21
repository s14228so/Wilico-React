import React from "react";
import Plan from "./Plan";
import "./plans.scss";

const Plans = ({ plans, remove }) => {
  const items = plans.map(plan => {
    return <Plan key={plan.id} plan={plan} remove={remove} />;
  });
  return <div>{items}</div>;
};

export default Plans;
