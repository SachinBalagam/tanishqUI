import styles from "../../styles/home/Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div>
        <img src="../../src/assets/header/download.svg" alt="logo" className={styles.logo} />
      </div>
    </div>
  );
};

export default Header;
