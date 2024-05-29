import GroceryItem from "./GroceryItem";
import style from "./grocerylist.module.css";
export default function GroceryList({ prices, items, setItems }) {
  const sorted_list = items.slice().sort((a, b) => a.done - b.done);
  return (
    <div className={style.grocerylist}>
      {sorted_list.map((item, index) => (
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
