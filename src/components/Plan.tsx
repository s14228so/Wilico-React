import React from "react";
import Icon from "@material-ui/core/Icon";
import { withRouter } from "react-router";
import Plan from "../types/plan";
const one = {
  background: "lightgray",
  borderBottom: "1px #000 dotted",
  width: "50%",
  margin: "10px auto",

  padding: "10px 20px"
};
const PlanOne = ({ plan, history }) => {
  const pushRouter = (plan: Plan) => {
    history.push("/plan", [plan]);
  };

  return (
    <div style={one} onClick={() => pushRouter(plan)}>
      {plan.title}
      <Icon
        style={{
          fontSize: "18px",
          float: "right",
          cursor: "pointer",
          lineHeight: "25px"
        }}
        fontSize="large"
      >
        delete
      </Icon>
    </div>
  );
};

export default withRouter(PlanOne);
