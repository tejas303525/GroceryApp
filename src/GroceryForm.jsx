import { useState } from "react";

export default function GroceryForm({ prices, items, setPrices, setItems }) {
  const [price, setPrice] = useState("");
  const [initialBudget, setInitialBudget] = useState("");
  const [remainingBudget, setRemainingBudget] = useState("");
  const [item, setItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item && price) {
      const priceValue = parseFloat(price);
      setItems([...items, item]);
      setPrices([...prices, priceValue]);
      setItem("");
      setPrice("");
      setRemainingBudget((prevBudget) => prevBudget - priceValue);
    }
  };
  const handleInitialBudgetChange = (e) => {
    const budgetValue = parseFloat(e.target.value);
    setInitialBudget(budgetValue);
    setRemainingBudget(budgetValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <center>
        <p>Budget: {initialBudget}</p>
        <p>Remaining budget: {remainingBudget}</p>
        <input
          onChange={handleInitialBudgetChange}
          value={initialBudget}
          type="number"
          placeholder="Enter budget"
        />
      </center>
      <br />
      <p>Item:</p>
      <input
        onChange={(e) => setItem(e.target.value)}
        value={item}
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
      <button type="submit">Add</button>
    </form>
  );
}
