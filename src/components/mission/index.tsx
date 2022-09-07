import Image from "next/image";
import Link from "next/link";

import styles from "./mission.module.scss";
import {
  BsArrowRight,
  BsCurrencyDollar,
  BsFillLightningChargeFill,
  BsGraphUp,
} from "react-icons/bs";

function MissionSection() {
  return (
    <section className={styles.mission} id="mission">
      <div className="container-xl">
        <h2 className="heading-secondary">Our Mission</h2>

        <p className={styles.text}>
          At our core, we value a lot of things. Our main motive is to become
          India&apos;s largest community where people collaborate and exchange
          knowledge.
        </p>

        <div className={styles.row}>
          <div className={`${styles.col} ${styles.col1}`}>
            <div className={styles.card}>
              <div className={styles.icon}>
                <BsFillLightningChargeFill />
              </div>

              <div className={styles.content}>
                <div className={styles.heading}>Knowledge Transfer</div>
                <p className={styles.text}>
                  Be it Ruby on Rails or Python, with developers working on
                  different stacks coming together its always a win-win for the
                  greater community!
                </p>
                <Link href="/">
                  <a className={styles.link}>
                    Learn More &nbsp;
                    <BsArrowRight />
                  </a>
                </Link>
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.icon}>
                <BsCurrencyDollar />
              </div>

              <div className={styles.content}>
                <div className={styles.heading}>
                  Potential Job Opportunities
                </div>
                <p className={styles.text}>
                  Our community members come from a variety of backgrounds! Some
                  work in the big name MNCs, a few in the well-known FAANG
                  companies & some more in fast-growing startups! Hence, in our
                  community, you&apos;ll find ample opportunities to network &
                  find job prospects.
                </p>
                <Link href="/">
                  <a className={styles.link}>
                    Learn More &nbsp;
                    <BsArrowRight />
                  </a>
                </Link>
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.icon}>
                <BsGraphUp />
              </div>

              <div className={styles.content}>
                <div className={styles.heading}>Growth Prospects</div>
                <p className={styles.text}>
                  We host coding live streams, talks from experienced industry
                  experts & such. So, by being part of the community expect to
                  gain some knowledge on a variety of technologies.
                </p>
                <Link href="/">
                  <a className={styles.link}>
                    Learn More &nbsp;
                    <BsArrowRight />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className={`${styles.col} ${styles.col2}`}>
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
        </div>
      </div>
    </section>
  );
}

export default MissionSection;
