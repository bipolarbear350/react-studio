import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import {BakeryItem} from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

// function BakeryItem() {
//     return null;
// }

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */


    const [counter, setCounter] = useState(0);
    function handleClick() {
        setCounter(counter + 1);
    }

    const [finalPrice, setFinalprice] = useState(0);
    function handlePriceClick(input){
        setFinalprice(finalPrice + input)
    }

    const [cartList, setCartList] = useState([]);
    function addToCart(input1, input2) {
        setCartList(cartList.concat(input1))
        handlePriceClick(input2)
    }

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

        <p>My counter: {counter} </p>
        <button onClick={() => handleClick()}>Click me!</button>

      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
          // <div>
          //     <p>BakeryItem {index}</p>
          //     <button onClick={() => addToCart()}>add to cart</button>
          // </div>
         // replace with BakeryItem component
          <BakeryItem item={item} itemToCart={addToCart}/>
        //   // BakeryItem(item)
        //   // <div>
        //   //     <p>{item}</p>
        //   // <button>add to cart</button>
        //   // </div>
      ))}

      <div>
        <h2>Cart</h2>
        {/* TODO: render a list of items in the cart */}
          <p>Items: {cartList}</p>
          <p>Total price: {finalPrice}</p>
      </div>
    </div>
  );
}

export default App;
