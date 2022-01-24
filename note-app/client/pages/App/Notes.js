import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import NoteCard from "../components/NoteCard";

export default function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  const handleDelete = async (id) => {
    await fetch("" + id, {
      method: "DELETE",
    });

    const newNotes = notes.filter((note) => note.id != id);
    setNotes(newNotes);
  };

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
          <Grid container spacing={3}>
            {notes.map((note) => (
              <Grid item key={note.id} xs={12} ms={6} lg={4}>
                <NoteCard note={note} handleDelete={handleDelete} />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}
