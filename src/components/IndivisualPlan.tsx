import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import Coach from "../types/coach";
import axios from "axios";
const Plan = props => {
  const [plan] = useState(props.location.state[0]);
  const initialState: Coach = {
    username: "",
    id: 0,
    rating: 0,
    age: 0,
    coach: true
  };
  const [coach, setCoach] = useState<Coach>(initialState);

  useEffect(() => {
    // console.log(plan.coachid);
    axios.get(`http://localhost:8080/coaches/${plan.coachid}`).then(res => {
      setCoach(res.data);
    });
  }, []);
  return (
    <div className="container mt-5">
      {coach.username}コーチ
      <br />
      {plan.title}
      {plan.price}円
    </div>
  );
};

export default withRouter(Plan);
