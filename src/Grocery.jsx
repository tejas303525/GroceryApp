import { useState } from "react";
import GroceryForm from "./GroceryForm";
import GroceryList from "./GroceryList";

export default function Grocery() {
  const [prices, setPrices] = useState([]);
  const [items, setItems] = useState([]);

  return (
    <>
      <GroceryForm
        prices={prices}
        items={items}
        setItems={setItems}
        setPrices={setPrices}
      />
      <GroceryList prices={prices} items={items} setItems={setItems} />
    </>
  );
}
