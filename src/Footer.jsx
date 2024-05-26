import style from "./footer.module.css";
export default function Footer({ completed, total_todos }) {
  return (
    <div className={style.footer}>
      <span className={style.line}>
        Items bought:<h1>{completed}</h1>
      </span>
      <span className={style.line}>
        total items: <h1>{total_todos}</h1>
      </span>
    </div>
  );
}
