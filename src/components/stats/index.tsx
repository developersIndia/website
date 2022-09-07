import Image from "next/image";
import { StatsData } from "../../utils/interfaces";
import styles from "./stats.module.scss";

interface Props {
  data: StatsData
}
function Stats(props: Props) {
  const { dailySubredditViews, subredditMembers, discordServerMembers } = props.data;


  // converting the values to thousands (K)
  const parsedTotalSubredditMembers = parseFloat((subredditMembers / 1000).toString()).toFixed(1);
  const parsedDailySubredditViewers = parseFloat((dailySubredditViews / 1000).toString()).toFixed(1);


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
                <div className={styles.number}>{parsedTotalSubredditMembers}K+</div>
                <div className={styles.description}>
                  Members on official subreddit
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.number}>{parsedDailySubredditViewers}K+</div>
                <div className={styles.description}>
                  Daily subreddit viewers
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.number}>700+</div>
                <div className={styles.description}>Github members</div>
              </div>
              <div className={styles.card}>
                <div className={styles.number}>{discordServerMembers}+</div>
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
