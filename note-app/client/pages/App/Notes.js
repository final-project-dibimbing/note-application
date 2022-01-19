import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import React, { useState } from "react";

//coba manual pakai state
export default function Notes() {
  const [state, setState] = useState({
    name: "",
    content: "",
  });

  const handleChange = (event) => {
    const target = event.target;
    const { name, value } = target;

    setState({
      [name]: value,
    });
  };

  console.log("STATE", state);

  return (
    <div className={styles.container}>
      <Head>
        <title>Notes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar />
      <Header />
      <div className={styles.contentcontainer}>
        <div className={styles.contentwrapper}>
          <form className="form-group">
            <div className="form-group">
              <label>Title Name</label>
              <input type="text" name="name" value={state.name} onChange={handleChange} placeholder="Enter Title" className="form-control" required />
            </div>
            <div className="form-group">
              <label>Note</label>
              <textarea cols="45" type="text" rows="15" name="content" value={state.content} onChange={handleChange} placeholder="Enter Message" className="form-control" />
            </div>
            <div className="form-group">
              <input type="submit" name="submit" className="btn btn-secondary" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
