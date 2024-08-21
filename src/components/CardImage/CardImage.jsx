import style from "./CardImage.module.scss";

// CardImage komponent som returnerer en figure, og en caption hvis den findes
export function CardImage({ imageSrc, imageCaption }) {
  return (
    <figure className={style.cardFigure}>
      <img src={imageSrc} />
      {imageCaption ? <figcaption>{imageCaption}</figcaption> : null}
    </figure>
  );
}
