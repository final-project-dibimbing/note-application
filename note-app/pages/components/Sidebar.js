import styles from "../../styles/Home.module.css";

export default function Sidebar() {
  return (
    <div className={styles.navcontainer}>
      <div className={styles.logo}>
        <h2>Username</h2>
      </div>
      <div className={styles.wrapper}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Notes</a>
          </li>
          <li>
            <a href="#">Shortcuts</a>
          </li>
          <li>
            <a href="#">Tasks</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
