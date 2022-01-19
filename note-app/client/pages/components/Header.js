import styles from "../../styles/Home.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <div className={styles.headcontainer}>
      <div className={styles.headwrapper}>
        <div className={styles.title}>
          <h2>
            Hello, <span>Deni</span>
          </h2>
          <p>Welcome to the EverNoteLite</p>
        </div>
      </div>
      <div className={styles.profile}>
        <Image src="/rhino.jpg" alt="profile" className={styles.image} width={70} height={70} />
      </div>
    </div>
  );
}
