import { useState } from "react";
import styles from "./groceryform.module.css";
export default function GroceryForm({ prices, items, setPrices, setItems }) {
  const [price, setPrice] = useState("");
  const [initialBudget, setInitialBudget] = useState("");
  const [remainingBudget, setRemainingBudget] = useState("");
  // const [item, setItem] = useState("");
  const [item, setItem] = useState({ name: "", done: false });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (item.name && price) {
      const priceValue = parseFloat(price);
      if (remainingBudget - priceValue >= 0) {
        setItems([...items, item]);
        setPrices([...prices, priceValue]);
        setItem({ name: "", done: false });
        setPrice("");
        setRemainingBudget((prevBudget) => prevBudget - priceValue);
      } else {
        alert("Not enough budget to add this item.");
      }
    }
  };
  const handleInitialBudgetChange = (e) => {
    const budgetValue = parseFloat(e.target.value);
    setInitialBudget(budgetValue);
    setRemainingBudget(budgetValue);
  };

  return (
    <div>
      <div className={styles.Budgetbox}>
        <p>Budget: {initialBudget}</p>
        <p>Remaining budget: {remainingBudget}</p>
        <input
          onChange={handleInitialBudgetChange}
          value={initialBudget}
          type="number"
          placeholder="Enter budget"
        />
      </div>
      <form onSubmit={handleSubmit} className={styles.modernform}>
        <br />
        <p>Item:</p>
        <input
          onChange={(e) => setItem({ name: e.target.value, done: false })}
          value={item.name}
          type="text"
          placeholder="Enter item"
        />
        <p>Price:</p>
        <input
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          type="number"
          placeholder="Enter price"
        />
        <br />
        <br />
        <button className={styles.modernbutton} type="submit">
          Add
        </button>
      </form>
    </div>
  );
}
