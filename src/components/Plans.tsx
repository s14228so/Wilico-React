import React, { useEffect, useState } from "react";
import Plan from "./Plan";
import "./plans.scss";
import { init } from "../actions";
import { useDispatch } from "react-redux";

const Plans = ({ plans }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(init());
  }, []);
  const items = plans.map(plan => {
    return <Plan key={plan.id} plan={plan} />;
  });
  return <div>{items}</div>;
};

export default Plans;
