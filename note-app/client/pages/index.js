import Head from "next/head";
import Nav from "./Home/nav";
import Main from "./Home/main";
import Footer from "./Home/footer";
import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>EverNoteLite</title>
        </Head>
        <Nav />
        <Main />
        <Footer />
      </div>
    </>
  );
}
