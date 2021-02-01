import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Developers</span> India
      </h1>
      <p className={headerStyles.description}>Developers India</p>
    </div>
  );
};

export default Header;
