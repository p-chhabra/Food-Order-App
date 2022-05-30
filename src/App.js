import Carts from "./Components/Carts/Carts";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import React, {useState} from "react";
import CartProvider from "./store/CartProvider";

function App() {

  const [cardIsShown, setCardIsShown] = useState(false);

  const showCartHandler = () => {
    setCardIsShown(true);
  }

  const hideCartHandler = () => {
    setCardIsShown(false);
  }

  return (
    <CartProvider>
      {cardIsShown && <Carts closeCart = {hideCartHandler}/>}
      <Header showCart={showCartHandler}/>
      <main>
      <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
