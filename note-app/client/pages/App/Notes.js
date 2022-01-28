import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { useEffect } from "react";
import { useState } from "react";
import NoteCard from "../components/NoteCard";
import axios from "axios";

export default function Notes() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };

    axios
      .get(`http://api.saltnote.my.id/notes`, config)
      .then((res) => {
        setPost(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar />
      <Header />
      <div className={styles.contentcontainer}>
        <div className={styles.contentwrapper}>
          {/* Grid */}

          <div className="row">
            {post.map((post) => (
              <div className="col-lg-4" key={post.id}>
                {/* {post.content} */}
                <NoteCard post={post} />
                {/* <button>update</button> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
