import Link from "next/link";

import styles from "./social-buttons.module.scss";
import { FaDiscord, FaGithub, FaReddit } from "react-icons/fa";

function SocialButtons() {
  return (
    <div className={`${styles.socialbuttons} container-lg`}>
      <Link href="https://discord.gg/G4XDD7MpfE">
        <a className="button-outline-dark" target="_blank">
          <FaDiscord />
          &nbsp; Discord
        </a>
      </Link>

      <Link href="https://www.reddit.com/r/developersIndia">
        <a className="button-outline-dark" target="_blank">
          <FaReddit /> &nbsp; Reddit
        </a>
      </Link>

      <Link href="https://www.reddit.com/r/developersIndia">
        <a className="button-outline-dark" target="_blank">
          <FaGithub /> &nbsp; Github
        </a>
      </Link>
    </div>
  );
}

export default SocialButtons;
