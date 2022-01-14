import Head from "next/head";
import Nav from "./Home/nav";
import Main from "./Home/main";
import Footer from "./Home/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>EverNoteLite</title>
      </Head>
      <Nav />
      <Main />
      <Footer />
    </>
  );
}
