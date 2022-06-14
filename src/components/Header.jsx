import styles from "../styles/header.module.css";
import Logo from '../img/Ignite.svg'

export function Header() {
  return (
    <header className={styles.containerheader}> 
      <div className={styles.boxheader}>
        <img src={Logo} alt="" />
        <h1>Ignite Feed</h1>
      </div>
    </header>
  );
}
