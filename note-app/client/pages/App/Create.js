import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import TextField from "@mui/material/TextField";
import { useState } from "react";

export default function Home() {
  //init
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");
  //handle
  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && notes) {
      console.log(title, notes);
    }
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
          <Container>
            <div>
              <Typography className={styles.title} color="textSeconadry" component="h2" gutterBottom>
                Create New
              </Typography>
              <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField onChange={(e) => setTitle(e.target.value)} className={styles.field} label="Title" variant="outlined" color="secondary" fullWidth required />
                <TextField onChange={(e) => setNotes(e.target.value)} className={styles.field} label="Notes" variant="outlined" color="secondary" multiline rows={7} fullWidth required />
                <Button className={styles.btn} type="submit" color="secondary" variant="contained">
                  Submit
                </Button>
              </form>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}
