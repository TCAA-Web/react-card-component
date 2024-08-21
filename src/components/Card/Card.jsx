import style from "./Card.module.scss";

// Definer et komponent vi kalder "Card", som tager imod to props: children og isDark
export function Card({ children, isDark }) {
  // her returneres vores HTML. Ved className bruger vi en conditional ternary operator til
  // at skifte style på vores card
  return (
    <>
      <section className={isDark ? style.darkCard : style.mainCard}>
        {children}
      </section>
    </>
  );
}
