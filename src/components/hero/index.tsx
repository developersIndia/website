import SocialButtons from "../social-buttons";
import styles from "./hero.module.scss";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container-lg">
        <h1 className="heading-primary">
          India&apos;s Largest Network of Software & Technical Professionals.
        </h1>

        <p className={styles.text}>
          We&apos;re India&apos;s biggest & ever-fastest growing community of
          software developers & tech professionals! Join us & hang around with
          us on Discord, Reddit and/or on GitHub.
        </p>

        <SocialButtons />
      </div>
    </section>
  );
}

export default Hero;
