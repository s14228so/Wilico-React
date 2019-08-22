import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";

const Plan = props => {
  const [plan] = useState(props.location.state[0]);

  useEffect(() => {
    console.log(plan);
  });
  return <div className="container mt-3">{plan.title}</div>;
};

export default withRouter(Plan);
