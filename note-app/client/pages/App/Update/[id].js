import Head from "next/head";
import styles from "../../../styles/Home.module.css";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [post, setPost] = useState();
  const { query } = useRouter();
  console.log(query);

  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };

  useEffect(() => {
    axios
      .get(`http://api.saltnote.my.id/notes/detail?id=${query.id}`, config)
      .then((res) => {
        setPost(res.data.data);
        setTitle(res.data.data.title);
        setContent(res.data.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const updateNote = (e) => {
    axios
      .put(`http://api.saltnote.my.id/notes/update`, bodyParameters, config)
      .then((response) => {
        console.log(response);
      })
      .catch();
  };

  const bodyParameters = {
    id: query.id,
    title: title,
    content: content,
    tags: [],
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
              <button className="w-20 btn btn-lg btn-primary" type="submit" onClick={(e) => updateNote(e)}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
