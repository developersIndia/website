import Link from "next/link";
import navStyles from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <div>
        <h1>DevelopersIndia</h1>
      </div>
      <ul className={navStyles.links}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
