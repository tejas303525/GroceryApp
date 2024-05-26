import style from "./groceryitem.module.css";
export default function GroceryItem({ item, price, items, setItems }) {
  const handleDelete = (item) => {
    setItems(items.filter((i) => i != item));
  };
  const handleClick = (name) => {
    setItems(items.map((i) => (i.name === name ? { ...i, done: !i.done } : i)));
  };
  const className = item.done ? style.done : "";
  return (
    <div className={style.container}>
      <div className={style.itemBox}>
        <li>
          <span className={className} onClick={() => handleClick(item.name)}>
            {item.name}
          </span>
          - {price} AED
          <span>
            <button
              onClick={() => handleDelete(item)}
              className={style.deleteButton}
            >
              x
            </button>
          </span>
        </li>
        <hr className={style.line} />
      </div>
    </div>
  );
}
