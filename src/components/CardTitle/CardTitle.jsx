import style from "./CardTitle.module.scss";

// Et simpelt card title komponent der tager imod en "title" prop
export function CardTitle({ title }) {
  return <h2 className={style.cardTitle}>{title}</h2>;
}
