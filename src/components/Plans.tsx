import React from "react";
import Plan from "./Plan";
import "./plans.scss";

const TodoList = ({ todos, remove, filter }) => {
  const items = todos.map(plan => {
    return <Plan key={plan.id} todo={plan} remove={remove} />;
  });
  return <div>{items}</div>;
};

export default TodoList;
