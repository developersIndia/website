import Image from "next/image";
import Link from "next/link";

import styles from "./footer.module.scss";
import React, { useState } from "react";

function FooterSection() {
  const [email, setEmail] = useState("");

  function handleOnSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    console.log(email);
  }

  function handleOnChange(e: React.FormEvent<HTMLInputElement>) {
    setEmail(e.currentTarget.value);
  }

  return (
    <footer className={styles.footer}>
      <div className="container-xl">
        <div className={styles.sitemap}>
          <div className={styles.nav}>
            <div className={styles.devsindia}>
              <Image
                src="https://raw.githubusercontent.com/developersIndia/assets/main/logo.svg"
                alt="Developers India Logo"
                layout="fixed"
                width="30px"
                className={styles.logo}
                height="30px"
              />
              &nbsp; Developers India
            </div>

            <div className={styles.links}>
              <Link href="">
                <a className={styles.link}>Reddit</a>
              </Link>
              <Link href="">
                <a className={styles.link}>Discord</a>
              </Link>
              <Link href="">
                <a className={styles.link}>Github</a>
              </Link>
              <Link href="">
                <a className={styles.link}>Careers</a>
              </Link>
              <Link href="">
                <a className={styles.link}>About Us</a>
              </Link>
            </div>
          </div>
          <div className={styles.signup}>
            <form onSubmit={handleOnSubmit}>
              <label>Stay up to date</label>
              <input
                placeholder="Your Email Address"
                type="text"
                className={styles.input}
                onChange={handleOnChange}
              ></input>

              <button type="submit" className="button-dark">
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className={styles.copyright}>
          <p>&copy; 2022-{new Date().getFullYear()} Developers India</p>
          <p>
            Made in India with{" "}
            <span>
              <a
                style={{ textDecoration: "underline", color: "#2A3268" }}
                href="https://github.com/developersIndia"
                rel="noopener noreferrer"
                target="_blank"
              >
                Open-Source
              </a>
            </span>{" "}
            ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
