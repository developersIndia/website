import Hero from "../hero";
import Navbar from "../navbar";
import styles from "./header.module.scss";

function Header() {
  return (
    <section className={styles.header}>
      {/* <img
        className={styles.patterntop}
        src="https://raw.githubusercontent.com/developersIndia/assets/main/website/bg-header-pattern-top.svg"
        alt="Pattern Bottom"
      /> */}

      <Navbar />
      <Hero />
      {/* <img
        className={styles.patternbottom}
        src="https://raw.githubusercontent.com/developersIndia/assets/main/website/bg-header-pattern-bottom.svg"
        alt="Pattern Bottom"
      /> */}
    </section>
  );
}

export default Header;
