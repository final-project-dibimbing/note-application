import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Content from "../components/Content";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar />
      <Header />
      <Content />
    </div>
  );
}
