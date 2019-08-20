import * as React from "react";
import { useState, useEffect } from "react";
import Todo from "../types/todo";
import axios from "axios";
const Home: React.SFC = (): JSX.Element => {
  const [todos, setTodos] = useState<Todo[]>([]);
  useEffect(() => {
    async () => {
      const { data }: any = await axios.get(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      setTodos(data);
    };
  });

  const items = todos.map((item, index) => {
    return <li key={index}>{item.title}</li>;
  });
  return (
    <div style={{ width: "80%", margin: "20px auto" }}>
      <p>〜みんなのTodo〜</p>
      <ul> {items}</ul>
    </div>
  );
};

export default Home;
