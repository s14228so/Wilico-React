import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const style = {
    textDecoration: "none",
    color: "#000",
    lineHeight: "50px",
    fontSize: "12px"
  };

  const links = [
    {
      title: "プラン一覧",
      path: "/plans"
    },
    {
      title: "About",
      path: "/about"
    },
    {
      title: "プラン作成",
      path: "/planCreate"
    }
  ];

  const items = links.map((item, i) => {
    return (
      <Link style={style} key={i} to={item.path}>
        {item.title}
      </Link>
    );
  });
  return (
    <div className="nav">
      <div className="nav-in">
        <div
          className="wilico"
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <Link to={"/"}>Wilico</Link>
          {items}
        </div>

        <div className="setting">{/* <setting /> */}</div>
      </div>
    </div>
  );
};

export default Header;
