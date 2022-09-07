import { moderators } from "../../utils/constant";
import ProfileCard from "./profile-card";
import styles from "./team.module.scss";

function Team() {
  return (
    <section id="team" className={styles.team}>
      <div className="container-xl">
        <h4 className={styles.headingsm}>Our Team</h4>

        <h2 className="heading-secondary">Faces Behind DevsIndia</h2>

        <p className={styles.text}>
          These are the people whose efforts led the community to where it is
          right now!
        </p>

        <div className={styles.row}>
          {moderators.map((moderator) => (
            <div className={styles.col} key={moderator.name}>
              <ProfileCard
                name={moderator.name}
                imgSrc={moderator.img}
                role={moderator.role}
                tagline={moderator.tagline}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
