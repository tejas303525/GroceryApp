import style from "./groceryitem.module.css";
export default function GroceryItem({ item, price, items, setItems }) {
  const handleDelete = (item) => {
    setItems(items.filter((i) => i != item));
  };
  return (
    <div className={style.container}>
      <div className={style.itemBox}>
        <li>
          {item} - {price} AED
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
