import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import "./style.scss";

export const Header = () => {
  return (
    <div className="header">
      <div>
        <nav>
          <li>
            <a href="">Produtos</a>
          </li>
          <li>
            <a href="">Sobre nós</a>
          </li>
        </nav>
      </div>
      <div className="logo">
        <h1>
          Aneesu.
        </h1>
      </div>
      <div className="user-action">
        <ShoppingCartIcon />
        <AccountCircleIcon />
      </div>
    </div>
  );
};
