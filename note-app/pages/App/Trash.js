import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function Trash() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Trash</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar />
      <Header />
      <div className={styles.contentcontainer}>
        <div className={styles.contentwrapper}>
          <p>Ini Adalah TRASH</p>
        </div>
      </div>
    </div>
  );
}
