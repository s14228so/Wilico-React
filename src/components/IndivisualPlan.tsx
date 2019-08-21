import React from "react";
import Icon from "@material-ui/core/Icon";
import { withRouter } from "react-router";
const one = {
  background: "lightgray",
  borderBottom: "1px #000 dotted",
  width: "50%",
  margin: "10px auto",

  padding: "10px 20px"
};
const Plan = ({ todo, remove, history }) => {
  const pushRouter = (id: number) => {
    history.push("/plan");
  };
  return (
    <div style={one} onClick={() => pushRouter(todo.id)}>
      {todo.title}
      <Icon
        style={{
          fontSize: "18px",
          float: "right",
          cursor: "pointer",
          lineHeight: "25px"
        }}
        onClick={() => remove(todo.id)}
        fontSize="large"
      >
        delete
      </Icon>
    </div>
  );
};

export default withRouter(Plan);
