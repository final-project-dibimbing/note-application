import styles from "../../styles/Home.module.css";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className={styles.navcontainer}>
      <div className={styles.logo}>
        <h2>Username</h2>
      </div>
      <div className={styles.wrapper}>
        <input className="form-control form-control-dark w-100" type="text" placeholder="Search by title" aria-label="Search" />
        <input className="form-control form-control-dark w-100" type="text" placeholder="Search by tag" aria-label="Search" />
        <ul>
          <li>
            <Link href="/App/Create">
              <a>Create</a>
            </Link>
          </li>
          <li>
            <Link href="/App/Notes">
              <a>MyNotes</a>
            </Link>
          </li>
          {/* <li>
            <Link href="/App/Saved">
              <a>Saved</a>
            </Link>
          </li> */}
          <li>
            <Link href="/App/Rich">
              <a>RichEditor</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
