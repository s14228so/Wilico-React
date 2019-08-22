import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import axios from "axios";
const PlanCreate = props => {
  const [plan, setPlan] = useState(props.plan);
  useEffect(() => {});
  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/plans", plan, {
        headers: { "Content-Type": "application/json" }
      })
      .then(res => {
        console.log(res.data);
        props.history.push({
          path: "/"
        });
      });
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="container mt-3">
        <div>
          <label htmlFor="title">タイトル</label>
          <input
            type="text"
            id="title"
            value={plan.title}
            onChange={e => setPlan({ ...plan, title: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="price">料金</label>
          <input
            id="price"
            placeholder="円"
            type="text"
            value={plan.price}
            onChange={e => setPlan({ ...plan, price: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="body">内容</label>
          <textarea
            id="body"
            value={plan.body}
            onChange={e =>
              setPlan({
                ...plan,
                body: e.target.value
              })
            }
          />
          <input type="submit" />
        </div>
      </form>
    </>
  );
};

PlanCreate.defaultProps = {
  plan: {
    title: "",
    body: "",
    price: "",
    coach_id: 1
  }
};

export default withRouter(PlanCreate);
