import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function Saved() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shortcuts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar />
      <Header />
    </div>
  );
}
