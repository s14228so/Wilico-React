import React from "react";
import Icon from "@material-ui/core/Icon";
import { withRouter } from "react-router";
import Plan from "../types/plan";
const one = {
  background: "lightgray",
  borderBottom: "1px #000 dotted",
  width: "50%",
  margin: "10px auto",
  cursor: "pointer",
  padding: "10px 20px"
};
const PlanOne = ({ plan, history }) => {
  const pushRouter = (plan: Plan) => {
    history.push("/plan", [plan]);
  };

  return (
    <div
      className="mt-5 container"
      style={one}
      onClick={() => pushRouter(plan)}
    >
      {plan.title}
    </div>
  );
};

export default withRouter(PlanOne);
