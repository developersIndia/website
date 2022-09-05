import SocialButtons from "../social-buttons";
import styles from "./cta.module.scss";

function CtaSection() {
  return (
    <section className={styles.cta}>
      {/* <div className={styles.divider}></div> */}
      <div className="container-xl">
        <h2 className="heading-secondary">
          &gt;Ready to be part of the community?
        </h2>
        <p className={styles.text}>
          Join us in our attempt to make the community a better place.
        </p>
        <SocialButtons />
      </div>
      <div className={styles.divider2}></div>
    </section>
  );
}

export default CtaSection;
