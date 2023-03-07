import React, { useState } from "react";
import { Route } from "react-router-dom";
import { data } from "./data";
import { ProductContext } from "./contexts/ProductContext";
import { CartContex } from "./contexts/CartContext";
import { initialStateRead } from "./hooks/localStorage";
import { localStorageCartRead } from "./hooks/localStorage";
import { localStorageCartWrite } from "./hooks/localStorage";
// Bileşenler
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const s11g1LocalStorageKey = "s11g1";
  const [products, setProducts] = useState(data);
  const [cart, setCart] = useState([]);
  useState(initialStateRead(s11g1LocalStorageKey));

  const addItem = (item) => {
    const newCart = [...cart, item];
    setCart(newCart);
    localStorageCartWrite(s11g1LocalStorageKey, newCart);

    // verilen itemi sepete ekleyin
  };

  const removeItem = (id) => {
    const newCart = [...cart.filter((item) => item.id !== id)];
    setCart(newCart);
    localStorageCartWrite(s11g1LocalStorageKey, newCart);
  };

  return (
    <div className="App">
      <ProductContext.Provider value={{ products, addItem }}>
        <CartContex.Provider value={{ cart, removeItem }}>
          <Navigation />

          {/* Routelar */}
          <main className="content">
            <Route exact path="/">
              <Products />
            </Route>

            <Route path="/cart">
              <ShoppingCart />
            </Route>
          </main>
        </CartContex.Provider>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
