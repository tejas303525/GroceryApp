import GroceryItem from "./GroceryItem";

export default function GroceryList({ prices, items }) {
  return (
    <>
      {items.map((item, index) => (
        <GroceryItem key={index} item={item} price={prices[index]} />
      ))}
    </>
  );
}
