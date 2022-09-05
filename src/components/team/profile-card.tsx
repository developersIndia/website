import Image from "next/image";

import styles from "./profile-card.module.scss";

type ProfileCardProps = {
  name: string;
  imgSrc: string;
  role: string;
  tagline: string;
  // socialProfiles?: object;
};

function ProfileCard({ name, imgSrc, role, tagline }: ProfileCardProps) {
  return (
    <div className={styles.profilecard}>
      <Image
        alt={`${name} Profile Image`}
        src={imgSrc}
        width="150px"
        height="150px"
        layout="fixed"
        className={styles.image}
      />

      <h4 className={styles.name}>{name}</h4>
      <p className={styles.role}>{role}</p>
      <p className={styles.tagline}>{tagline}</p>
      {/* TODO: Add the social icons */}
    </div>
  );
}

export default ProfileCard;
