import React, { useState, useEffect } from "react";
import axios from "axios";
const PlanCreate = props => {
  const [plan, setPlan] = useState(props.plan);
  useEffect(() => {});
  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/plans", {
        params: {
          plan
        }
      })
      .then(res => {
        console.log(res.data);
      });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={plan.title}
          onChange={e => setPlan({ ...plan, title: e.target.value })}
        />
        <textarea
          value={plan.body}
          onChange={e =>
            setPlan({
              ...plan,
              body: e.target.value
            })
          }
        />
        <input type="submit" />
      </form>
    </>
  );
};

PlanCreate.defaultProps = {
  plan: {
    title: "title1",
    body: "body1",
    price: 0
  }
};

export default PlanCreate;
