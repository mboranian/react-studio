import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const dict = {}

  bakeryData.map((item) => (dict[item.name] = 0));

  const [cart, setCart] = useState(dict);

  const increment = (name) => {
    cart[name] = cart[name] + 1;
    setCart({ ...cart });
  }

  function checkPresent(item) {
    return cart[item.name] > 0;
  }

  function sum() {

    return (bakeryData.reduce((acc, curr) => ((curr.price * cart[curr.name]) + acc), 0)).toFixed(2);
  }


  return (
    <div className="App">
      <h1 id="title">My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      <div class="ItemsAndCart">
        <div id="justItems">
          {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
            <BakeryItem item={item} index={index} incr={increment} /> // replace with BakeryItem component
          )
          )}
        </div>

        <div id="cart">
          <h2>Cart</h2>
          {/* TODO: render a list of items in the cart */

            bakeryData.filter(checkPresent).map((item, index) => (
              <p>{item.name} x {cart[item.name]}</p>
            ))
          }
          <h3>Total: ${sum()}</h3>
        </div>
      </div>



    </div>
  );
}

export default App;
