import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSave = async (e) => {
    e.preventDefault();

    // console.log(localStorage.getItem("token"));
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };

    const bodyParameters = {
      notebook_id: 0,
      title: title,
      content: content,
      tags: [],
    };

    const savenote = await axios
      .post(`http://api.saltnote.my.id/notes/add`, bodyParameters, config)
      .then((response) => {
        console.log(response);
      })
      .catch();
  };

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Home</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Sidebar />
        <Header />
        <div className={styles.contentcontainer}>
          <div className={styles.contentwrapper}>
            {/* Wrapper */}
            <div className="input-group mb-3">
              {/* Judul */}
              <span className="input-group-text" id="basic-addon1">
                Title
              </span>
              <input type="text" value={title} className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" onChange={(e) => setTitle(e.target.value)} />

              {/* Notes */}
              <div className="input-group">
                <span className="input-group-text">Notes</span>
                <textarea className="form-control" value={content} aria-label="With textarea" onChange={(e) => setContent(e.target.value)}></textarea>
              </div>
              {/* Button */}
              <button className="w-20 btn btn-lg btn-primary" type="submit" onClick={(e) => handleSave(e)}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
