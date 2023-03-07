import React from "react";
import { NavLink } from "react-router-dom";
import { ScNav } from "./scParts";
import { useContext } from "react";
import { CartContex } from "../contexts/CartContext";
const Navigation = () => {
  const { cart } = useContext(CartContex);
  console.log("cart-length", cart);
  return (
    <ScNav>
      <nav className="content">
        <NavLink to="/">Products</NavLink>
        <NavLink to="/cart">
          Cart <span>{cart.length}</span>
        </NavLink>
      </nav>
    </ScNav>
  );
};

export default Navigation;
