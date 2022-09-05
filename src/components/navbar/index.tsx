import Image from "next/image";
import Link from "next/link";

import { navLinks } from "../../utils/constant";
import styles from "./styles.module.scss";
import React from "react";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Image
        width="60px"
        height="60px"
        layout="fixed"
        className={styles.logo}
        src="https://raw.githubusercontent.com/developersIndia/assets/main/logo.svg"
        alt="Developers India Logo"
      />
      <div className={styles.links}>
        {navLinks.map((item, i) => (
          <Link key={`navlink_${i + 1}`} href={item.link}>
            <a className={styles.link}>{item.title}</a>
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
