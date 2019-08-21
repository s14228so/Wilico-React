import React from "react";
import Icon from "@material-ui/core/Icon";
const one = {
  background: "lightgray",
  borderBottom: "1px #000 dotted",
  width: "50%",
  margin: "10px auto",

  padding: "10px 20px"
};
const Todo = ({ todo, remove }) => {
  return (
    <div style={one}>
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

export default Todo;
