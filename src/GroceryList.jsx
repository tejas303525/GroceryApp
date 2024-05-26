import GroceryItem from "./GroceryItem";
import style from "./grocerylist.module.css";
export default function GroceryList({ prices, items, setItems }) {
  return (
    <div className={style.grocerylist}>
      {items.map((item, index) => (
        <GroceryItem
          key={item.name}
          item={item}
          price={prices[index]}
          items={items}
          setItems={setItems}
        />
      ))}
    </div>
  );
}
