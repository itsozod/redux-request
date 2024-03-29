/* eslint-disable react/prop-types */
import styles from "./Card.module.css";

export const Card = ({ coffee }) => {
  return (
    <article className={styles.coffee_card}>
      <p className={styles.coffee_title}>{coffee.title}</p>
      <img className={styles.coffee_img} src={coffee.img} alt={coffee.title} />
      <h3>${coffee.price}</h3>
    </article>
  );
};
