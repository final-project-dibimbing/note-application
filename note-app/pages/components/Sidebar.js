import styles from "../../styles/Home.module.css";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className={styles.navcontainer}>
      <div className={styles.logo}>
        <h2>Username</h2>
      </div>
      <div className={styles.wrapper}>
        <input class="form-control form-control-dark w-100" type="text" placeholder="Search by title" aria-label="Search" />
        <ul>
          <li>
            <Link href="/App/Home">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/App/Notes">
              <a>Notes</a>
            </Link>
          </li>
          <li>
            <Link href="/App/Shortcuts">
              <a>Shortcuts</a>
            </Link>
          </li>
          <li>
            <Link href="/App/Trash">
              <a>Trash</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
