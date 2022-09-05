import Image from "next/image";

import styles from "./stats.module.scss";

function Stats() {
  return (
    <section className={styles.stats}>
      <div className="container-lg">
        <div className={styles.row}>
          <div className={`${styles.col} ${styles.col1}`}>
            <div className={styles.imageContainer}>
              <Image
                width="400px"
                height="400px"
                layout="responsive"
                alt="Mission Image"
                className={styles.image}
                src="https://picsum.photos/400/400?random=2"
              />
            </div>
          </div>
          <div className={`${styles.col} ${styles.col2}`}>
            <h2 className="heading-secondary">We are just getting started!</h2>

            <div className={styles.cards}>
              <div className={styles.card}>
                <div className={styles.number}>15.2k</div>
                <div className={styles.description}>
                  Members on official subreddit
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.number}>1,300+</div>
                <div className={styles.description}>
                  Daily subreddit viewers
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.number}>700+</div>
                <div className={styles.description}>Github members</div>
              </div>
              <div className={styles.card}>
                <div className={styles.number}>5,000+</div>
                <div className={styles.description}>Discord Server Members</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
