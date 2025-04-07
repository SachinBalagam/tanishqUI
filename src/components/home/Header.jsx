import styles from "../../styles/home/Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <nav>
        <div className='container'>
          <div className="topnav-bar">
            <div className="logo-container">
              <a href="https://www.tanishq.co.in/">
              <div class="custom-img">
                <img src="https://www.tanishq.co.in/assets/images/logo.svg" alt="Tanishq Logo" className="logo-image d-none display-lg" width="80px;" />
                <img src="https://www.tanishq.co.in/assets/images/logo.svg" alt="Tanishq Logo" className="default-image d-block display-lg-none" width="40px;" />
              
              </div>
              </a>
            </div>
            <div className="search-contaiuner">
            </div>
            <div class="right-top-section"></div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
