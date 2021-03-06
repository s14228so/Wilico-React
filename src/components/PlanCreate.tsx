import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import axios from "axios";
import Plan from "../types/plan";
const PlanCreate = props => {
  console.log(props);
  const [plan, setPlan] = useState<Plan>(props.plan);
  const [file, setFile] = useState();
  useEffect(() => {});

  const fileChange = e => {
    setFile(e.target.files[0]);
  };
  const fileSubmit = e => {
    e.preventDefault();
    const params = new FormData();

    params.append(file.name, file);
    console.log(params);
    axios
      .post("http://localhost:8080/upload", params, {
        headers: { "Content-Type": "multipart/form-data" }
      })
      .then(res => {
        console.log("ok");
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log(plan);
    axios
      .post("http://localhost:8080/plans", plan, {
        headers: { "Content-Type": "application/json" }
      })
      .then(res => {
        console.log(res.data);
        props.history.push("/plan", [plan]);
      });
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="container mt-5">
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
            type="number"
            value={plan.price}
            onChange={e =>
              setPlan({ ...plan, price: parseInt(e.target.value) })
            }
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

      <form onSubmit={fileSubmit}>
        <input type="file" onChange={fileChange} multiple />
        <input type="submit" value="ファイルを送信" />
      </form>
    </>
  );
};

PlanCreate.defaultProps = {
  plan: {
    title: "",
    body: "",
    price: 0,
    coachid: 6
  }
};

export default withRouter(PlanCreate);
