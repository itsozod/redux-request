import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.header_title}>Coffees</h1>
      <input
        className={styles.search_inp}
        type="search"
        placeholder="Search..."
      />
    </header>
  );
};
