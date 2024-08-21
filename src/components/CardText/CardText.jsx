import style from "./CardText.module.scss";

// Et simpelt cardText komponent til at vise tekst
export function CardText({ text }) {
  return <p className={style.cardText}>{text}</p>;
}
