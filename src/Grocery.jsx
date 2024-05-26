import { useState } from "react";
import GroceryForm from "./GroceryForm";
import GroceryList from "./GroceryList";
import Footer from "./Footer";

export default function Grocery() {
  const [prices, setPrices] = useState([]);
  const [items, setItems] = useState([]);
  const completed = items.filter((item) => item.done == true).length;
  const total_todos = items.length;
  return (
    <>
      <GroceryForm
        prices={prices}
        items={items}
        setItems={setItems}
        setPrices={setPrices}
      />
      <GroceryList prices={prices} items={items} setItems={setItems} />
      <Footer completed={completed} total_todos={total_todos} />
    </>
  );
}
